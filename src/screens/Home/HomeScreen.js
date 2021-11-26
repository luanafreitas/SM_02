import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import SearchBar from '../../components/SearchBar';
import ListItemComponent from '../../components/ListItemComponent';
import Footer from '../../components/Footer';


const HomeScreen = (props) => {

  return (
 
     <View style={styles.container}>
      <View style={styles.inputContainer}>
      <Text style={styles.title}>Student Manager</Text>

      <View style={styles.login}>
        <Text style={styles.subtitle}></Text>
        <Text style={styles.citation}>
          "É melhor você tentar algo, vê-lo não funcionar e aprender com isso,
          do que não fazer nada." {'\n'}- Mark Zuckerberg
        </Text>
        </View><Footer {...props} pagename="HomeScreen" />
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

  inputContainer: {
        flex: 1,
        marginTop: 30,
        width: '85%',
        alignItems: 'stretch',
        fontWeight: '300',
    },

  title: {
    color: '#0077FF',
    fontSize:30,
    margin: 20,
    marginTop: 80,
  },

  subtitle: {
    color: '#0077FF',
    fontSize: 25,
    margin: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },

  citation: {
    color: '#004FA8',
    fontStyles: 'italic',
    fontWeight: 'bold',
    margin: 25,
    textAlign: 'justify',
  },
});
export default (HomeScreen);
