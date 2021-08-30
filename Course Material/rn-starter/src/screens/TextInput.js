/*
Objective: Create a component to allow users enter text
and display the user entered text
*/

import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';

const UserTextInput =()=>{
    //Destructure useState
    const [name, setName] = useState('');

    return(
        <View>
            <Text style={styles.uiText}>Enter your Name</Text>
            <TextInput style={styles.textInputStyle}
            //TextInput: Allow user to enter text
            //Prevent auto interruptions
            autoCapitalization= 'none'
            autoCorrect={false}
            //Utilze callback system
            value={name}
            onChangeText={(newValue)=> setName(newValue)}
            />
            <Text style={styles.uiText}>Your name is {name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    uiText:{
        fontSize: 25
    },
    textInputStyle:{
        //Basic styling needed to see text input
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
        fontSize: 30
    }
});

export default UserTextInput;