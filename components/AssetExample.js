import React, {Component} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Button, Dimensions } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './HomeScreen/HomeScreen'
import Storage from './Storage/Storage'
import Account from './Account/Account'
import Header from './HEADERR'
import ChangeInfo from './Account/ChangInfo'
import SignIn from './Account/SignIn'
import Header_Account from './Account/Header_Account';
import Search from './Search';
import Filter from './Filter/filter'
import TheLoai from './Filter/Theloai';

import StoryDetail from './StoryDetail/StoryDetail';
import NewStory from './HomeScreen/NewStory';
import StoryList from './StoryList/StoryList';

import StoryDetail2 from './StoryDetail/StoryDetail2';
import StoryList2   from './StoryList/StoryList2';
const {height} = Dimensions.get('window')
StatusBar.setHidden(true)
const Tab = createBottomTabNavigator();
const SettingsStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

export default class AssetExample extends Component {
  render() {
    const {container, title, wrapper, 
      row, textInput, checkbox, box, textStyle,
      status, heading, sortButton, button} = styles
    return (
      <View style ={{flex:1}}>

      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={'Home'}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              if (route.name === 'Storage') {
                return (
                  <Ionicons
                    name="book-outline"
                    size={size}
                    color={color}
                  />
                );
              }
              else if (route.name === 'Home') {
                return (
                  <Ionicons
                    name="home-outline"
                    size={size}
                    color={color}
                  />
                );
              } else if (route.name === 'Account') {
                return (
                  <Ionicons
                    name="people-outline"
                    size={size}
                    color={color}
                  />
                );
              }
              else if (route.name === 'Search') {
                return (
                  <Ionicons
                    name="search"
                    size={size}
                    color={color}
                  />
                );
              }
            },
            tabBarInactiveTintColor: 'grey',
            tabBarActiveTintColor: '#656BA4',
            headerShown: false
          })}

        >
          <Tab.Screen name="Storage" options={{ tabBarBadge: 3 }} >
            {() => (
              <SettingsStack.Navigator>
                <SettingsStack.Screen
                  name="Storage"
                  component={Storage}
                  options={{ headerShown: false }}
                />
              </SettingsStack.Navigator>
            )}
          </Tab.Screen>
          <Tab.Screen name="Search">
            {() => (
              
              <HomeStack.Navigator screenOptions={{headerShow: false}}>
                
                <HomeStack.Screen name="Filter"
                  component={Filter}
                  options={{ headerShown: false }}
                />
                <HomeStack.Group>
                <HomeStack.Screen name="TheLoai"
                  component={TheLoai}
                  options={{ title: 'Chọn thể loại',}}
                 
                  
                  />
                  </HomeStack.Group>
              </HomeStack.Navigator>
            )}
          </Tab.Screen>
          <Tab.Screen name="Home">
            {() => (
              <HomeStack.Navigator initialRouteName='Home'>
                <HomeStack.Screen name="Home"
                  component={HomeScreen}
                  options={{ headerShown: false }}
                />

               <HomeStack.Screen name="NewStory"
                  component={NewStory}
                  options={{ headerShown: false }}
                />

              <HomeStack.Screen name="StoryDetail"
                  component={StoryDetail}
                  options={{ headerShown: false }}
                />

              <HomeStack.Screen name="StoryList"
                  component={StoryList}
                  options={{ headerShown: false }}
                />

                <HomeStack.Screen name="StoryDetail2"
                  component={StoryDetail2}
                  options={{ headerShown: false }}
                />

              <HomeStack.Screen name="StoryList2"
                  component={StoryList2}
                  options={{ headerShown: false }}
                />
   
  
              </HomeStack.Navigator>
            )}
          </Tab.Screen>

          <Tab.Screen name="Account">
            {() => (
              <HomeStack.Navigator initialRouteName='Account'>
                <HomeStack.Screen name="Account"
                  component={Account}
                  options={{ headerShown: false }}
                />
              
              <HomeStack.Screen name="SignIn"
                  component={SignIn}
                  options={{ headerShown: false }}
                />
                <HomeStack.Screen name="Header_Account"
                  component={Header_Account}
                  options={{ headerShown: false }}
                />
              <HomeStack.Screen name="ChangeInfo"
                  component={ChangeInfo}
                  options={{ headerShown: false }}
                />
                
              </HomeStack.Navigator>
            )}
          </Tab.Screen>

        
        </Tab.Navigator>
      </NavigationContainer>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { 
      //height: height / 10, 
      padding: 15, 
      backgroundColor: "#222348",
      borderBottomColor: '#FFFFFF',
      borderBottomWidth: 1,
  },
  title:{
      color: "#FFF",
      fontWeight: "500",
      fontFamily: "normal",
      fontSize: 25,
      textAlign: "center",
  },
  wrapper: {
      //marginTop: "5%",
      //height: height / 8, 
      padding: 15,
      paddingLeft: 3,
      paddingRight: 3,
      backgroundColor: '#222348'
  },
  row : {
      flexDirection: 'row', 
      justifyContent:'space-between', 
      paddingTop: 15
  },
  textInput: {
      height: height / 20, 
      width: '100%', 
      backgroundColor:'#FFFFFF', 
      borderRadius: 20, 
      paddingLeft: 10
  },
  box: {
      //padding: 15, 
      backgroundColor: "#222348",
  },
  status: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 0,
      paddingTop: 1,
      //marginLeft:'-5%',
      //borderBottomWidth: 1,
      borderBottomColor: '#222348',
      backgroundColor: '#222348'
  },
  checkbox:{
      backgroundColor: '#FFFFFF',
      width: 19,
      height: 19,
      //marginRight: 5
  },
  textStyle: {
      fontSize: 15,
      fontWeight: "bold",
      color: "#FFF",
      fontFamily: "normal",
  },
  heading: {
      color: "#BBC6CD",
      //fontWeight: "bold",
      fontFamily: "normal",
      fontSize: 17,
      paddingBottom: 15,
      //textAlign: "center",
  },
  sortButton:{
      flex: 1,
      flexDirection: 'row',
      flexWrap: "wrap",
      alignItems: 'center',
      //padding: 15, 
      backgroundColor: "#222348",
      alignSelf: "flex-start",
      paddingHorizontal: 8,
      paddingTop: '1%',
      paddingBottom: '80%',
      //borderRadius: 4,
  },
  button:{
      backgroundColor: '#1A1C6A',
      width: 100,
      height: 40,
      //marginTop: '1%',
      marginLeft: '3%',
      marginBottom: '3%',
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
  }
})