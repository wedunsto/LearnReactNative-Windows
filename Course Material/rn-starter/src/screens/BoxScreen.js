/*
Objective: Create a component to review the
Box Object Model basics
*/

import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const BoxScreen =()=>{
    return(
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Box Screen</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    viewStyle:{
        borderWidth: 1,
        borderColor: 'black',
        borderWidth: 1
    },
    textStyle:{
        borderWidth: 1,
        borderColor: 'red',
        margin: 20
    }
});

export default BoxScreen;