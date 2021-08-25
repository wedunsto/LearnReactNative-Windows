/*
Objective: Display anime image and name
by using callback functions
*/

import React, {useState} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import AnimeDisplayDetails from '../components/AnimeDisplayDetails';

const AnimeDisplay=()=>{
    //Create a prefix string for image paths
    const PREFIX = '../../assets/';

    //Create an array of anime names and anime image paths
    const animeList = [
        {name: 'Bleach', image: require(`${PREFIX}bleach.jpg`)},
        {name: 'Hunter X Hunter', image: require(`${PREFIX}hunterhunter.jpg`)},
        {name: 'Shield Hero', image: require(`${PREFIX}souleater.jpg`)}
    ];

    //Destructure the useState array
    const [animeNumber, setAnimeNumber] = useState(0);

    //Use callback functions to change the state variable 
    return(
        <View style={{backgroundColor: 'blue'}}>
            <Text style={styles.titleText}>Anime Display</Text>

            <AnimeDisplayDetails
                name = 'Bleach'
                setCurrentAnime = {()=> setAnimeNumber(0)}
                />
            <AnimeDisplayDetails
                name = 'Hunter X Hunter'
                setCurrentAnime = {()=> setAnimeNumber(1)}
            />
            <AnimeDisplayDetails
                name = 'Shield Hero'
                setCurrentAnime = {()=> setAnimeNumber(2)}
            />

            <Image 
            style={styles.imageStyle}
            source={animeList[animeNumber].image}/>
            <Text style={styles.itemText}>{animeList[animeNumber].name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    titleText:{
        fontSize: 30,
        color: 'white',
        backgroundColor: 'black',
        marginVertical: 15
    },
    imageStyle:{
        height: 200,
        width: 300
    },
    itemText:{
        fontSize: 20,
        backgroundColor: 'red',
        marginVertical: 15
    }
});

export default AnimeDisplay;