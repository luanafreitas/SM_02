// IMPORTAÇÃO DAS BIBLIOTECAS
import React, { useState, memo } from 'react';
import {} from 'react-native';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';


// IMPORTAÇÃO DAS PASTAS DO REDUX E BANCO DE DADOS
import Storage from '../../helpers/storage';
import toaster from '../../helpers/toaster';
import checkValidation from '../../helpers/checkInputValidation';
import { setUserLoggedIn } from '../../helpers/login';


// IMPORTAÇÃO DOS ICONES
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

// INICIO DA FUNÇÃO REGISTRAR
const RegisterScreen = (props) => {
  const {
    navigation: { navigate },
  } = props;

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  async function onPressSubmit() {
    // O USUARIO E SENHA PRECISA TER NO MINIMO 3 CARACTERES
    if (userName.length > 2 && password.length > 2) {
      // PRIMEIRO CHECKIN PARA VALIDAR USUÁRIO E SENHA
      if (
        checkValidation({ type: 'userName', str: userName }) &&
        checkValidation({ type: 'password', str: password })
      ) {
        const obj = (await Storage.get('users')) || {};
        // obj -> { username1: password, username2: password, ...}
        if (obj[userName.toLowerCase()]) {
          toaster('Username already exist');
          return;
        } else {
          obj[userName.toLowerCase()] = password;
        }
        await Storage.set('users', { ...obj });
        await setUserLoggedIn({ userName, password }).then(() => {
          navigate('HomeScreen');
        });
      } else {
        toaster('Please choose unique username');
      }
    } else {
      toaster('Please provide minimum 3 characters');
    }
  }

  return (
    <View style={styles.loginContainer}>
      <Text
        style={{
          fontSize: 20,
          alignSelf: 'center',
          paddingTop: 48,
        }}>
        Bem-Vindo(a)
      </Text>

      <Text style={{
          marginHorizontal: 55,
          textAlign: 'center',
          marginTop: 5,
          opacity: 0.4,
        }}>
        Utilize no mínimo 3 caracteres para nome de usuário e senha!
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
          placeholder="Usuário"
          placeholderTextColor="black"
          style={{ paddingHorizontal: 15, opacity: 0.4}}
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
          secureTextEntry
          placeholder="Senha"
          placeholderTextColor="black"
          style={{ paddingHorizontal: 15,  opacity: 0.4 }}
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
          <Text style={{ color: 'white' }}> Register </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default memo(RegisterScreen);

const styles = StyleSheet.create({

  container: { flex: 1 },
  searchWrapper: {height: 60,  backgroundColor: 'transparent', marginTop: 24 },
  searchResultsContainer: {backgroundColor: 'lightgrey' },
  searchItem: {padding: 12, flex: 1, flexDirection: 'row' },
  title: {padding: 12, fontSize: 12, fontWeight: 'bold', color:'black', flexDirection: 'row'},
  sortBy:{ fontWeight: 'bold' },
  filterWrapper: { flex: 1, flexDirection: 'row', alignItem: 'center', justifyContent: 'flex-start', marginLeft: 12 },
  resetWrapper: { flex: 1,alignItems: 'flex-end'},
  flatlistWrapper: { paddingBottom: 50, flex: 1 },


});

// can explore SecureStore for further implementation
