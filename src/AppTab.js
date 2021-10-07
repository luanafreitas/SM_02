import React from 'react';

import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabBarHeightContext } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { Entypo } from '@expo/vector-icons'; 

import AppHome from './AppHome';
import AppCalendar from './AppCalendar'
import AppForm from './AppForm';
import AppNotification from './AppNotification';
import AppProfile from './AppProfile';

const Tab = createBottomTabNavigator();
const theme = {
  //like this
  colors: {
    background: 'transparent',
  },
};

function AppTab() {
  return (
    <NavigationContainer theme={theme}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: 'white',
            position: 'absolute',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            bottom: 25,
            left: 20,
            right: 20,
            elevation: 0,
            borderRadius: 5,
            height: 50,
          },
        }}
        tabBarOptions={{
          showLabel: false,
          showIcon: true,
          style: {},
        }}>
        <Tab.Screen
          name="Home"
          component={AppHome}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Entypo name="home" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen name="Calendar" component={AppCalendar} 
        options={{
            tabBarLabel: 'Calendar',
            tabBarIcon: ({ color, size }) => (
              <Entypo name="home" size={24} color="black" />
            ),
            }}
        />
        <Tab.Screen name="Cadastrar" component={AppForm} 
        options={{
            tabBarLabel: 'Cadastrar',
            tabBarIcon: ({ color, size }) => (
              <Entypo name="home" size={24} color="black" />
            ),
            }}
        />
        <Tab.Screen name="Notification" component={AppNotification} 
        options={{
            tabBarLabel: 'Notification',
            tabBarIcon: ({ color, size }) => (
              <Entypo name="home" size={24} color="black" />
            ),
            }}
        />
        <Tab.Screen name="Profile" component={AppProfile} 
        options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <Entypo name="home" size={24} color="black" />
            ),
            }}
        />
         
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default AppTab;
