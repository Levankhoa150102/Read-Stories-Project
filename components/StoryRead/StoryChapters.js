import React, {Component} from 'react'
import {View, Text, StyleSheet,TouchableOpacity, StatusBar,Image, Dimensions, ScrollView} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
export default class StoryChapters extends Component {
    goBack() {
      const {navigation} = this.props;
      navigation.goBack();
  }
    otherSort() {
        return {}
    }
    render() {
        const {container, row, listText, scrollView, buttonContainer, sortButtonContainer} = styles
        return (
            <ScrollView style={{ flex: 1, backgroundColor: "#000000" }}>
                <View style = {container}>
                    <View style = {row}>
                        <TouchableOpacity onPress={this.goBack.bind(this)}>
                            <Ionicons
                                style={{ color: "#FFFFFF", fontSize: 30, paddingLeft: 15 }}
                                name="arrow-back-outline"
                            />
                        </TouchableOpacity>
                        <View>
                            <Text style = {listText}>Danh sách chương</Text>
                        </View>
                    </View>
                        
                <View style = {row}>
                    <TouchableOpacity style = {sortButtonContainer}>
                      <View style = {row}>
                        <Ionicons style={{ color: "#FFFFFF", fontSize: 20}}
                            name = "arrow-up"
                        />                        
                        <Ionicons style={{ color: "#FFFFFF", fontSize: 30}}
                            name = "list"
                        />
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style = {buttonContainer}  >
                        <Text style = {{color: "white"}}>0-100</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {buttonContainer}>
                        <Text style = {{color: "white"}}>100-200</Text>
                    </TouchableOpacity>
                </View>
                <View style = {row}>
                    <ScrollView style = {scrollView}>
                        <TouchableOpacity>
                          <Text style = {listText}>A</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                          <Text style = {listText}>A</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                          <Text style = {listText}>A</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                          <Text style = {listText}>A</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                          <Text style = {listText}>A</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 10,
    },
    row: {
        flexDirection: "row",
      },
    listText: {
        flexDirection: 'row',
        justifyContent: 'center',
        color: "#FFFFFF",
        fontSize: 25
    },
    scrollView: {
        backgroundColor: "gray"
    },
    buttonContainer: {
        backgroundColor: '#4D4040',
        width : 110,
        height: 36,
        alignItems: 'center', 
        justifyContent: 'center',
        borderRadius: 10
    },
    sortButtonContainer: {
        backgroundColor: '#4D4040',
        width : 110,
        height: 36,
        borderRadius: 10
    },
})
