import React from "react";
import DeckItem from "../components/DeckItem";
import PropTypes from "prop-types";
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

    static propTypes = {
        deckId: PropTypes.string.isRequired
    };

    state = {
        ready: false,
        deck: undefined
    };

    componentDidMount() {
        getDeck(this.props.deckId)
            .then((res) => {
                console.log(res);
                this.setState(() => ({
                    deck: res,
                    ready: true
                }))
            })
    }

    handleAddCard = () => {
        console.log("add Card", this.state.deck)
        //TODO
    };

    handleStartQuiz = () => {
        console.log("start quiz", this.state.deck)
        //TODO
    };

    render() {
        const {ready, deck} = this.state;
        if (!ready) {
            return (<AppLoading />)
        }

        if (!deck) {
            return(<ViewRoot><Text>No such deck</Text></ViewRoot>);
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
