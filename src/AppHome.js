
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
                <Text style={styles.citation}>
                    "É melhor você tentar algo, vê-lo não funcionar e aprender com isso, do que não fazer nada."
                    <br/><br/>
                    -Mark Zuckerberg
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
        margin: 20,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center'
    },

    citation: {
        color: "#004FA8",
        fontStyles: 'italic',
        fontWeight: 'bold',
        margin: 25,
        textAlign: 'justify',
    }
});