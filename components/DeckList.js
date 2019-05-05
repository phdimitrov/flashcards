import React from "react";
import {FlatList, Text, View} from 'react-native';
import DeckItem from "./DeckItem";
import PropTypes from "prop-types";
import {theme} from "../utils/theme";

export default class DeckList extends React.Component {

    static propTypes = {
        decks: PropTypes.array.isRequired
    };

    onDeckPress = (deck) => {
        console.log(deck);
        //TODO open DECK Screen
    };

    renderItem = ({item}) => {
        return <DeckItem style={theme.listItem} deck={item} onPress={() => this.onDeckPress(item)}/>
    };

    render() {
        const {decks} = this.props;
        return (
            <View>
                {decks.length !== 0
                    ? (<FlatList data={decks} renderItem={this.renderItem}/>)
                    : (<Text style={theme.emptyList}>Empty list</Text>)
                }
            </View>
        );
    }
}