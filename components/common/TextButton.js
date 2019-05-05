import React from 'react'
import {StyleSheet, Text, TouchableOpacity} from 'react-native'
import {red} from '../../utils/theme'

export default function TextButton({children, onPress, style = {}}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={[styles.textButton, style]}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    textButton: {
        minWidth: 100,
        padding: 8,
        fontSize: 12,
        textAlign: 'center',
        color: red,
    }
});