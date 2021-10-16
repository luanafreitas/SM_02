// IMPORTAÇÃO DE FUNÇÕES
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

// IMPORTAÇÃO DO NAVEGADOR (TABBAR)
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

// IMPORTAÇÃO DOS ICONES DA TABBAR
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

// IMPORTAÇÃO DAS PAGINAS DA TABBAR

import AppCalendar from './AppCalendar';
import AppForm from './AppForm';
import AppHome from './AppHome';
import AppNotification from './AppNotification';
import AppProfile from './AppProfile';



// FUNÇÃO DA NAVEGAÇÃO
const Tab = createBottomTabNavigator();


// FUNÇÃO PRA DEIXAR O PLANO DE FUNDO TRANSPARENTE
const theme = {
  colors: {
    background: 'transparent',
  },
};




// FUNÇÃO PRINCIPAL
function AppTab() {
  return (

    <NavigationContainer theme={theme}>


      <Tab.Navigator
        tabBarOptions={{
          keyboardHidesTabBar: true,
        }}
        screenOptions={{
          tabBarShowLabel: false,


          //headerShown: false,

          tabBarStyle: [{
            display: 'flex',
            backgroundColor: 'white',
            position: 'absolute',
            flexDirection: 'row',
            justifyContent: 'center',
            //alignItems: 'center',
            bottom: 15,
            left: 20,
            right: 20,
            elevation: 3,
            borderRadius: 5,
            height: 50,


          }, null],


        }}




      >
        <Tab.Screen
          name="Home"
          component={AppHome}
          options={{

            tabBarIcon: ({ color, size }) => (
              <SimpleLineIcons name="home" size={20} color="#0077FF" />
            ),
          }}
        />
        <Tab.Screen name="Listagem" component={AppCalendar}
          options={{

            tabBarIcon: ({ color, size }) => (
              <AntDesign name="book" size={20} color="#0077FF" />
            ),
          }}
        />
        <Tab.Screen name="Cadastrar" component={AppForm}
          options={{

            tabBarIcon: ({ color, size }) => (
              <Ionicons name="add-circle-outline" size={24} color="#0077FF" />
            ),
          }}
        />
        <Tab.Screen name="Notification" component={AppNotification}
          options={{

            tabBarIcon: ({ color, size }) => (
              <Ionicons name="notifications-outline" size={21} color="#0077FF" />
            ),
          }}
        />
        <Tab.Screen name="Profile" component={AppProfile}
          options={{

            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-outline" size={20} color="#0077FF" />
            ),
          }}
        />



      </Tab.Navigator>
    </NavigationContainer>
  );
}


export default AppTab;