import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppTab from './src/AppTab';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';


function App() {
  return ( 
    <>
    <View style={styles.container}>
    <ImageBackground  
    source={require('./assets/fundo_provisorio.jpg')} 
    style={styles.image} >
     
     <AppTab />

     </ImageBackground> 
     </View>

     
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    resizeMode: 'cover',
    
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
});

export default App;
