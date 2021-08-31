/*
Objective: Create a component to search anime titles
*/

import React, {useState} from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import SearchAnimeTextInput from '../components/SearchAnimeTextInput';
import SearchAnimeResults from '../components/SearchAnimeResults';

const SearchAnime =()=>{
    //Destructure useState
    const [name, setName] = useState('');


    return(
        //Use overloaded callback function to child component
        <View>
            <Text style={styles.titleText}>Search Anime</Text>
            <SearchAnimeTextInput
                value={name}
                onChangeText={(newValue)=> setName(newValue)}
            />
            <SearchAnimeResults
                name={name}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    titleText:{
        fontSize: 30,
        textAlign: 'center'
    }
});

export default SearchAnime;