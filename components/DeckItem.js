import React from "react";
import {StyleSheet, Text, TouchableWithoutFeedback} from 'react-native';
import PropTypes from "prop-types";
import {black, darkGray, red} from "../utils/theme";

/**
 * Displays deck information with ability to press on it
 */
export default class DeckItem extends React.Component {

    static propTypes = {
        deck: PropTypes.object.isRequired,
        onPress: PropTypes.func,
        style: PropTypes.object
    };

    render() {
        const {deck, onPress, style} = this.props;
        const {title, questions} = deck;
        return (
            <TouchableWithoutFeedback onPress={onPress} style={[{alignItems:"center"},style]}>
                <Text style={styles.header}>{title}</Text>
                <Text style={styles.subhead}>{questions.length} {questions.length === 1 ? "card" : "cards"}</Text>
            </TouchableWithoutFeedback>
        );
    }
}


const styles = StyleSheet.create({
    header: {
        fontSize: 20,
        textColor: black
    },
    subhead: {
        fontSize: 12,
        textColor: darkGray
    }
});