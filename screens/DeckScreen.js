import React from "react";
import DeckItem from "../components/DeckItem";
import PropTypes from "prop-types";
import ViewRoot from "../components/common/ViewRoot";
import DefaultButton from "../components/common/DefaultButton";

/**
 * Displays the title of the Deck
 * Displays the number of cards in the deck
 * Displays an option to start a quiz on this specific deck
 * An option to add a new question to the deck
 */
export default class DeckScreen extends React.Component {

    static propTypes = {
        deck: PropTypes.object.isRequired
    };

    handleAddCard = () => {
        console.log("add Card", this.props.deck)
        //TODO
    };

    handleStartQuiz = () => {
        console.log("start quiz", this.props.deck)
        //TODO
    };

    render() {
        console.log(this.props);
        const {deck} = this.props;
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
