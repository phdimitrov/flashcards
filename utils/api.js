import {AsyncStorage} from 'react-native';

const DECK_STORAGE_KEY = 'flashcards:deck';

//return all of the decks along with their titles, questions, and answers.
export function getDecks() {
    return AsyncStorage
        .getItem(DECK_STORAGE_KEY)
        .then((data) => {
            if (!data || Object.keys(data).length === 0) {

                //if no initial data add the bundled one
                return AsyncStorage
                    .mergeItem(DECK_STORAGE_KEY, JSON.stringify(DECKS_BUNDLED))
                    .then(() => AsyncStorage.getItem(DECK_STORAGE_KEY));

            } else {
                return data;
            }
        })
        .then((data) => {
            const decks = JSON.parse(data);
            return Object.values(decks);
        })
}

//take in a single id argument and return the deck associated with that id.
export function getDeck(title) {
    return AsyncStorage
        .getItem(DECK_STORAGE_KEY)
        .then((data) => {
            const decks = JSON.parse(data);
            return decks[title];
        })
}

//take in a single title argument and add it to the decks.
export function saveDeckTitle(title) {
    return AsyncStorage
        .mergeItem(DECK_STORAGE_KEY, JSON.stringify({
            [title]: {
                title: title,
                questions: []
            }
        }))
}

// take in two arguments, title and card,
// and will add the card to the list of questions for the deck with the associated title.
export function addCardToDeck(card, title) {
    return getDeck(title)
        .then((deck) => {
            return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
                [deck.title]: {
                    title: deck.title,
                    questions: deck.questions.concat([card])
                }
            }));
        })
}

///////////////////////////////////////////////////////////////////////////////

let DECKS_BUNDLED = {
    React: {
        title: 'React',
        questions: [
            {
                question: 'What is React?',
                answer: 'A library for managing user interfaces'
            },
            {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event'
            }
        ]
    },
    JavaScript: {
        title: 'JavaScript',
        questions: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
        ]
    }
};