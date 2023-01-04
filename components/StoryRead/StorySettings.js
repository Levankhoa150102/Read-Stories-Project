import React, {Component} from 'react'
import {View, Text, StyleSheet,TouchableOpacity, StatusBar,Image, Dimensions, ScrollView} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import BouncyCheckbox from "react-native-bouncy-checkbox";
export default class StorySettings extends Component {
    goBack() {
      const {navigation} = this.props;
      navigation.goBack();
  }
    render() {
        const {container, setttingsContainer,topRow, row, text, checkBox, buttonContainer} = styles
        return (
          <ScrollView style = {{backgroundColor: "#000000"}}>
                  <View style = {container}>
                    <View style = {topRow}>
                      <TouchableOpacity onPress={this.goBack.bind(this)}>
                      <Ionicons
                        style={{ color: "#FFFFFF", fontSize: 40, paddingLeft: 15 }}
                        name="arrow-back-outline"
                      />
                      </TouchableOpacity>
                    </View>
                    <View style = {topRow}>
                      <TouchableOpacity onPress={this.goBack.bind(this)}>
                      <Ionicons
                        style={{ color: "#FFFFFF", fontSize: 40, paddingLeft: 15 }}
                        name="list-outline"
                      />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style = {setttingsContainer}>
                    <View style = {row}>
                      <Text style = {text}>Cỡ chữ</Text>
                      <BouncyCheckbox style = {checkBox} 
                      />
                      <BouncyCheckbox style = {checkBox} 
                      />
                      <BouncyCheckbox style = {checkBox} 
                      />
                    </View>
                    <View style = {row}>
                      <Text style = {{color: "white", fontSize: 20, paddingLeft: 75}}>Nhỏ     Vừa      Lớn</Text>
                    </View>
                    <View style = {row}>
                      <Text style = {text}>Màu chữ:</Text>
                    </View>
                    <View style = {row}>
                      <Text style = {text}>Màu nền:</Text>
                    </View>
                    <View style = {row}>
                      <Text style = {text}>Căn lề:</Text>
                      <BouncyCheckbox style = {checkBox} 
                      />
                      <BouncyCheckbox style = {checkBox} 
                      />
                    </View>
                    <View style = {row}>
                      <Text style = {{color: "white", fontSize: 20, paddingLeft: 75}}>Trái      Phải</Text>
                    </View>
                     <View style = {buttonContainer}>
                      <TouchableOpacity style = {buttonContainer}>
                        <Text style = {{color: "white", fontSize: 20}}>Áp dụng</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
          </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
    flex: 1,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    },
    topRow: {
        flexDirection: "row",
    },
    settingsContainer: {
    flex: 1,
    paddingBottom: 10,
    flexDirection: 'row'
    },
    row: {
        flexDirection: "row",
        paddingLeft: 30,
    },
    text: {
      color: "white",
      alignSelf: "center",
      paddingTop: 30,
      fontSize: 20,
    },
    checkBox: {
      flexDirection: "top",
      paddingTop: 40,
      paddingLeft: 20,
      paddingRight: 20,
    },
    buttonContainer: {
      flex: 1,
      
      backgroundColor: "blue",
      flexDirection: "row",
      justifyContent: "center",
      
    }
})