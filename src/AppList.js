import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput } from 'react-native';
import AppItem from './AppItem';
import Database from './Database';


export default function AppList({ route, navigation }) {
    const [items, setItems] = useState([]);
    const [busca, setBusca] = useState('');
    const dadosFiltrados = items.filter((item) => item.descricao.toLowerCase().includes(busca.toLowerCase()));

    useEffect(() => {
        Database.getItems().then(items => setItems(items));
    }, [route]);

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <TextInput
                style={styles.input}
                placeholder="Busque por um mês!"
                placeholderTextColor="#888"
                value={busca}
                onChangeText={(t) => setBusca(t)}
            />
            <Text style={styles.title}>DESPESAS</Text>
            <Text style={styles.subtitle}>Transações</Text>
            <ScrollView
                style={styles.scrollContainer}
                contentContainerStyle={styles.itemsContainer}>
                {dadosFiltrados.map(item => {
                    return <AppItem key={item.id} id={item.id} item={
                        'MÊS                            ' + item.descricao +
                        '\n\nALUGUEL                   -  R$' + item.aluguel +
                        '\n\nENERGIA                   -  R$' + item.energia +
                        '\n\nINTERNET                 -  R$' + item.internet +
                        '\n\nTOTAL                        - R$ ' + (item.aluguel + item.energia + item.internet) +
                        '\n\nGABRIEL                    - R$ ' + ((item.aluguel + item.energia + item.internet) / 4) +
                        '\n\nLUCINEI                     - R$ ' + (((item.aluguel + item.energia + item.internet) / 4) * 3)}
                        navigation={navigation} />
                })}
            </ScrollView>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',

        alignItems: 'center',
        justifyContent: 'center',
    },
    test: {

    },
    input: {
        height: 50,
        width: 335,
        backgroundColor: '#1C1C1C',
        margin: 30,
        borderRadius: 5,
        fontSize: 16,
        paddingLeft: 24,
    },
    searchArea: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        color: '#1E90FF',
        fontSize: 20,
        fontWeight: 'bold',
        //fontWeight: '400',

        marginTop: 10,
        marginBottom: 30,
    },
    subtitle: {
        color: '#1E90FF',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        alignSelf: 'flex-start',
        paddingHorizontal: 80,
    },
    scrollContainer: {
        flex: 1,
        width: '70%',
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