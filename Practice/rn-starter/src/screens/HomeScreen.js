import React from "react";
import { Text, StyleSheet, View, TouchableOpacity} from "react-native";

const HomeScreen = ({navigation}) => {
  return(
    <View>
      <TouchableOpacity 
      style={{marginVertical: 20}}
      onPress={()=> navigation.navigate('RandomAnime')}>
        <Text style={styles.text}>Random Anime</Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={{marginVertical: 20}} 
      onPress={()=> navigation.navigate('AnimeDisplay')}>
        <Text style={styles.text}>Anime Display</Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={{marginVertical: 20}}
      onPress={()=> navigation.navigate('SearchAnime')}>
        <Text style={styles.text}>Search Anime</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center'
  }
});

export default HomeScreen;
