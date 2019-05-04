import React from 'react'

//array of object to object
const reducer = (accumulator, currentValue) => {
    return {...accumulator, ...currentValue};
};

const convertStyle = (style) => {
    return style
        ? Array.isArray(style) ? style.reduce(reducer) : style
        : {};
};

export const Text = props => (
    <div style={convertStyle(props.style)}>{props.children}</div>
);

export const View = props => (
    <div style={convertStyle(props.style)}>{props.children}</div>
);

export const KeyboardAvoidingView = props => (
    <div style={convertStyle(props.style)}>{props.children}</div>
);

export const TextField = props => (
    <input
        placeholder={props.placeholder}
        value={props.value}
        style={convertStyle(props.style)}
        type="text"
        onChange={(e) => {
            if (props.onChange) {
                props.onChange(e);
            }
            if (props.onChangeText) {
                props.onChangeText(e.target.value);
            }
        }}/>
);

export const FlatList = props => (
    <ul style={convertStyle(props.style)}>
        {Object.keys(props.data).map((id) => (
            <li key={id}>
                {console.log(props.data[id])}
                {props.renderItem({item: props.data[id]})}
            </li>
        ))}
    </ul>
);

export const TouchableOpacity = props => (
    <div style={convertStyle(props.style)} onClick={(e) => {
        if (props.onPress) props.onPress()
    }}>{props.children}</div>
);

export const TouchableWithoutFeedback = props => (
    <div style={convertStyle(props.style)} onClick={(e) => {
        if (props.onPress) props.onPress()
    }}>{props.children}</div>
);

export const StyleSheet = {
    create: function (obj) {
        return obj;
    }
};