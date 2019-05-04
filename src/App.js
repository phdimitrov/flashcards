import React from 'react';
import './App.css';
import HomeScreen from "./screens/HomeScreen";
import DeckScreen from "./screens/DeckScreen";
import {addCardToDeck, getDecks, saveDeckTitle} from "./utils/api";
import QuizScreen from "./screens/QuizScreen";
import {StyleSheet, Text, View} from "./utils/native";
import TextButton from "./components/common/TextButton";
import NewDeck from "./components/NewDeck";
import Card from "./components/Card";
import NewCard from "./components/NewCard";
import {lightGray, red} from "./utils/theme";
import ViewRoot from "./components/common/ViewRoot";

export default class App extends React.Component {

    render() {
        const newDeck = saveDeckTitle("Test");

        const card = {
            question: "Why?",
            answer: "IDK"
        };
        addCardToDeck(card, newDeck.title);
        addCardToDeck(card, newDeck.title);
        addCardToDeck(card, newDeck.title);

        return (
            <ViewRoot style={styles.app}>
                <HomeScreen/>
                {/*<DeckScreen deck={getDecks()[0]}/>*/}
                {/*<QuizScreen deck={getDecks()[2]}/>*/}
                {/*<NewDeck />*/}
                {/*<NewCard deck={getDecks()[2]}/>*/}
            </ViewRoot>
        );
    }
}

const styles = StyleSheet.create({
    app: {
        backgroundColor: lightGray,
        padding: 16
    }
});