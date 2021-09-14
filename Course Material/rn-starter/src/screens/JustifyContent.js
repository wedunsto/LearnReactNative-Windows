/*
Objective: Display the justify content properties
*/

import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const JustifyContent =()=>{
    return(
        <View>
            <View style={styles.viewFour}>
                <Text style={styles.textStyle}>Child #1</Text>
                <Text style={styles.textStyle}>Child #2</Text>
                <Text style={styles.textStyle}>Child #3</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    viewOne:{
        borderWidth: 4,
        borderColor: 'green',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    viewTwo:{
        borderWidth: 4,
        borderColor: 'red',
        justifyContent: 'flex-end'
    },
    viewThree:{
        borderWidth: 4,
        borderColor: 'green',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    viewFour:{
        borderWidth: 4,
        borderColor: 'green',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 200,
        width: 300
    },
    viewFive:{
        borderWidth: 4,
        borderColor: 'green',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    textStyle:{
        fontSize: 15,
        color: 'white',
        backgroundColor: 'black',
        borderWidth: 5,
        borderColor: 'purple'
    }
});

export default JustifyContent;