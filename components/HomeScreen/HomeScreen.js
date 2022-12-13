import React, {Component} from 'react'
import {View, ScrollView, Text, StyleSheet,TouchableOpacity, StatusBar, Button} from 'react-native'

import Recommend from './Recommend'
import NewStory from './NewStory'
import TopStory from './TopStory'
StatusBar.setHidden(true)
export default class HomeScreen extends Component {
    render()
    {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#222348' }}>
            <NewStory />
            <TopStory />

            <Recommend />
            
            </ScrollView>
            
        )
    }
}

