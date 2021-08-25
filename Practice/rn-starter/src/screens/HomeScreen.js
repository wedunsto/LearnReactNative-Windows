import React from "react";
import { Text, StyleSheet, View, TouchableOpacity} from "react-native";

const HomeScreen = ({navigation}) => {
  return(
    <View>
      <TouchableOpacity onPress={navigation.navigate('RandomAnime')}>
        <Text>Random Anime</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
