import React from "react";
import {Text, TextField} from "../utils/native";
import {getDecks, saveDeckTitle} from "../utils/api";
import {theme} from "../utils/theme";
import DefaultButton from "./common/DefaultButton";
import ViewRoot from "./common/ViewRoot";

/**
 * An option to enter in the title for the new deck
 * An option to submit the new deck title
 */
export default class NewDeck extends React.Component {

    state = {
        title: ''
    };

    handleChangeText = (input) => {
        this.setState(() => ({
            title: input
        }));
    };

    handleSubmit = () => {
        saveDeckTitle(this.state.title);
        this.setState(() => ({
            title: ''
        }));
        console.log("Saved", getDecks());
        //TODO
    };

    render() {
        return (
            <ViewRoot keyboardAware={true} style={{alignItems: "center"}}>
                <Text style={theme.header}>What is the title of your new deck?</Text>
                <TextField
                    style={theme.textField}
                    placeholder="Set title"
                    value={this.state.title}
                    onChangeText={this.handleChangeText}
                />
                <DefaultButton onPress={this.handleSubmit}>Submit</DefaultButton>
            </ViewRoot>
        );
    }
}