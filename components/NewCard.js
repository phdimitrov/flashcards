import React from "react";
import {Text, TextInput} from 'react-native';
import {addCardToDeck, getDeck, getDecks} from "../utils/api";
import {theme} from "../utils/theme";
import ViewRoot from "./common/ViewRoot";
import DefaultButton from "./common/DefaultButton";
import {AppLoading} from "expo";

/**
 * An option to enter in the question
 * An option to enter in the answer
 * An option to submit the new question
 */
export default class NewCard extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.state.params.deckId
        }
    };

    state = {
        question: '',
        answer: '',
        deck: undefined,
        ready: false
    };

    componentDidMount() {
        console.log("NewCard========", this.props.navigation.state.params.deckId);

        getDeck(this.props.navigation.state.params.deckId)
            .then((res) => {
                console.log(res);
                this.setState(() => ({
                    deck: res,
                    ready: true
                }))
            })
    }

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

        this.setState(() => ({
            question: '',
            answer: '',
            ready: false,
        }));

        addCardToDeck(card, this.state.deck.title)
            .then((res) => {
                this.setState(() => ({
                    ready: true
                }));
                alert("Saved");
            });
    };

    render() {
        const {ready, deck, question, answer} = this.state;
        if (!ready) {
            return (<AppLoading/>)
        }

        if (!deck) {
            return (<ViewRoot><Text>No such deck</Text></ViewRoot>);
        }

        return (
            <ViewRoot keyboardAware={true} style={{alignItems: "center"}}>
                <Text style={theme.header}>Add card with question and an answer!</Text>
                <TextInput
                    style={theme.textInput}
                    placeholder="Set question"
                    value={question}
                    onChangeText={this.handleQuestionChangeText}
                />
                <TextInput
                    style={theme.textInput}
                    placeholder="Set answer"
                    value={answer}
                    onChangeText={this.handleAnswerChangeText}
                />
                <DefaultButton onPress={this.handleSubmit}>Submit</DefaultButton>
            </ViewRoot>

        );
    }

}