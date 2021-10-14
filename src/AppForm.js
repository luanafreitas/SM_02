import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Database from './Database';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const UselessTextInput = (props) => {
    return (
        <TextInput
            {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
            editable
            maxLength={10000}
        />
    );
}

export default function AppForm({ route, navigation }) {
    const id = route.params ? route.params.id : undefined;
    const [descricao, setDescricao] = useState('');
    const [titulo, setTitle] = useState('');
    const [value, onChangeText] = React.useState('Useless Multiline Placeholder');



    useEffect(() => {
        if (!route.params) return;
        setDescricao(route.params.descricao);
        setTitle(route.params.titulo.toString());
    }, [route])

    function handleDescriptionChange(descricao) { setDescricao(descricao); }
    function handleTitleChange(titulo) { setTitle(titulo); }


    async function handleButtonPress() {
        const listItem = { descricao, titulo };
        Database.saveItem(listItem, id)
            .then(_response => navigation.navigate("Calendar", listItem));
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>SM</Text>
            <View style={styles.inputContainer}>
                <View style={styles.button}>
                    <TouchableOpacity style={styles.buttonContainer} onPress={handleButtonPress}>

                        <AntDesign name="check" size={24} color="black" />

                    </TouchableOpacity>
                    <TextInput
                        style={styles.titleInput}
                        onChangeText={value => handleTitleChange(value)}
                        placeholder="Título"
                        placeholderTextColor="#888"
                        clearButtonMode="always"
                        value={titulo}
                    />
                </View>
                <UselessTextInput
                    style={styles.input}
                    onChangeText={value => handleDescriptionChange(value)}
                    placeholder="Digite aqui..."
                    placeholderTextColor="#888"
                    clearButtonMode="always"
                    value={descricao}
                    multiline numberOfLines={4}

                />


            </View>
            <StatusBar style="light" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',

    },
    title: {
        color: '#1E90FF',
        fontSize: 20,
        fontWeight: '400',
        

    },
    inputContainer: {
        flex: 1,
        marginTop: 30,
        width: '90%',
        alignItems: 'stretch',
        fontWeight: '300',
    },
    input: {
        marginTop: 10,
        borderRadius: 5,
        paddingHorizontal: 24,
        fontSize: 16,
        alignItems: 'stretch',
        fontWeight: '300',
        height: '70%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.12,
        shadowRadius: 10,
        padding: 20,
        elevation: 2,
        borderRadius: 5,
        paddingHorizontal: 10,
        
        


    },

    titleInput: {
        fontSize: 17,
        width: '70%',
        backgroundColor: 'white',
        alignSelf: 'flex-start',
        elevation: 2,
        borderRadius: 5,
        paddingHorizontal: 10,
        
    },
    button: {
       
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        
        

        borderRadius: 5,

        fontSize: 16,

       
        fontWeight: '300',
       
    },
    buttonContainer: {
       alignSelf: 'flex-start',
      
     /* elevation: 20,
        shadowOpacity: 20,
        shadowColor: 'black',*/
      



    },

});