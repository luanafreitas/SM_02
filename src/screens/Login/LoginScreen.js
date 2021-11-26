// IMPORTAÇÃO DE BIBLIOTECAS
import React, { useState, memo } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

//IMPORTAÇÃO DE PASTAS REDUX
import Storage from '../../helpers/storage';
import { setUserLoggedIn } from '../../helpers/login';
import toaster from '../../helpers/toaster';
import checkValidation from '../../helpers/checkInputValidation';

// IMPORTAÇÃO DOS ICONES
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const LoginScreen = (props) => {
  const {
    navigation: { navigate },
  } = props;
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const onPressSubmit = async () => {
    if (userName.length > 2 && password.length > 2) {
      if (
        checkValidation({ type: 'userName', str: userName }) &&
        checkValidation({ type: 'password', str: password })
      ) {
        const obj = (await Storage.get('users')) || {};
        // obj -> { username1: password, username2: password, ...}
        if (obj[userName.toLowerCase()]) {
          if (obj[userName] === password) {
            await setUserLoggedIn({ userName, password });
            navigate('HomeScreen');
          } else {
            toaster('password incorrect');
          }
        } else {
          toaster('username does not exist');
        }
      }
    } else {
      toaster('Please provide valid credentials');
    }
  };

  return (
    <View style={{ backgroundColor: '#FFF', height: '100%', paddingTop: 40 }}>
      <Text
        style={{
          fontSize: 24,
          alignSelf: 'center',
          color: '#0077FF',
        }}>
        {' '}
        STUDENT MANAGER
      </Text>
      <Text
        style={{
          marginHorizontal: 55,
          textAlign: 'center',
          marginTop: 5,
          opacity: 0.4,
        }}>
        {' '}
        De estudantes para estudantes!
      </Text>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 55,
          borderWidth: 1,
          marginTop: 50,
          paddingHorizontal: 10,
          borderColor: 'Black',
          borderRadius: 2,
          paddingVertical: 2,
        }}>
        <MaterialCommunityIcons
          name="email-edit-outline"
          size={20}
          color="black"
        />
        <TextInput
          style={{ paddingHorizontal: 15 }}
          placeholder="Usuário"
          onChangeText={(text) => setUserName(text)}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 55,
          borderWidth: 1,
          marginTop: 20,
          paddingHorizontal: 10,
          borderColor: 'Black',
          borderRadius: 2,
          paddingVertical: 2,
        }}>
        <Ionicons name="lock-open-outline" size={20} color="black" />
        <TextInput
          style={{ paddingHorizontal: 15 }}
          placeholder="Senha"
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <TouchableOpacity onPress={() => onPressSubmit()}>
        <View
          style={{
            marginHorizontal: 55,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 30,
            backgroundColor: '#0077FF',
            paddingVertical: 10,
            borderRadius: 23,
          }}>
          <Text style={{ color: 'white' }}>Login</Text>
        </View>
      </TouchableOpacity>

      <Text
        onPress={() => navigate('RegisterScreen')}
        style={{
          alignSelf: 'center',
          color: '#0077FF',
          paddingVertical: 30,
        }}>
        Não tem uma conta? Cadastre-se
      </Text>
    </View>
  );
};

export default memo(LoginScreen);
