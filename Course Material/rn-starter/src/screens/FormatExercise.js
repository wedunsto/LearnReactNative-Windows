import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const FormatExercise =()=>{
    return(
        <View style={styles.view}>
            <View style={styles.view1}></View>
            <View style={styles.view2}></View>
            <View style={styles.view3}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    view:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    view1:{
        height: 100,
        width: 100,
        backgroundColor: 'red'
    },
    view2:{
        height: 100,
        width: 100,
        backgroundColor: 'black',
        marginTop: 100
    },
    view3:{
        height: 100,
        width: 100,
        backgroundColor: 'blue'
    }
});

export default FormatExercise;