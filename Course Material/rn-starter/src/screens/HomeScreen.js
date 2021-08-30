import React from "react";
import { Text, StyleSheet, View, TouchableOpacity, Touchable } from "react-native";

const HomeScreen = ({navigation}) => {
  return(
    <View>
      <TouchableOpacity onPress={()=>navigation.navigate('AdvancedColorScreen')}>
        <Text style={styles.text}>Advanced Color Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> navigation.navigate('CorrectAdvancedColorScreen')}>
        <Text style={styles.text}>Correct Advanced Color Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> navigation.navigate('Counters')}>
        <Text style={styles.text}>Counters</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> navigation.navigate('Text')}>
        <Text style={styles.text}>Text Input</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    marginVertical: 15,
    textAlign: 'center'
  }
});

export default HomeScreen;
