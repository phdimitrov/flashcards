import React from 'react'
import {StyleSheet, View, KeyboardAvoidingView} from 'react-native'

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
    }
});