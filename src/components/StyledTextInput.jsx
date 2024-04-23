import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    textInput: {
        borderRadius: 20,
        marginVertical: 20,
        borderWidth: 1,
        borderColor: '#999',
        paddingHorizontal: 25,
        paddingVertical: 15,
        fontSize: 18,
        color: '#eee',
    }
});
const StyledTextInput = ({style = {}, ...props}) => {
    const inputStyle = {
        ...styles.textInput,
        ...style
    }
    
    return <TextInput style={inputStyle} {...props} />

}

export default StyledTextInput;