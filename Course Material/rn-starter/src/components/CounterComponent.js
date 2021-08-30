/*
Objective: Create a child component for the Counter parent 
component
*/

import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

const CounterComponents =({increase, decrease})=>{
    return(
        <View>
            <TouchableOpacity onPress={()=> increase()}
            style={{marginVertical: 20}}>
                <Text style={styles.buttonText}>Increase</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> decrease()}
            style={{marginVertical: 20}}>
                <Text style={styles.buttonText}>Decrease</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonText:{
        fontSize: 25
    }
});

export default CounterComponents;