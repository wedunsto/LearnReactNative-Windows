/*
Objective: Perform the same actions in the AdvancedColorScreen
component with a Reducer
*/

import React, {useReducer} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter';

//function that manages changes to an object
//state: object that has all the state values
//action: object that describes the updates we want to make
const reducer =(state,action)=>{
    switch(action.colorToChange){
        case 'red':
            //copy the current state to a new object
            //Update the red value
            return(state.red + action.amount>255 || state.red+action.amount<0
                ? state
                :{...state,red:state.red+action.amount});
        case 'green':
            return(state.green + action.amount>255 || state.green+action.amount<0
                ? state
                :{...state,green:state.green+action.amount});
        case 'blue':
            return(state.blue + action.amount>255 || state.blue+action.amount<0
                ? state
                :{...state,blue:state.blue+action.amount});
    };
};

const CorrectAdvancedColorScreen =()=>{
    //destructure the useReducer array
    const [state, dispatch] = useReducer(reducer,{red:0,green:0,blue:0});
    //Destructure the state object
    const {red,green,blue} = state;
    return(
        <View>
            <ColorCounter
            color='red'
            //dispatch runs the reducer and makes changes to the state value
            increase={()=> dispatch({colorToChange: 'red', amount: 10})}
            decrease={()=> dispatch({colorToChange: 'red', amount: -10})}
        />
        <ColorCounter
            color='blue'
            //dispatch runs the reducer and makes changes to the state value
            increase={()=> dispatch({colorToChange: 'blue', amount: 10})}
            decrease={()=> dispatch({colorToChange: 'blue', amount: -10})}
        />
        <ColorCounter
            color='green'
            //dispatch runs the reducer and makes changes to the state value
            increase={()=> dispatch({colorToChange: 'green', amount: 10})}
            decrease={()=> dispatch({colorToChange: 'green', amount: -10})}
        />
        <View style={{
            //use destructed values
            height: 100,
            width: 100,
            backgroundColor: `rgb(${red},${green},${blue})`
        }}>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({});

export default CorrectAdvancedColorScreen;