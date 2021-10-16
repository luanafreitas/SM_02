import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput } from 'react-native';
import AppItem from './AppItem';
import Database from './Database';


export default function AppCalendar({ route, navigation }) {
    const [items, setItems] = useState([]);
    const [busca, setBusca] = useState();
    const dadosFiltrados = items.filter((item) => item?.titulo?.toLowerCase().includes(busca?.toLowerCase()) || item?.descricao?.toLowerCase().includes(busca?.toLowerCase()));

    useEffect(() => {
        Database.getItems().then(items => setItems(items));
    }, [route]);

    return (
        <View style={styles.container}>
            <StatusBar style="light" />

            <Text style={styles.logo}>SM</Text>

            <TextInput
                style={styles.input}
                placeholder="Procurar anotações"
                placeholderTextColor="#888"
                value={busca}
                onChangeText={(t) => setBusca(t)}
            />
            <Text style={styles.title}>Anotações</Text>

            <ScrollView
                style={styles.scrollContainer}
                contentContainerStyle={styles.itemsContainer}>
                {dadosFiltrados.map(item => {
                    return <AppItem key={item.id} id={item.id} item={
                        'Titulo                            ' + item.titulo +
                        '\n\nDescrição                  ' + item.descricao }
                        navigation={navigation} />
                })}
            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
        
    },
    input: {
        height: 50,
        width: 335,
        backgroundColor: 'white',
        elevation: 5,
        
        margin: 30,
        borderRadius: 5,
        fontSize: 16,
        paddingLeft: 24,
    },
    searchArea: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        fontWeight: '400',

        marginTop: 10,
        marginBottom: 30,
    },
    title: {
        color: '#1E90FF',
        fontSize: 20,
        fontWeight: '400',
        marginBottom: 10,
        alignSelf: 'flex-start',
        paddingHorizontal: 80,
    },
    scrollContainer: {
        flex: 1,
        width: '80%',
        
    },
    itemsContainer: {
        flexGrow: 1,
        fontWeight: '300',
        fontSize: 16,
        alignSelf: 'stretch',
        borderTopWidth: 1,
        borderColor: '#A9A9A9',
    }
});
