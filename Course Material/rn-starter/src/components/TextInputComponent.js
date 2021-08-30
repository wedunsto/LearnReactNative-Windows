/*
Objective: Create a child component for the TextInput parent
component
*/
import React from 'react';
import {Text, TextInput, StyleSheet} from 'react-native';

const TextInputComponent =({value, onChangeText})=>{
    return(
        //TextInput: Allow user to enter text
        <TextInput style={styles.textInputStyle}
        //Prevent auto interruptions
        autoCapitalization= 'none'
        autoCorrect={false}
        //Utilze callback system
        value={value}
        onChangeText={(newValue)=> onChangeText(newValue)}
        />
    );
};

const styles = StyleSheet.create({
    textInputStyle:{
        //Basic styling needed to see text input
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
        fontSize: 30
    }
});

export default TextInputComponent;