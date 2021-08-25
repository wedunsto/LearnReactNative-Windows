/*
Objective: Create the child component to the AnimeDisplay
parent component
*/

import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

//destructure props argument for name string and setCurrentAnime callback function
const AnimeDisplayDetails =({name, setCurrentAnime})=> {
    return(
        <TouchableOpacity onPress={()=> setCurrentAnime()}>
            <Text style={styles.buttonText}>{name}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonText:{
        fontSize: 30,
        color: 'white'
    }
});

export default AnimeDisplayDetails;