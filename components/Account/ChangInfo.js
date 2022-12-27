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

               <Text style={title}>Thay Đổi Thông Tin</Text>
               <TextInput style={InputStyle} placeholder='Nhập tên...'></TextInput>
               <TextInput style={InputStyle} placeholder='Nhập email...'></TextInput>
               <TextInput style={InputStyle} secureTextEntry={true} placeholder='Nhập mật khẩu...'></TextInput>
               <TextInput style={InputStyle} secureTextEntry={true} placeholder='Nhập lại mật khẩu...'></TextInput>

              <TouchableOpacity  style={BtnSI}>
                        <Text>Xác nhận</Text>
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
    //fontFamily: "Avenir",
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
