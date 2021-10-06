import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import Database from './Database';
import { Feather as Icon } from '@expo/vector-icons';

export default function AppItem(props) {


    function handleDeletePress() {
        Alert.alert(
            "Atenção",
            "Você tem certeza que deseja excluir este item?",
            [
                {
                    text: "Não",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "Sim", onPress: () => {
                        Database.deleteItem(props.id)
                            .then(_response => props.navigation.navigate("AppList", { id: props.id }));
                    }
                }
            ],
            { cancelable: false }
        );
    }


    async function handleEditPress() {
        const item = await Database.getItem(props.id);
        props.navigation.navigate("AppForm", item);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textItem}>{props.item}</Text>

            <View style={styles.buttonsContainer}>
                <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={handleDeletePress}>
                    <Icon name="trash" color="#1E90FF" size={18} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.editButton}
                    onPress={handleEditPress}>
                    <Icon name="edit" color="#1E90FF" size={18} />
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1C1C1C',
        borderRadius: 5,
        marginTop: 10,
        paddingHorizontal: 24,
        alignItems: 'stretch',
        height: 270,
        width: 335
    },
    buttonsContainer: {
        flexDirection: 'row-reverse',
        alignContent: 'flex-end'
    },
    editButton: {
        backgroundColor: '#1C1C1C',
        fontSize: 12,
        marginLeft: 0,
        height: 30,
        bottom: 110,
        right: 42,
        padding: 5,
        elevation: 10,
        shadowOpacity: 10,
        shadowColor: '#ccc',
        alignItems: 'center'
    },
    deleteButton: {
        backgroundColor: '#1C1C1C',
        fontSize: 12,
        bottom: 170,
        padding: 5,
        marginLeft: 13,
        height: 30,
        elevation: 10,
        shadowOpacity: 10,
        shadowColor: '#1E90FF',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    textItem: {
        backgroundColor: '#1C1C1C',
        color: 'white',
        fontSize: 16,
        fontWeight: '300',
        marginTop: 10,
    }
});