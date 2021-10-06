import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Database from './Database';
import { MaterialIcons } from '@expo/vector-icons';


export default function AppForm({ route, navigation }) {
    const id = route.params ? route.params.id : undefined;
    const [descricao, setDescricao] = useState('');
    const [aluguel, setAluguel] = useState('');
    const [energia, setEnergia] = useState('');
    const [internet, setInternet] = useState('');

    useEffect(() => {
        if (!route.params) return;
        setDescricao(route.params.descricao);
        setAluguel(route.params.aluguel.toString());
        setEnergia(route.params.energia.toString());
        setInternet(route.params.internet.toString());
    }, [route])

    function handleDescriptionChange(descricao) { setDescricao(descricao); }
    function handleAluguelChange(aluguel) { setAluguel(aluguel); }
    function handleEnergiaChange(energia) { setEnergia(energia); }
    function handleInternetChange(internet) { setInternet(internet); }

    async function handleButtonPress() {
        const listItem = { descricao, aluguel: parseFloat(aluguel), energia: parseFloat(energia), internet: parseFloat(internet) };
        Database.saveItem(listItem, id)
            .then(_response => navigation.navigate("AppList", listItem));
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}></Text>
            <View style={styles.inputContainer}>
                <Text style={styles.subtitle}>Mês</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={value => handleDescriptionChange(value)}
                    placeholder="Digite o mês"
                    placeholderTextColor="#888"
                    clearButtonMode="always"
                    value={descricao}
                />
                <Text style={styles.subtitle}>Aluguel</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={handleAluguelChange}
                    placeholder="Digite o valor do aluguel"
                    placeholderTextColor="#888"
                    keyboardType={'numeric'}
                    clearButtonMode="always"
                    value={aluguel.toString()}
                />
                <Text style={styles.subtitle}>Energia</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={handleEnergiaChange}
                    placeholder="Digite o valor da energia"
                    placeholderTextColor="#888"
                    keyboardType={'numeric'}
                    clearButtonMode="always"
                    value={energia.toString()}
                />
                <Text style={styles.subtitle}>Internet</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={handleInternetChange}
                    placeholder="Digite o valor da internet"
                    placeholderTextColor="#888"
                    keyboardType={'numeric'}
                    clearButtonMode="always"
                    value={internet.toString()}
                />
                <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
                    <View style={styles.buttonContainer}>
                        <MaterialIcons name="calculate" size={24} color="black" />
                        <Text style={styles.buttonText}>Calcular</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <StatusBar style="light" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
    },
    title: {
        color: '#1E90FF',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 50,
    },
    subtitle: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 10,
        fontWeight: '400',
    },
    inputContainer: {
        flex: 1,
        marginTop: 30,
        width: '70%',
        padding: 0,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        alignItems: 'stretch',
        fontWeight: '300',
    },
    input: {
        marginTop: 10,
        height: 50,
        backgroundColor: '#1C1C1C',
        color: 'white',
        borderRadius: 5,
        paddingHorizontal: 24,
        fontSize: 16,
        alignItems: 'stretch',
        fontWeight: '300',
    },
    button: {
        marginTop: 20,
        height: 60,
        backgroundColor: '#1E90FF',
        borderRadius: 5,
        paddingHorizontal: 24,
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 20,
        shadowOpacity: 20,
        shadowColor: 'black',
        fontWeight: '300',
    },
    buttonContainer: {
        flexDirection: "row"
    },
    buttonText: {
        marginLeft: 10,
        fontSize: 18,
        color: 'black',
        fontWeight: '300',
    }
});