import React, {Component} from 'react'
import {View, Text, StyleSheet,TouchableOpacity, StatusBar,Image, Dimensions, ScrollView} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
export default class StoryRead extends Component {
    goBack() {
      const {navigation} = this.props;
      navigation.goBack();
  }
    list(){
        <View>
            <Text>'Component for list of chapters'</Text>
        </View>
    }
    render() {
        const {container, row, Titletext, Chaptertext, scrollView, mainText} = styles
        return (
            <ScrollView style={{ flex: 1, backgroundColor: "#4D4040" }}>
                <View style = {container}>
                    <View style = {row}>
                        <TouchableOpacity onPress={this.goBack.bind(this)}>
                            <Ionicons
                            style={{ color: "#FFFFFF", fontSize: 30, paddingLeft: 15 }}
                            name="arrow-back-outline"
                            />
                        </TouchableOpacity>
                    </View>
                    <View style = {row}>
                        <Text style = {Titletext}>'A'{"\n"}
                        <Text style = {Chaptertext}>'B'</Text>
                        </Text>
                    </View>
                    <View style = {row}>
                        <TouchableOpacity onpress = {this.list.bind(this)}>
                            <Ionicons
                            style={{ color: "#FFFFFF", fontSize: 30, paddingLeft: 15 }}
                            name="list-outline"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <ScrollView style = {scrollView}>
                        <Text style = {mainText}>
                            'Scroll!'
                        </Text>
                    </ScrollView>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 30,
      },
    Titletext: {
        flexDirection: "row",
        color: "#F6DE00",
    },
    Chaptertext: {
        flexDirection: "row",
        color: "#D9D9D9",
    },
    scrollView: {
        marginHorizontal: 20,
    },
    mainText: {
        fontSize: 30,
    }
})