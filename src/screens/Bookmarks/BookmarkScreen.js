import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import SearchBar from '../../components/SearchBar';
import Footer from '../../components/Footer';
import ListItemComponent from '../../components/ListItemComponent';
import { updateBookmark } from '../../redux/actionCreator';
import styles from './styles';

const BookmarkScreen = (props) => {
  

  return (

      <Footer {...props} />
   
  );
};


export default (BookmarkScreen);
