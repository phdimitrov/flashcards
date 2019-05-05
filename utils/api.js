import {AsyncStorage} from 'react-native';

const DECK_STORAGE_KEY = 'flashcards:deck';

//check if storage is empty and adds the initial data to it
function forTesting() {
    return AsyncStorage.getAllKeys().then((res) => {console.log("All:", res); return res;})
    //return AsyncStorage.clear();
}

//return all of the decks along with their titles, questions, and answers.
export function getDecks() {
    forTesting();

    return AsyncStorage
        .getItem(DECK_STORAGE_KEY)
        .then((data) => {
            console.log("getItem", data);
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

    // return Object.values(DECKS_BUNDLED);
}

//take in a single id argument and return the deck associated with that id.
export function getDeck(title) {
    forTesting();

    return AsyncStorage
        .getItem(DECK_STORAGE_KEY)
        .then((data) => {
            console.log("getItem", data);
            const decks = JSON.parse(data);
            return decks[title];
        })

    // return DECKS_BUNDLED[title];
}

//take in a single title argument and add it to the decks.
export function saveDeckTitle(title) {
    forTesting();

    return AsyncStorage
        .mergeItem(DECK_STORAGE_KEY, JSON.stringify({
            [title]: {
                title: title,
                questions: []
            }
        }))


    // DECKS_BUNDLED = {
    //     ...DECKS_BUNDLED,
    //     [title]: {
    //         title: title,
    //         questions: []
    //     }
    // };
    // return getDeck(title)
}

// take in two arguments, title and card,
// and will add the card to the list of questions for the deck with the associated title.
export function addCardToDeck(card, title) {
    forTesting();
    console.log("Ad card", card, title);

    return getDeck(title)
        .then((deck) => {
            console.log("Ad card2", deck);
            return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
                [deck.title]: {
                    title: deck.title,
                    questions: deck.questions.concat([card])
                }
            }));
        })
    // DECKS_BUNDLED = {
    //     ...DECKS_BUNDLED,
    //     [title]: {
    //         ...DECKS_BUNDLED[title],
    //         questions: DECKS_BUNDLED[title].questions.concat([card])
    //     }
    // };
    // return getDeck(title);
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