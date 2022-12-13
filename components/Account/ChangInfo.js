import React, {Component} from 'react'
import {View, Text, StyleSheet,TouchableOpacity, StatusBar, Button} from 'react-native'

StatusBar.setHidden(true)
export default class ChangeInfo extends Component {
    render()
    {
        return (
          <View style={{flex: 1, backgroundColor: "#222348" }}>
            <Text>Change Info</Text>
            <Button title="Goto Account" onPress={() => { this.props.navigation.navigate('Account') }} />
          </View>

        )
    }
}

