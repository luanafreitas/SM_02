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
            
            <Text 
            style={styles.textItem} 
            onPress={() => props.navigation.navigate("Profile")}
            >{props.item}

            

 
                </Text>  

                 

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
    buttonsContainer: {
        //flexDirection: 'row-reverse',
        //alignContent: 'flex-end',
        //flexDirection: 'row-reverse',
        //justifyContent: 'space-between',
        
        backgroundColor: 'black',
        width: '20%'
    },
    editButton: {
        backgroundColor: 'transparent',
        fontSize: 12,
        
        alignItems: 'center',
        alignSelf: "flex-end"
    },
    deleteButton: {
        backgroundColor: 'transparent',
        fontSize: 12,
    
        alignSelf: "flex-end"
        
        
    },
    
    textItem: {
        color: 'black',
        fontSize: 16,
        fontWeight: '300',
        marginTop: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        paddingHorizontal: 20,
        height: 100,
        width: 335,
        elevation: 5,
    }
});