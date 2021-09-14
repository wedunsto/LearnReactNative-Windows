/*
Objective: Display the horizontal flex properties of 
flex direction
*/

import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const FlexDirection =()=>{
    return(
        <View style={{height:300}}>
            <View style={styles.viewOne}>
                <Text style={styles.textStyle}>Child #1</Text>
                <Text style={styles.textStyle}>Child #2</Text>
                <Text style={styles.textStyle}>Child #3</Text>
            </View>
            <View style={styles.viewTwo}>
                <Text style={styles.textStyle}>Child #1</Text>
                <Text style={styles.textStyle}>Child #2</Text>
                <Text style={styles.textStyle}>Child #3</Text>
            </View>
            <View style={styles.viewThree}>
                <Text style={styles.textStyle}>Child #1</Text>
                <Text style={styles.textStyle}>Child #2</Text>
                <Text style={styles.textStyle}>Child #3</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    viewOne:{
        borderWidth:10,
        borderColor: 'red',
        flexDirection: 'row',
        alignItems: 'flex-start',
        height: 200
    },
    viewTwo:{
        borderWidth:10,
        borderColor: 'blue',
        flexDirection: 'row',
        alignItems: 'center',
        height: 200
    },
    viewThree:{
        borderWidth:10,
        borderColor: 'green',
        flexDirection: 'row',
        alignItems: 'flex-end',
        height: 200
    },
    textStyle:{
        borderColor: 'purple',
        borderWidth: 5,
        fontSize: 20
    }
});

export default FlexDirection;