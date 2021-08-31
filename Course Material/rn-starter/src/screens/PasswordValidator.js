/*
Objective: Validate user generated password based on rules
*/

import React, {useState} from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';

const PasswordValidator =()=>{
    //Destructure useState
    const [password, setPassword] = useState('');

    return(
        //Standardized TextInput styling
        <View>
            <Text style={styles.titleText}>Enter A Password</Text>
            
            <TextInput
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.inputText}
                value={password}
                onChangeText={(newPassword)=> setPassword(newPassword)}
            />

            {//Conditional rendering
                password.length < 5
                ? <Text>Password is too short</Text>
                : <Text>Password is allowed</Text>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    titleText:{
        fontSize: 30,
        textAlign: 'center'
    },
    inputText:{
        borderColor: 'black',
        borderWidth: 1,
        margin: 15,
        fontSize: 25
    }
});

export default PasswordValidator;