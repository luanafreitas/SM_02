import React from 'react';

import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabBarHeightContext } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { BlurView } from 'expo-blur' ;

import AppList from './AppList';
import AppForm from './AppForm';

const Tab = createBottomTabNavigator();
const theme = { //like this
    colors: {
      background: "transparent",
    },
  };

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View
      style={{
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 25,
        left: 20,
        right: 20,
        elevation: 0,
        backgroundColor: '#fff',
        borderRadius: 15,
        height: 40,
        ...style.shadow,
      }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ color: isFocused ? '#0077FF' : '#0077FF' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

function AppTab() {
  return (
    <NavigationContainer theme={theme}>
      <Tab.Navigator
        tabBar={(props) => <MyTabBar {...props} />}
        screenOptions={{
          headerShown: false,
        }}
        tabBarOptions={{
          showLabel: false,
        }}
        >
        <Tab.Screen name="Home" component={AppForm} />
        <Tab.Screen name="List" component={AppList} />
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
