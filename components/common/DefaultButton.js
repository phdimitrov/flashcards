import React from 'react'
import {Text, TouchableOpacity} from 'react-native'
import {theme} from '../../utils/theme'

export default function DefaultButton({children, onPress, style = {}}) {
    return (
        <TouchableOpacity
            style={[theme.buttonDefault, style]}
            onPress={onPress}>
            <Text>{children}</Text>
        </TouchableOpacity>
    )
}