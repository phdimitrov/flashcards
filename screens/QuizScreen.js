import React from "react";
import {StyleSheet, Text, View} from 'react-native';
import Card from "../components/Card";
import ViewRoot from "../components/common/ViewRoot";
import {black} from "../utils/theme";
import DefaultButton from "../components/common/DefaultButton";
import {getDeck} from "../utils/api";
import {AppLoading} from "expo";
import {clearLocalNotification, setLocalNotification} from "../utils/helpers";

/**
 * Displays a card question
 * an option to view the answer (flips the card)
 * a "Correct" button
 * an "Incorrect" button
 * the number of cards left in the quiz
 * Displays the percentage correct once the quiz is complete
 */
export default class QuizScreen extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.state.params.deckId + " Quiz"
        }
    };

    constructor(props) {
        super(props);

        this.state = {
            cardIndex: 0,
            correctAnswers: 0,
            ready: false,
            deck: undefined
        };
    }

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

    handleCorrectAnswer = () => {
        this.setState((prevState) => ({
            cardIndex: prevState.cardIndex + 1,
            correctAnswers: prevState.correctAnswers + 1
        }));
    };

    handleIncorrectAnswer = () => {
        this.setState((prevState) => ({
            cardIndex: prevState.cardIndex + 1,
        }));
    };

    handleRestartQuiz = () => {
        this.setState(() => ({
            cardIndex: 0,
            correctAnswers: 0,
        }));
    };

    handleBackToDeck = () => {
        this.props.navigation.goBack();
    };

    render() {
        const {ready, deck} = this.state;
        if (!ready) {
            return (<AppLoading/>)
        }

        if (!deck) {
            return (<ViewRoot><Text>No such deck</Text></ViewRoot>);
        }

        const {questions} = deck;
        const totalQuestions = questions.length;
        const {cardIndex} = this.state;

        const cardsLeft = Math.max(totalQuestions - cardIndex, 0);

        if (cardsLeft === 0) {
            //clear the notification for today and set a for tomorrow when quiz ends
            clearLocalNotification().then(setLocalNotification);

            //show results when no cards left
            const {correctAnswers} = this.state;
            const percentage = (totalQuestions === 0 ? 0 : (correctAnswers * 100) / totalQuestions).toFixed(2);
            return (
                <ViewRoot style={{alignItems: "center"}}>
                    <Text style={styles.result}>Results</Text>
                    <Text style={styles.resultSummary}>Correct {percentage}%</Text>
                    <DefaultButton onPress={this.handleRestartQuiz}>Restart Quiz</DefaultButton>
                    <DefaultButton onPress={this.handleBackToDeck}>Back to Deck</DefaultButton>
                </ViewRoot>
            )
        }

        const card = questions[cardIndex];
        return (
            <ViewRoot>
                {totalQuestions > 0
                    ?
                    <View style={{alignItems: "center"}}>
                        <Text style={styles.hint}>Cards: {cardsLeft} left of {totalQuestions}</Text>
                        <Card style={{marginBottom: 64}} card={card}/>
                        <DefaultButton onPress={this.handleCorrectAnswer}>Correct</DefaultButton>
                        <DefaultButton onPress={this.handleIncorrectAnswer}>Incorrect</DefaultButton>
                    </View>
                    :
                    <Text>No questions</Text>
                }
            </ViewRoot>
        );
    }
}

const styles = StyleSheet.create({
    hint: {
        fontSize: 10,
        color: black,
        fontStyle: "italic",
        alignSelf: "flex-start",
    },
    result: {
        fontSize: 22,
        color: black,
        textAlign: "center"
    },
    resultSummary: {
        fontStyle: "italic",
        fontSize: 16,
        textAlign: "center",
        marginBottom: 64
    }
});