import React, {Component} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Button } from 'react-native'
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
import Filter from './filter'


import StoryDetail from './StoryDetail/StoryDetail';
import NewStory from './HomeScreen/NewStory';
import StoryList from './StoryList/StoryList';

import StoryDetail2 from './StoryDetail/StoryDetail2';
import StoryList2   from './StoryList/StoryList2';
StatusBar.setHidden(true)
const Tab = createBottomTabNavigator();
const SettingsStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

export default class AssetExample extends Component {
  render() {
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
              <HomeStack.Navigator>
                <HomeStack.Screen name="Filter"
                  component={Filter}
                  options={{ headerShown: false }}
                />
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

