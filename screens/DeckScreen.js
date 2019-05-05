import React from "react";
import DeckItem from "../components/DeckItem";
import ViewRoot from "../components/common/ViewRoot";
import DefaultButton from "../components/common/DefaultButton";
import {getDeck} from "../utils/api";
import {AppLoading} from "expo";
import {Text} from "react-native";

/**
 * Displays the title of the Deck
 * Displays the number of cards in the deck
 * Displays an option to start a quiz on this specific deck
 * An option to add a new question to the deck
 */
export default class DeckScreen extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.state.params.deckId
        }
    };

    state = {
        ready: false,
        deck: undefined
    };

    componentDidMount() {
        this._subscribe = this.props.navigation.addListener('didFocus', () => {
            this.setState(() => ({
                ready: false
            }));
            getDeck(this.props.navigation.state.params.deckId)
                .then((res) => {
                    this.setState(() => ({
                        deck: res,
                        ready: true
                    }))
                })
        });

    }

    handleAddCard = () => {
        this.props.navigation.navigate(
            'NewCard',
            {deckId: this.state.deck.title}
        )
    };

    handleStartQuiz = () => {
        this.props.navigation.navigate(
            'QuizScreen',
            {deckId: this.state.deck.title}
        )
    };

    render() {
        const {ready, deck} = this.state;
        if (!ready) {
            return (<AppLoading/>)
        }

        if (!deck) {
            return (<ViewRoot><Text>No such deck</Text></ViewRoot>);
        }

        return (
            <ViewRoot style={{alignItems: "center"}}>
                <DeckItem deck={deck} style={{marginBottom: 64}}/>
                <DefaultButton
                    onPress={this.handleAddCard}>
                    Add Card
                </DefaultButton>
                <DefaultButton
                    onPress={this.handleStartQuiz}>
                    Start Quiz
                </DefaultButton>
            </ViewRoot>
        );
    }

}
