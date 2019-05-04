import React from "react";
import PropTypes from 'prop-types';
import {Text, TextField} from "../utils/native";
import {addCardToDeck, getDecks} from "../utils/api";
import {theme} from "../utils/theme";
import ViewRoot from "./common/ViewRoot";
import DefaultButton from "./common/DefaultButton";

/**
 * An option to enter in the question
 * An option to enter in the answer
 * An option to submit the new question
 */
export default class NewCard extends React.Component {

    static propTypes = {
        deck: PropTypes.object.isRequired
    };

    state = {
        question: '',
        answer: ''
    };

    handleQuestionChangeText = (input) => {
        this.setState(() => ({
            question: input
        }));
    };

    handleAnswerChangeText = (input) => {
        this.setState(() => ({
            answer: input
        }));
    };

    handleSubmit = () => {
        const card = {
            question: this.state.question,
            answer: this.state.answer
        };

        addCardToDeck(card, this.props.deck.title);
        this.setState(() => ({
            question: '',
            answer: '',
        }));
        console.log("Saved", getDecks());
        //TODO
    };

    render() {
        return (
            <ViewRoot keyboardAware={true} style={{alignItems: "center"}}>
                <Text style={theme.header}>Add card with question and an answer!</Text>
                <TextField
                    style={theme.textField}
                    placeholder="Set question"
                    value={this.state.question}
                    onChangeText={this.handleQuestionChangeText}
                />
                <TextField
                    style={theme.textField}
                    placeholder="Set answer"
                    value={this.state.answer}
                    onChangeText={this.handleAnswerChangeText}
                />
                <DefaultButton onPress={this.handleSubmit}>Submit</DefaultButton>
            </ViewRoot>

        );
    }

}