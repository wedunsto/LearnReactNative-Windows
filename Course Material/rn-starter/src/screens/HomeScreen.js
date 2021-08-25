import React from "react";
import { Text, StyleSheet, View, TouchableOpacity, Touchable } from "react-native";

const HomeScreen = ({navigation}) => {
  return(
    <View>
      <TouchableOpacity onPress={()=>navigation.navigate('AdvancedColorScreen')}>
        <Text>Advanced Color Screen</Text>
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
