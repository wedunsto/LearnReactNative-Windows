/*
Objective: Hold the image and text elements 
for the parent component
*/

import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

const AnimeDetails =({name, image})=> {
    return(
        <View>
            <Image style={styles.imageStyle} source = {image}/>
            <Text style={styles.buttonText}>{name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    imageStyle:{
        height: 200,
        width: 300
    },
    buttonText:{
        fontSize: 20,
        marginVertical: 10
    }
});

export default AnimeDetails;