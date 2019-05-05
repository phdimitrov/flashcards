import React from "react";
import {Text} from 'react-native';
import DeckList from "../components/DeckList";
import {getDecks} from "../utils/api";
import ViewRoot from "../components/common/ViewRoot";
import {theme} from "../utils/theme";
import {AppLoading} from 'expo';

/**
 * Displays the title of each Deck
 * Displays the number of cards in each deck
 */
export default class HomeScreen extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: 'Decks'
        }
    };

    state = {
        ready: false,
        decks: []
    };

    componentDidMount() {
        this._subscribe = this.props.navigation.addListener('didFocus', () => {
            this.setState(() => ({
                ready: false
            }));

            getDecks()
                .then((res) => {
                    this.setState(() => ({
                        decks: res,
                        ready: true
                    }))
                })
        });

    }

    render() {
        const {ready, decks} = this.state;
        if (!ready) {
            return (<AppLoading/>)
        }

        return (
            <ViewRoot style={{paddingBottom: 54}}>
                <Text style={theme.header}>Total decks: {decks.length}</Text>
                <DeckList decks={decks} navigation={this.props.navigation}/>
            </ViewRoot>
        );
    }
}