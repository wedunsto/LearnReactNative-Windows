/*
Objective: Create a component to review Flex Box
basics
*/

import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const FlexScreen =()=>{
    return(
        <View>
            <View>
                <Text style={styles.textStyle}>Child #1</Text>
                <Text style={styles.textStyle}>Child #2</Text>
                <Text style={styles.textStyle}>Child #3</Text>
            </View>
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
        alignItems: 'flex-start',
    },
    viewTwo:{
        alignItems: 'center',
    },
    viewThree:{
        alignItems: 'flex-end'
    },
    textStyle:{
        fontSize: 30,
        borderWidth: 1,
        borderColor: 'red'
    }
});

export default FlexScreen;