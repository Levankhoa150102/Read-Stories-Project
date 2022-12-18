import React, {Component} from 'react'
import {View, Text, StyleSheet,TouchableOpacity, StatusBar, Button, TextInput, ScrollView} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
StatusBar.setHidden(true)
export default class ChangeInfo extends Component {
    GobackAccounnt(){
      this.props.navigation.navigate('Account')
    }
    render()
    {
      const {title, InputStyle, BtnSI, row} = styles;
        return (
          <View style={{flex: 1, backgroundColor: "#222348", justifyContent: 'space-between'}}>
            <View style={row}>
                    <TouchableOpacity onPress={this.GobackAccounnt.bind(this)}>
                <Ionicons
                  style={{ color: "#FFFFFF", fontSize: 30, paddingLeft: 15 }}
                  name="arrow-back-outline"
                />
                    </TouchableOpacity>
                </View>
            <View style ={{marginLeft: 20, marginRight: 20}}>

               <Text style={title}>Change Information</Text>
               <TextInput style={InputStyle} placeholder='Enter your name...'></TextInput>
               <TextInput style={InputStyle} placeholder='Enter your email...'></TextInput>
               <TextInput style={InputStyle} secureTextEntry={true} placeholder='Enter your password...'></TextInput>
               <TextInput style={InputStyle} secureTextEntry={true} placeholder='Re-enter your password...'></TextInput>

              <TouchableOpacity  style={BtnSI}>
                        <Text>Change</Text>
              </TouchableOpacity>
           </View>
           <View/>
           <View/>
          </View>

        )
    }
}
const styles = StyleSheet.create({
  row : {
    flexDirection: 'row',
    paddingTop: 30,
    paddingLeft: 10,
},
  title: {
    color: "#FFF",
    fontWeight: "500",
    fontFamily: "Avenir",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 20,
  },
  InputStyle: {
    backgroundColor: "#FFF",
    padding: 20,
    marginBottom: 15,
    borderRadius: 20,
  },
  BtnSI: {
    backgroundColor: "#FFF",
    marginHorizontal: 120,
    width: 100,
    height: 50,
    marginTop: 20.,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
