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
      <TouchableOpacity onPress={()=> navigation.navigate('PassVal')}>
        <Text style={styles.text}>Password Validator</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> navigation.navigate('BoxScreen')}>
        <Text style={styles.text}>Box Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> navigation.navigate('FlexScreen')}>
        <Text style={styles.text}>Flex Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> navigation.navigate('FlexDirection')}>
        <Text style={styles.text}>Flex Direction</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> navigation.navigate('FormatExercise')}>
        <Text style={styles.text}>Justify Content</Text>
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
