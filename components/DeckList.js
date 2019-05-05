import React from "react";
import {FlatList, Text, View} from 'react-native';
import DeckItem from "./DeckItem";
import PropTypes from "prop-types";
import {theme} from "../utils/theme";

export default class DeckList extends React.Component {

    static propTypes = {
        decks: PropTypes.array.isRequired,
        navigation: PropTypes.object.isRequired,
    };

    onDeckPress = (deck) => {
        this.props.navigation.navigate(
            'DeckScreen',
            {deckId: deck.title}
        )
    };

    renderItem = ({item}) => {
        return <DeckItem style={theme.listItem} deck={item} onPress={() => this.onDeckPress(item)}/>
    };

    render() {
        const {decks} = this.props;
        return (
            <View>
                {decks.length !== 0
                    ? (<FlatList data={decks} renderItem={this.renderItem} keyExtractor={(item, index) => item.title}/>)
                    : (<Text style={theme.emptyList}>Empty list</Text>)
                }
            </View>
        );
    }
}