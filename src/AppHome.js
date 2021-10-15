
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Linking, StatusBar } from 'react-native';



export default function AppHome() {
  
    return (

            <View style={styles.container}>
                <Text
                    style={styles.title}>
                        Student Manager
                </Text>

                <View style={styles.login}>
                    <Text
                        style={styles.subtitle}>
                        Olá, seja bem vindo!
                    </Text>

                    <TextInput
                        style={styles.input}
                        placeholder='E-mail'
                    />

                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                        placeholder='Senha'
                    />

                    <TouchableOpacity
                        style={styles.button}
                        //onPress={ () => {this.click()}}
                    >
                        <Text style={{color: "white"}}> Entrar 
                        </Text>



                    </TouchableOpacity>

                   <Text style={styles.link}
                        onPress={() => Linking.openURL('')}
                    >
                        Esqueci a senha
                   </Text>
                   <Text style={styles.link}
                        onPress={() => Linking.openURL('')}
                    >
                        Cadastre-se
                   </Text> 
                </View>
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 0,
        padding: 0,
        fontFamily: 'Roboto',
        alignItems: 'center',
    },

    title: {
        color: "#0077FF",
        fontSize: 40,
        margin: 20,
        marginTop: 80
    },

    subtitle: {
        color: "#0077FF",
        fontSize: 25,
        margin: 20
    },

    login: {
        marginTop: 40
    },

    input: {
        marginTop: 5,
        padding: 10,
        width: 243,
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center'

    },

    button: {
        alignItems:'center',
        alignContent:  'center',
        alignSelf: 'center',
        justifyContent:'center',
        width:190,
        height:32,
        backgroundColor:'#157AEC',
        borderRadius: 15,
        paddingLeft: 'auto',
        fontSize: 16,
        fontWeight: 'bold'
    },

    link: {
        color: 'blue',
        margin: 5,
        alignSelf: 'center',
        textDecorationLine: 'underline'
    }
}); 