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
    goFilter(){
      const {navigation} = this.props;
      navigation.navigate('Filter');
    }
    render()
    {
        const {wrapper, row, textInput} = styles;      
        return (
          
          
          <ScrollView style={{ flex: 1, backgroundColor: "#222348" }}>
            <View style={wrapper}>
              <View style={row}>
                <TextInput 
                  style={textInput} 
                  placeholder="Tìm kiếm truyện..." 
                  placeholderTextColor={'#494F86'}  
                  inlineImageLeft='search'
                  onPressIn={this.goFilter.bind(this)}
                />
              </View>
            </View>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('StoryList') }}>
                <NewStory/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('StoryList2') }}>
                <Recommend />
            </TouchableOpacity>

            <TopStory />

            
          </ScrollView>
      );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    height: height / 10, 
    padding: 20, 
    backgroundColor: '#222348'
  },
  row : {
    flexDirection: 'row', 
    justifyContent:'space-between', 
    paddingTop: 15
  },
  textInput: {
    height: height / 20, 
    width: '100%', 
    backgroundColor:'#FFFFFF', 
    borderRadius: 20, 
    paddingLeft: 10
  }
})
