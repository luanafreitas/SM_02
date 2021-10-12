import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import {AntDesign} from "@expo/vector-icons"


export default function AppCalendar() {
  
    return (
<>
        <View style={styles.container}>
        <Text
            style={styles.title}>
                Anotações
        </Text>
        </View>

        <View style={styles.cview}>
            
        </View>


        <View style={styles.cview}>
        <TextInput></TextInput>
        <>

       
        <TouchableOpacity style={styles.deleteitem}>
        <AntDesign name="close" size={24} color="black" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.favoritar}>
        <AntDesign name="hearto" size={15} color="black" />
        </TouchableOpacity>

        </>



        </View>
       
    </>
       
    );
}

const styles = StyleSheet.create({
    Form: {
        padding: 0,
        height: 100,
        justifyContent: "center",
        alignSelf: "stretch",
        flexDirection: "row",
        paddingTop: 80,
        borderTopWidth: 1,
        borderColor: "#eee"
      },

      title: {
        color: "#0077FF",
        fontSize: 25,
        margin: 80,
        marginTop: 80
        

    },

    container: {
        margin: 0,
        padding: 0,
        
    },

    cview: {
        height:'180',
        margin:'10',
        padding:'15',
        borderRadius: 4,
        borderColor: "Black",
        backgroundColor: "#eee",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.12,
        shadowRadius: 10,
        


       

        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        borderWidth: 1,
        borderColor: "#eee"
      },

      deleteitem: {
          height:"100%",  //assim
          
          
      },

      favoritar: {
        height:'1',
        width:'10',
        


      },

    
      







});