import React from "react";
import {StyleSheet, Text, View, Animated} from 'react-native'
import TextButton from "./common/TextButton";
import PropTypes from "prop-types";

/**
 * Show card with ability to toggle question to answer
 */
export default class Card extends React.Component {

    static propTypes = {
        card: PropTypes.object.isRequired,
        style: PropTypes.object
    };

    static getDerivedStateFromProps(props, state) {
        if (props.card !== state.card) {
            state.card = props.card;
            state.answerMode = false;
            return state;
        }

        return null;
    }

    constructor(props) {
        super(props);

        this.state = {
            answerMode: false,
            card: props.card,
            bounceValue: new Animated.Value(1),
        };
    }

    handleCardFlip = () => {
        Animated.sequence([
            Animated.timing(this.state.bounceValue, { duration: 200, toValue: 1.04}),
            Animated.spring(this.state.bounceValue, { toValue: 1, friction: 4})
        ]).start();

        this.setState((prevState) => ({
            answerMode: !prevState.answerMode
        }));
    };

    render() {
        const {answerMode, bounceValue, card} = this.state;
        const {question, answer} = card;

        return (
            <View style={[this.props.style]}>
                <Animated.Text
                    style={[styles.header, {transform: [{scale: bounceValue}]}]}>
                    {answerMode ? answer : question}
                    </Animated.Text>
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