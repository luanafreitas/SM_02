import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import Database from './Database';
import { Feather as Icon } from '@expo/vector-icons';
import { getFocusedRouteNameFromRoute } from '@react-navigation/core';

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
                            .then(_response => props.navigation.navigate("Calendar", { id: props.id }));
                    }
                }
            ],
            { cancelable: false }
        );
    }


    async function handleEditPress() {
        const item = await Database.getItem(props.id);
        props.navigation.navigate("Cadastrar", item);
    }

    return (
        <View style={styles.container}>
            <View style={styles.buttons}>
            <Text style={styles.textItem}
             
            >

                {props.item}</Text>

            
            
            
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
    container:{
        
        
        justifyContent: 'space-between',
        flexDirection: 'row',
        
       
        marginTop: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        paddingHorizontal: 1,
        
        
        elevation: 5,


    },
    buttons:{
        flexDirection: 'row',
        //justifyContent: 'center',
        borderRadius: 5,
        fontSize: 16,
        fontWeight: '300',
    },
    buttonsContainer: {
       

        backgroundColor: 'black',
        
    },
    editButton: {
        flex: 1,
        flexDirection: 'column',
        
        fontSize: 12,
        
        marginTop: 15,

        
    },
    deleteButton: {
        flex:1,
        
        
        fontSize: 12,
        
        marginTop: 15,
        

        


    },

    textItem: {
        color: 'black',
        fontSize: 16,
        fontWeight: '300',
        marginTop: 10,
        marginBottom: 10, 
        backgroundColor: 'white',
        borderRadius: 5,
        paddingHorizontal: 15,
        width: 250,
        
    }
});