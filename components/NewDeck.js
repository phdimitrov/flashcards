import React from "react";
import {Text, TextInput} from 'react-native';
import {getDecks, saveDeckTitle} from "../utils/api";
import {theme} from "../utils/theme";
import DefaultButton from "./common/DefaultButton";
import ViewRoot from "./common/ViewRoot";
import { AppLoading } from 'expo';

/**
 * An option to enter in the title for the new deck
 * An option to submit the new deck title
 */
export default class NewDeck extends React.Component {

    state = {
        title: '',
        loading: false
    };

    handleChangeText = (input) => {
        this.setState(() => ({
            title: input
        }));
    };

    handleSubmit = () => {
        this.setState(() => ({
            title: '',
            loading: true
        }));

        saveDeckTitle(this.state.title)
            .then((res) => {
                this.setState(() => ({
                    loading: false
                }))
            });

        console.log("Saved", getDecks());
        //TODO
    };

    render() {
        const {loading, title} = this.state;
        if (loading) {
            return (<AppLoading />)
        }

        return (
            <ViewRoot keyboardAware={true} style={{alignItems: "center"}}>
                <Text style={theme.header}>What is the title of your new deck?</Text>
                <TextInput
                    style={theme.textInput}
                    placeholder="Set title"
                    value={title}
                    onChangeText={this.handleChangeText}
                />
                <DefaultButton onPress={this.handleSubmit}>Submit</DefaultButton>
            </ViewRoot>
        );
    }
}