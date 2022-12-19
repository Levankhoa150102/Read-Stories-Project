import React, {Component} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput, Dimensions, Image, Button, ScrollView } from 'react-native'

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Recommend from './Recommend'
import NewStory from './NewStory'
import TopStory from './TopStory'
import Header from '../HEADERR'
StatusBar.setHidden(true)
const {height} = Dimensions.get('window')
export default class HomeScreen extends Component {
  render()
  {
      return (
        
        <ScrollView style={{ flex: 1, backgroundColor: "#222348" }}>
          <Header />
          <TouchableOpacity onPress={() => { this.props.navigation.navigate('StoryList') }}>
              <NewStory/>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { this.props.navigation.navigate('StoryList2') }}>
          
          </TouchableOpacity>
          <TopStory />
          <Recommend />

        </ScrollView>
      );
  }
}
