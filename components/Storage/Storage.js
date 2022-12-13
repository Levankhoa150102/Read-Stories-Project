import React, {Component} from 'react'
import {View, Text, StyleSheet,TouchableOpacity, StatusBar, Button} from 'react-native'
import Header from '../HEADERR'
StatusBar.setHidden(true)
export default class Storage extends Component {
    render()
    {
        return (
          <View style={{flex: 1, backgroundColor: "#222348" }}>
            <Header />
            <Text>Storage</Text>
            <Button title="Goto Account" onPress={() => { this.props.navigation.navigate('Account') }} />
            <Button title="Goto HomeScreen" onPress={() => { this.props.navigation.navigate('Home')}} />


          </View>

        )
    }
}

