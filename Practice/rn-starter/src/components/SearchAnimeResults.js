/*
Objective: Create a child component listing the
anime title an image search results on the parent 
component
*/

import React from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';

const SearchAnimeResults =({name})=>{
    //Pathing prefix for images
    const PREFIX = '../../assets/';
    
    return(
        //Conditionally render JSX
        <View>
            {name === 'bleach'
            ? <View>
                <Text style={styles.titleText}>Bleach</Text>
                <Image 
                    style={styles.imageStyle}
                    source={require(`${PREFIX}bleach.jpg`)}/>
                </View>
            :null}
            {name === 'Hunter X Hunter'
            ? <View>
                <Text style={styles.titleText}>Hunter X Hunter</Text>
                <Image 
                    style={styles.imageStyle}
                    source={require(`${PREFIX}hunterhunter.jpg`)}/>
                </View>
            :null}
            {name === 'Shield Hero'
            ? <View>
                <Text style={styles.titleText}>Shield Hero</Text>
                <Image 
                    style={styles.imageStyle}
                    source={require(`${PREFIX}shieldhero.jpg`)}/>
                </View>
            :null}
            {name === 'Soul Eater'
            ? <View>
                <Text style={styles.titleText}>Soul Eater</Text>
                <Image 
                    style={styles.imageStyle}
                    source={require(`${PREFIX}souleater.jpg`)}/>
                </View>
            :null}
        </View>
    );
};

const styles = StyleSheet.create({
    titleText:{
        fontSize: 25,
        marginVertical: 15
    },
    imageStyle:{
        width: 300,
        height: 300,
        alignSelf: 'center'
    }
});

export default SearchAnimeResults;