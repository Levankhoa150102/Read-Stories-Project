import React, {Component} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput, Dimensions, Image, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import Header from '../HEADERR'
const {height} = Dimensions.get('window')
export default class StoryDetail extends Component {
  goBack() {
    const {navigation} = this.props;
    navigation.goBack();
}
  render() {
    const {wrapper, row, title, textInput} = styles;
    return (
      <ScrollView style={{ flex: 1, backgroundColor: "#222348" }}>
        <View style={wrapper}>
          <View style={row}>
            <TouchableOpacity  onPress={this.goBack.bind(this)}>
              <Ionicons
                style={{ color: "#FFFFFF", fontSize: 30, paddingLeft: 15 }}
                name="arrow-back-outline"
              />
            </TouchableOpacity>
            <Text style={title}>NEW STORY DETAIL</Text>
            <TouchableOpacity>
              <Ionicons
                style={{ color: "#FFFFFF", fontSize: 30, paddingRight: 20 }}
                name="funnel-outline"
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {height: height / 10, padding: 10, backgroundColor: '#222348'},
  row : {flexDirection: 'row', justifyContent:'space-between', paddingTop: 30},
  title:{
    color: '#FFF',
    fontWeight: '500',
    fontFamily: 'Avenir',
    fontSize: 25,
    textAlign: 'center',


  },
  textInput: {height: height / 23, width: '80%', backgroundColor:'#FFFFFF', borderRadius: 20, paddingLeft: 10}
})