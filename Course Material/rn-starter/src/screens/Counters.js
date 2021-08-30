/*
Objective: Create a counter component to increase or decrease the current
value
*/

import React, {useReducer} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import CounterComponents from '../components/CounterComponent';

//Reducer function: Manages changes to an object
//State: Object that has all the states in it
//Action: Describes the updates to make 
const reducer =(state, action)=>{
    switch(action.type){
        case('increase'):
        //Copy the current state, increase value by 1
            return({...state, value: state.value + action.payload});
        case('decrease'):
        //Copy the current state, decrease value by 1
            return({...state, value: state.value - action.payload});
        default:
        //Return the current state
            return(state);
    };
};

const Counters =()=>{
    //Destructure useReducer
    const [state, dispatch] = useReducer(reducer,{value: 0});

    return(
        <View>
            <Text style={styles.titleText}>Counter</Text>
            <CounterComponents
            //Call dispatch in the child component
                increase={()=>dispatch({type:'increase', payload:1})}
                decrease={()=> dispatch({type:'decrease', payload:1})}
            />
            <Text style={{fontSize: 20, textAlign: 'center'}}>Current Count</Text>
            <Text style={styles.titleText}>{state.value}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    titleText:{
        fontSize: 30,
        textAlign: 'center'
    }
});

export default Counters;