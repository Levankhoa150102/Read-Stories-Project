import React, {Component} from 'react'
import {View, Text, StyleSheet,TouchableOpacity, StatusBar, Button} from 'react-native'
import Header from '../HEADERR'
StatusBar.setHidden(true)
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
export default class Storage extends Component {
    render()
    {
        return (
          
          <View style={{flex: 1, backgroundColor: "#222348" }}>
            <Text>Storage</Text>
            <Button title="Goto Account" onPress={() => { this.props.navigation.navigate('Account') }} />
            <Button title="Goto HomeScreen" onPress={() => { this.props.navigation.navigate('Home')}} />


          </View>

        )
    }
}

