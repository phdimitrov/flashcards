import React from "react";
import {StyleSheet, Text, View} from 'react-native';
import Card from "../components/Card";
import PropTypes from "prop-types";
import ViewRoot from "../components/common/ViewRoot";
import {black} from "../utils/theme";
import DefaultButton from "../components/common/DefaultButton";

/**
 * Displays a card question
 * an option to view the answer (flips the card)
 * a "Correct" button
 * an "Incorrect" button
 * the number of cards left in the quiz
 * Displays the percentage correct once the quiz is complete
 */
export default class QuizScreen extends React.Component {

    static propTypes = {
        deck: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            cardIndex: 0,
            correctAnswers: 0,
        };
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

    render() {
        const {deck} = this.props;
        const {questions} = deck;

        const totalQuestions = questions.length;
        const {cardIndex} = this.state;

        const cardsLeft = Math.max(totalQuestions - cardIndex, 0);

        if (cardsLeft === 0) {
            //show results when no cards left
            const {correctAnswers} = this.state;
            const percentage = (totalQuestions === 0 ? 0 : (correctAnswers * 100) / totalQuestions).toFixed(2);
            return (
                <View>
                    <Text style={styles.result}>Results</Text>
                    <Text style={styles.resultSummary}>Correct {percentage}%</Text>
                </View>
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
        textAlign: "center"
    }
});