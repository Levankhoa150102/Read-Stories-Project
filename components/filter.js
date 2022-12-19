import React, {Component} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput, Dimensions, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
StatusBar.setHidden(true)


export default class Filter extends Component {
    GobacktoHomePage() {
        const {navigation} = this.props;
        navigation.goBack();
    }
    render(){
      return(  
        <View>
            <Text>test</Text>
        </View>
        )
    }
}
