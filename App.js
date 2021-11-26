//dsadas
import React, { useEffect, useState } from 'react';
import  { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { ActivityIndicator } from 'react-native';

// IMPORTAÇÃO PASTAS DO REDUX
import store from './src/redux/store';
import { isUserLoggedIn } from './src/helpers/login';

// IMPORTAÇÃO DAS PASTAS DE TELAS
import LoginScreen from './src/screens/Login/LoginScreen';
import RegisterScreen from './src/screens/Login/RegisterScreen';
import ProfileScreen from './src/screens/Login/ProfileScreen';
import HomeScreen from './src/screens/Home/HomeScreen';


import AppForm from './src/screens/Form/AppForm';
import AppNot from './src/screens/Notifications/AppNot';
import AppList from './src/screens/Form/AppList';


const { Navigator, Screen } = createStackNavigator();
const MyStack = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      isUserLoggedIn().then((res) => {
        setIsLoggedIn(res);
        setIsLoading(true);
      });
    }, 1000)
  }, [])

  if (!isLoading) {
    return (
      <ActivityIndicator 
      size='large' 
      color='#00ff00' 
      style={{ flex: 1, justifyContent: 'center', alignItem: 'center' }} 
      />
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigator>
          {isLoggedIn ?
            <>
              <Screen name="HomeScreen" component={HomeScreen} 
              options={{ headerShown: false }} />

              <Screen name="AppList" component={AppList} 
              options={{ headerShown: false }} />

              <Screen name="AppForm" component={AppForm} 
              options={{ headerShown: false }} />

              <Screen name="AppNot" component={AppNot} 
              options={{ headerShown: false }} />


              <Screen name="ProfileScreen" component={ProfileScreen} 
              options={{ title: 'My Profile' }} />

              <Screen name="LoginScreen" component={LoginScreen} 
              options={{ title: 'Login' }} />

              <Screen name="RegisterScreen" component={RegisterScreen} 
              options={{ title: 'Sign Up' }} />

            </>
            : <>

              <Screen name="LoginScreen" component={LoginScreen} 
              options={{ title: 'Login' }} />

              <Screen name="RegisterScreen" component={RegisterScreen} 
              options={{ title: 'Sign Up' }} />

              <Screen name="HomeScreen" component={HomeScreen} 
              options={{ headerShown: false }} />
              
              <Screen name="ProfileScreen" component={ProfileScreen} 
              options={{ title: 'My Profile' }} />
            </>
          }
        </Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default MyStack;
