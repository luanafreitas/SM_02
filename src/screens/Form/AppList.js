//sdasd
import React, { useState, useEffect, useCallback } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  TextInput,
  ScrollView,
} from 'react-native';
import { Icon } from 'react-native-elements';
import Database from './Database';
import Footer from '../../components/Footer';
import AppItem from './AppItem';
import { FontAwesome } from '@expo/vector-icons';

const AppList = (props, route, navigation) => {
  const {
    navigation: { navigate },
  } = props;

  const data = useSelector(state => state.data);
  
  console.log('data', data);
  const [items, setItems] = useState([]);
  const [busca, setBusca] = useState();
 
  useEffect(() => {
    Database.getItems().then((items) => setItems(items));
  }, [route]);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
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
          {data.map((item) => {
            return (
              <AppItem
                key={item.id}
                id={item.id}
                item={
                  'Titulo: ' +
                  item.titulo +
                  '\n\nDescrição: ' +
                  item.descricao
                }
                navigation={navigation}
              />
            );
          })}
        </ScrollView>

        <Footer {...props} />
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
    //backgroundColor: 'red',
  },

  inputContainer: {
    flex: 1,
    marginTop: 30,
    width: '85%',
    alignItems: 'stretch',
    fontWeight: '300',
    //: 'blue',
  },

  input: {
    height: 50,
    
    backgroundColor: 'white',
    elevation: 5,
    alignItems: "center",

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
    alignSelf: 'center',
    
    
    marginTop: 10,
    marginBottom: 30,
  },
  
  scrollContainer: {
    flex: 1,
    width: '80%',
    //backgroundColor: 'black',
    alignSelf: 'center'
  },
  itemsContainer: {
    flexGrow: 1,
    fontWeight: '300',
    fontSize: 16,
    alignSelf: 'stretch',
borderBottomWidth: 1,
    borderColor: '#A9A9A9',
    
    
  },
});

export default AppList;