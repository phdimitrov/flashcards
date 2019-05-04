import React from "react";
import {StyleSheet, Text, View} from "../utils/native";
import TextButton from "./common/TextButton";
import PropTypes from "prop-types";

/**
 * Show card with ability to flip it from question to answer
 */
export default class Card extends React.Component {

    static propTypes = {
        card: PropTypes.object.isRequired,
        style: PropTypes.object
    };

    state = {
        answerMode: false
    };

    handleCardFlip = () => {
        this.setState((prevState) => ({
            answerMode: !prevState.answerMode
        }));
    };

    render() {
        const {answerMode} = this.state;
        const {question, answer} = this.props.card;

        return (
            <View style={[this.props.style]}>
                <Text style={styles.header}>{answerMode ? answer : question}</Text>
                <TextButton onPress={this.handleCardFlip}>Show {answerMode ? "question" : "answer"}</TextButton>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        minWidth: 300,
        padding: 8,
        fontSize: 22,
        textAlign: 'center',
        marginBottom: 0,
    }
});