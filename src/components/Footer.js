import React, {useCallback, memo} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import styles from './styles';

// IMPORTAÇÃO DOS ICONES DA TABBAR
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Footer = (props) => {
  const {
    navigation: { navigate }, route: { name },
  } = props;

 const navigateFn = useCallback((pagename) => {
  navigate(pagename);
 }, []);

  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity style={styles.footerItem} onPress={() => navigateFn('HomeScreen')}>
        <View>
          <SimpleLineIcons name="home" size={20} color="#0077FF" />
          <Text style={{ color: name === 'HomeScreen' ? '#4e4eff' : 'black' }}></Text>
        </View>  
      </TouchableOpacity>


      <TouchableOpacity style={styles.footerItem} onPress={() => navigateFn('AppList')}>
        <View style={styles.footerItem}>
          <AntDesign name="book" size={20} color="#0077FF" />
          <Text style={{ color: name === 'AppList' ? '#4e4eff' : 'black' }}></Text>
        </View>
      </TouchableOpacity>


      <TouchableOpacity style={styles.footerItem} onPress={() => navigateFn('AppForm')}>
        <View style={styles.footerItem}>
          <Ionicons name="add-circle-outline" size={24} color="#0077FF" />
          <Text style={{ color: name === 'AppForm' ? '#4e4eff' : 'black' }}></Text>
        </View>
      </TouchableOpacity>


<TouchableOpacity style={styles.footerItem} onPress={() => navigateFn('AppNot')}>
        <View style={styles.footerItem}>
          <Ionicons name="notifications-outline" size={21} color="#0077FF" />
          <Text style={{ color: name === 'AppNot' ? '#4e4eff' : 'black' }}></Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.footerItem} onPress={() => navigateFn('ProfileScreen')}>
        <View style={styles.footerItem}>
          <Ionicons name="person-outline" size={20} color="#0077FF" />
          <Text></Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};


export default memo(Footer);
