/*
Objective: Child component to the AdvancedColorScreen
           parent component
*/

import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Touchable} from 'react-native';

const ColorCounter =({color, increase, decrease})=>{
    return(
        <View>
            <Text style={styles.titleText}>{`${color}`}</Text>
            <TouchableOpacity onPress = {() =>increase()}>
                <Text style={styles.buttonText}>{`Increase ${color}`}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress = {()=> decrease()}>
                <Text style={styles.buttonText}>{`Decrease ${color}`}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    titleText:{
        fontSize: 30,
        textAlign: 'center',
        marginVertical: 10
    },
    buttonText:{
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 15
    }
});

export default ColorCounter;