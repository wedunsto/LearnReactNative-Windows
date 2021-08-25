/*
Objective: Generate random colors
           Control how much of each color exists
*/

import React, {useState} from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const AdvancedColorScreen =()=> {
    //Destructure useState arrays for each color
    const [red,setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    //Create a function that returns a random color
    const randomRgb =()=>{
        const red = Math.floor(Math.random()*256);
        const green = Math.floor(Math.random()*256);
        const blue = Math.floor(Math.random()*256);

        return `rgb(${red},${green},${blue})`;
    };

    //Set up child components
    //Create callback functions to change the state value as a prop
    //Reflect changes to state value in the background color
    return(
        <View>
            <ColorCounter
                color = 'red'
                increase = {()=>setRed(red + 1)}
                decrease = {()=>setRed(red - 1)}
            />
            <ColorCounter
                color = 'green'
                increase = {()=>setGreen(green + 1)}
                decrease = {()=>setGreen(green - 1)}
            />
            <ColorCounter
                color = 'blue'
                increase = {()=>setBlue(blue + 1)}
                decrease = {()=>setBlue(blue - 1)}
            />
            <View style={{width: 100, height: 100, backgroundColor: `rgb(${red},${green},${blue})`}}/>
        </View>
    );
};

const styles = StyleSheet.create({});

export default AdvancedColorScreen;