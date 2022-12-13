import React, {Component} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput, Dimensions, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const {height} = Dimensions.get('window')
export default class Header extends Component {
  render() {
    const {wrapper, row, textInput} = styles;
    return (
      <View style={wrapper}>
        <View style={row}>
          <TextInput style={textInput} placeholder="Tìm kiếm truyện..." placeholderTextColor={'#494F86'} />
          <TouchableOpacity>
            <Ionicons style={{color:'#FFFFFF', fontSize: 30, paddingRight: 20}}
              name="funnel-outline"
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {height: height / 10, padding: 10, backgroundColor: '#222348'},
  row : {flexDirection: 'row', justifyContent:'space-between', paddingTop: 30},
  textInput: {height: height / 23, width: '80%', backgroundColor:'#FFFFFF', borderRadius: 20, paddingLeft: 10}
})

/*<TouchableOpacity>
          <Text>Open</Text>
        </TouchableOpacity>*/