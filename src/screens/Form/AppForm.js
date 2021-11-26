//sdsadsd
import { StatusBar } from 'expo-status-bar';
import { connect, useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect, useCallback} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Database from './Database';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Footer from '../../components/Footer';

const UselessTextInput = (props) => {
    return (
        <TextInput
            {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
            editable
            maxLength={10000}
        />
    );
}


const AppForm = (props, route, navigation) => {
    const id = route.params ? route.params.id : undefined;
    const [descricao, setDescricao] = useState('');
    const [titulo, setTitle] = useState('');
    const [value, onChangeText] = React.useState('Useless Multiline Placeholder');
    const dispatch = useDispatch();

const {
    navigation: { navigate },
  } = props;
  
  
  
    useEffect(() => {
        if (!route.params) return;
        setDescricao(route.params.descricao);
        setTitle(route.params.titulo);
    }, [route])

    function handleDescriptionChange(descricao) { setDescricao(descricao); }
    function handleTitleChange(titulo) { setTitle(titulo); }


    async function handleButtonPress() {
        const listItem = { descricao, titulo };
      console.log('descricao', descricao)
      dispatch({ type: 'ADD_ITEM', data: listItem })
        Database.saveItem(listItem, id)
            .then(_response => navigate("AppList", listItem));
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
<Footer {...props} />
            </View>
            <StatusBar style="light" />
        </View>
    );
}

export default (AppForm);

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
        width: '85%',
        alignItems: 'stretch',
        fontWeight: '300',
    },
    input: {
        marginTop: 10,
        borderRadius: 5,
        //paddingHorizontal: 24,
        fontSize: 16,
        alignItems: 'stretch',
        fontWeight: '300',
        height: '70%',
        backgroundColor: 'white',
        padding: 20,
        elevation: 2,
        
        paddingHorizontal: 10,
    },
    titleInput: {

        fontSize: 17,
        width: '60%',
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
    },

});