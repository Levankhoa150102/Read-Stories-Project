import React, {Component} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Button, Dimensions } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
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


import StoryRead from './StoryRead/Story';
import  StoryChapters from './StoryRead/StoryChapters';

import Display_Result from './Filter/result_filter';


StatusBar.setHidden(true)
const {height} = Dimensions.get('window')
//const Tab = createBottomTabNavigator();
const SettingsStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function getHeaderTitle(route) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Trang Chủ';

  switch (routeName) {
    case 'Trang Chủ':
      return 'Home Page';
    case 'Kho Truyện':
        return 'Kho truyen';
    case 'Hồ Sơ':
      return 'My account';
    case 'Tìm Kiếm':
      return 'Tim kiem'
  }
}

function HomePage() {
  return(
    
    <HomeStack.Navigator initialRouteName='Home'>
            <HomeStack.Screen 
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
            />

            <HomeStack.Screen 
                name="Filter"
                component={Filter}
                options={{ headerShown: false }}
            />
  </HomeStack.Navigator>
  )
}
function MainStorage(){
  return(
    <SettingsStack.Navigator>
                <SettingsStack.Screen
                  name="Storage"
                  component={Storage}
                  options={{ headerShown: false }}
                />
    </SettingsStack.Navigator>
  )
}
function MainFilter({descriptors,state}){
  return(         
          <HomeStack.Navigator>
            <HomeStack.Screen 
                name="Filter"
                component={Filter}
                options={{ headerShown: false }}
            />
            <HomeStack.Screen 
                name="TheLoai"
                component={TheLoai}
                options={{ headerShown: false}}
            />
          </HomeStack.Navigator>
  )
}
function Profile(){
  return(
        <HomeStack.Navigator initialRouteName='Account'>
            <HomeStack.Screen 
                name="Account"
                component={Account}
                options={{ headerShown: false }}
            />
            <HomeStack.Screen 
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
            />
            <HomeStack.Screen 
                name="Header_Account"
                component={Header_Account}
                options={{ headerShown: false }}
            />
            <HomeStack.Screen 
                name="ChangeInfo"
                component={ChangeInfo}
                options={{ headerShown: false }}
            />
                
        </HomeStack.Navigator>
  )
}
function TabControl(){
    return(
      <Tab.Navigator
          initialRouteName={'Trang Chủ'}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              if (route.name === 'Kho Truyện') {
                return (
                  <Ionicons
                    name="book-outline"
                    style={styles.icon}
                  />
                );
              }
              else if (route.name === 'Trang Chủ') {
                return (
                  <Ionicons
                    name="home-outline"
                    style={styles.icon}
                  />
                );
              } else if (route.name === 'Hồ Sơ') {
                return (
                  <Ionicons 
                    name="people-outline"
                    style={styles.icon}
                  />
                );
              }
              else if (route.name === 'Tìm Kiếm') {
                return (
                  <Ionicons
                    name="search"
                    style={styles.icon}
                  />
                  
                );
              }
            },
            tabBarInactiveTintColor: 'grey',
            tabBarActiveTintColor: '#656BA4',
            headerShown: true,
          })}
      >
          <Tab.Screen name="Kho Truyện" component={MainStorage} />
          <Tab.Screen 
                name="Tìm Kiếm" 
                component={Filter}
          />
          <Tab.Screen name="Trang Chủ" component={HomePage}/>
          <Tab.Screen name="Hồ Sơ" component={Profile} />
        
      </Tab.Navigator>
    )
}
const hideTabBar = () => {
  navigation.setOptions({
    tabBarStyle: { display: 'none' },
  });
};
export default class AssetExample extends Component {
  render() {
    return (
      
      <View style ={{flex:1}}>
      <NavigationContainer>
        { <HomeStack.Navigator screenOptions={{headerShown: false}}>
          <HomeStack.Screen 
            name="TabControl"
            component={TabControl}
            />
            {/*HomeScreen Navigate*/}
            {/*Truyen moi */}
            <HomeStack.Screen name="StoryList" component={StoryList}/>
            <HomeStack.Screen name="StoryDetail" component={StoryDetail}/>
            <HomeStack.Screen name="StoryRead" component={StoryRead}/>
            <HomeStack.Screen name="StoryChapters" component={StoryChapters}/>

            {/*De Xuat*/}
            <HomeStack.Screen name="StoryList2" component={StoryList2}/>

            {/*Search Navigate*/}
            {/*The Loai*/}
            <HomeStack.Screen name="Display_Result" component={Display_Result}/>
            
            {/*Storage*/}
            <HomeStack.Screen name="Storage" component={Storage}/>

            {/*Filter*/}
            <HomeStack.Screen name="Filter" component={Filter}/>
        </HomeStack.Navigator>}
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
  },
  icon: {
    fontSize: 20,
    justifyContent: 'center'
  }
})