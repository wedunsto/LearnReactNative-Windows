/*
Objective: Create a text input child component for the 
search anime parent component
*/

import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const SearchAnimeTextInput =({value,onChangeText})=>{
    return(
        <TextInput
        style={styles.textInput}
        autoCapitalize='none'
        autoComplete={false}
        value={value}
        onChangeText={(newValue)=> onChangeText(newValue)}/>
    );
};

const styles = StyleSheet.create({
    textInput:{
        fontSize: 30,
        borderColor: 'black',
        borderWidth: 1,
        margin: 15,
        marginVertical: 30
    }
});

export default SearchAnimeTextInput;