import React, {Component} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput, Dimensions, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Account from './Account';
const {height} = Dimensions.get('window')
export default class Header_Account extends Component {
  render() {
    const {wrapper, row, textInput} = styles;
    return (
      <View style={wrapper}>
        <View style={row}>
          <TouchableOpacity>
            <Ionicons style={{color:'#FFFFFF', fontSize: 30, paddingLeft: 15}}
              name="arrow-back-outline"
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {height: height / 10, padding: 10, backgroundColor: '#222348'},
  row : {flexDirection: 'row', paddingTop: 30},
  textInput: {fontFamily: 'serif', color:'#FFF', fontSize: 25, fontWeight: '500', marginLeft: 100}
})

/*<TouchableOpacity>
          <Text>Open</Text>
        </TouchableOpacity>*/