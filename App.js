import React from 'react';
import {StyleSheet} from 'react-native';
import HomeScreen from "./screens/HomeScreen";
import {lightGray} from "./utils/theme";
import ViewRoot from "./components/common/ViewRoot";
import DeckScreen from "./screens/DeckScreen";
import {getDecks} from "./utils/api";
import QuizScreen from "./screens/QuizScreen";
import NewDeck from "./components/NewDeck";
import NewCard from "./components/NewCard";

export default class App extends React.Component {
    render() {
        return (
            <ViewRoot style={styles.app}>
                <HomeScreen/>
                {/*<DeckScreen deck={getDecks()[0]}/>*/}
                {/*<QuizScreen deck={getDecks()[1]}/>*/}
                {/*<NewDeck />*/}
                {/*<NewCard deck={getDecks()[1]}/>*/}
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
