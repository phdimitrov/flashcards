import {StyleSheet} from 'react-native';

export const white = '#fff';
export const lightGray = '#e8e8e8';
export const gray = '#a0a0a0';
export const darkGray = '#6d6d6d';
export const black = '#000';

export const red = '#b71845'
export const orange = '#f26f28'
export const lightBlue = '#9eccff';
export const blue = '#4e4cb8'
export const purple = '#292477'
export const lightPurp = '#7c53c3'
export const pink = '#b93fb3'

export const theme = StyleSheet.create({
    header: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 20,
        marginBottom: 20,
    },
    listItem: {
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: darkGray,
        borderRadius: 5,
        marginBottom: 20,
        textAlign: "center",
        backgroundColor: gray,
        padding: 8,
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
            width: 0,
            height: 3
        },
    },
    emptyList: {
        textAlign: "center",
        fontSize: 12,
        fontStyle: "italic"
    },
    buttonDefault: {
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: gray,
        borderRadius: 5,
        backgroundColor: lightBlue,
        margin: 8,
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
            width: 0,
            height: 3
        },
        textAlign: 'center',
        color: black,
        padding: 8,
        minWidth: 100,
        justifyContent: "center",
        alignItems: "center",
    },
    textField: {
        fontSize: 20,
        minWidth: 280,
        marginBottom: 8,
    },
});