import React, {Component} from 'react'
import {View, Text, StyleSheet,TouchableOpacity, StatusBar, Button} from 'react-native'

StatusBar.setHidden(true)
export default class Account extends Component {
    render()
    {
        return (
            <View style={{ flex: 1, backgroundColor: '#222348' }}>
                <Text>Account</Text>
                <Button title="Goto Storage" onPress={() => { this.props.navigation.navigate('Storage') }} />
                 <Button title="Goto HomeScreen" onPress={() => { this.props.navigation.navigate('Home') }} />
            </View>
        )
    }
}

