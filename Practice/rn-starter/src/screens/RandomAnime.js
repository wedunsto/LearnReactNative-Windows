/*
Objective: Cycle through Anime
*/

import React, {useState} from 'react';
import {Text, View,TouchableOpacity, StyleSheet} from 'react-native';
import AnimeDetails from '../components/AnimeDetails';

const RandomAnime =()=>{
    //Create a string prefix for image paths
    const prefix = '../../assets/';

    //Create an array of text and image paths
    const anime = [
        {name: 'Hunter X Hunter', 
        image: require(`${prefix}hunterhunter.jpg`)},
        {name: 'Bleach',
        image: require(`${prefix}bleach.jpg`)},
        {name: 'Shield Hero',
        image: require(`${prefix}shieldhero.jpg`)},
        {name: 'Soul Eater',
        image: require(`${prefix}souleater.jpg`)}
    ];

    //Destructure useState array
    const [animeNumber, setAnimeNumber] = useState(0);

    return(
        <View>
            <TouchableOpacity onPress={()=>{
                //animeNumber changes over time and needs a useState
                //Randomly cycle through the anime names and images
                setAnimeNumber(Math.floor(Math.random()*anime.length));
            }}>
                <Text style={styles.buttonText}>Next Anime</Text>
            </TouchableOpacity>
            <AnimeDetails
                name={anime[animeNumber].name}
                image={anime[animeNumber].image}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    buttonText:{
        fontSize: 40,
        marginVertical: 10,
        textAlign: 'center'
    }
});

export default RandomAnime;