//return all of the decks along with their titles, questions, and answers.
export function getDecks () {
    return Object.values(DECKS_BUNDLED);
}

//take in a single id argument and return the deck associated with that id.
export function getDeck (title) {
    return DECKS_BUNDLED[title];
}

//take in a single title argument and add it to the decks.
export function saveDeckTitle (title) {
    DECKS_BUNDLED = {
        ...DECKS_BUNDLED,
        [title]: {
            title: title,
            questions: []
        }
    };
    return getDeck(title)
}

// take in two arguments, title and card,
// and will add the card to the list of questions for the deck with the associated title.
export function addCardToDeck(card, title) {
    DECKS_BUNDLED = {
        ...DECKS_BUNDLED,
        [title]: {
            ...DECKS_BUNDLED[title],
            questions: DECKS_BUNDLED[title].questions.concat([card])
        }
    };
    return getDeck(title);
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