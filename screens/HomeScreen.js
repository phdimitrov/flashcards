import React from "react";
import {Text} from 'react-native';
import DeckList from "../components/DeckList";
import {getDecks} from "../utils/api";
import ViewRoot from "../components/common/ViewRoot";
import {theme} from "../utils/theme";
import { AppLoading } from 'expo';

/**
 * Displays the title of each Deck
 * Displays the number of cards in each deck
 */
export default class HomeScreen extends React.Component {

    state = {
        ready: false,
        decks: []
    };

    componentDidMount() {
        getDecks()
            .then((res) => {
                this.setState(() => ({
                    decks: res,
                    ready: true
                }))
            })
    }

    render() {
        const {ready, decks} = this.state;
        if (!ready) {
            return (<AppLoading />)
        }

        return (
            <ViewRoot>
                <Text style={theme.header}>Total decks: {decks.length}</Text>
                <DeckList decks={decks}/>
            </ViewRoot>
        );
    }
}