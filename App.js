import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppTab from './src/AppTab';



function App() {
  return ( 
    <>
      <NavigationContainer>

      <AppTab/>
      
      </NavigationContainer>
    </>
  );
}

export default App;
