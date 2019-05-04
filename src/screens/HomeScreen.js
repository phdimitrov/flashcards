import React from "react";
import {Text} from "../utils/native";
import DeckList from "../components/DeckList";
import {getDecks} from "../utils/api";
import ViewRoot from "../components/common/ViewRoot";
import {theme} from "../utils/theme";

/**
 * Displays the title of each Deck
 * Displays the number of cards in each deck
 */
export default class HomeScreen extends React.Component {

    render() {
        const decks = getDecks();
        const numOfDecks = Object.keys(decks).length;

        return (
            <ViewRoot>
                <Text style={theme.header}>Total decks: {numOfDecks}</Text>
                <DeckList decks={decks}/>
            </ViewRoot>
        );
    }
}