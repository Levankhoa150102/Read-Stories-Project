import React, {Component} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput, Dimensions, Image, Button } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Filter from './filter'
import Search from './Search';
const {height} = Dimensions.get('window')

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default class Header extends Component {
  constructor(props){
    super(props)
  }

   filter(){
    const {navigation} = this.props;
    navigation.navigate('Filter');
   }
   render() {
     const {wrapper, row, textInput} = styles;
     return (
       <View style={wrapper}>
        <View style={row}>
           <TextInput 
                style={textInput} 
                placeholder="Tìm kiếm truyện..." 
                placeholderTextColor={'#494F86'}  
            />
        </View>
       </View>
     )
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

/*<Touchable:\VS code\Microsoft VS Code\resources\app\out\vs\code\electron-sandbox\workbench\workbench.htmleOpacity>
          <Text>Open</Text>
        </Touchable:>*/