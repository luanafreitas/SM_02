import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppList from './AppList';
import AppForm from './AppForm';

const { Navigator, Screen } = createBottomTabNavigator();


function AppTab() {
    return (
        <NavigationContainer>
            <Navigator
                initialRouteName={AppForm}
                screenOptions={{
                    style: {
                        elevation: 0,
                        shadowOpacity: 0,
                        height: 64,
                    },
                    tabStyle: {
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center'
                    },
                    labelStyle: {
                        fontSize: 20,
                        marginLeft: 16,
                        marginTop: 20,
                    },
                    tabBarInactiveBackgroundColor: 'black',
                    tabBarActiveBackgroundColor: '#1E90FF',
                    tabBarInactiveTintColor: 'white',
                    tabBarActiveTintColor: 'white',
                }}
            >
                <Screen name="AppList" component={AppList}
                    options={{
                        tabBarIcon: ({ size, color }) => (
                            <Ionicons name="list-circle-outline" size={30} color="white" />
                        ),
                        tabBarLabel: "Transações"
                    }}
                />
                <Screen name="AppForm" component={AppForm}
                    options={{
                        tabBarIcon: ({ size, color }) => (
                            <MaterialIcons name="add-circle-outline" size={30} color="white" />
                        ),
                        tabBarLabel: "Adicionar"
                    }}
                />

            </Navigator>
        </NavigationContainer>
    );
}



export default AppTab;


