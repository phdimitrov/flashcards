import React from 'react'
import {KeyboardAvoidingView, StyleSheet, View} from 'react-native'
import {lightGray} from "../../utils/theme";

export default function ViewRoot({children, onPress, keyboardAware = false, style = {}}) {
    return (
        keyboardAware
            ?
            <KeyboardAvoidingView
                behavior="padding"
                style={[styles.container, style]}
                onPress={onPress}>
                {children}
            </KeyboardAvoidingView>
            :
            <View
                style={[styles.container, style]}
                onPress={onPress}>
                {children}
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: lightGray,
        padding: 16,
    }
});