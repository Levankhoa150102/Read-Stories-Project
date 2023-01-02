import React, {Component} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();
const NextPage = createNativeStackNavigator();
const Settings = createNativeStackNavigator();
const Info = createNativeStackNavigator();
export default class StoryInterface extends Component {
  render() {
    return (
    <View style ={{flex: 1}}>
        
            <Tab.Navigator
            initialRouteName={'Home'}
            screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              if (route.name === 'turn-back') {
                return (
                  <Ionicons
                    name="arrow-dropleft-circle"
                    size={size}
                    color={color}
                  />
                );
              }
              else if (route.name === 'turn-forward') {
                return (
                  <Ionicons
                    name="arrow-dropright-circle"
                    size={size}
                    color={color}
                  />
                );
              } else if (route.name === 'settings') {
                return (
                  <Ionicons
                    name="settings"
                    size={size}
                    color={color}
                  />
                );
              }
              else if (route.name === 'info') {
                return (
                  <Ionicons
                    name="information-circle-outline"
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
        <Tab.Screen>
        {() => (
            <NextPage.Navigator>
                <NextPage.Screen initialRouteName = 'turn-back'
                  options={{ headerShown: false }}
                />
            </NextPage.Navigator>
        )}
        </Tab.Screen>
        <Tab.Screen>
        {() => (
        <NextPage.Navigator>
            <NextPage.Screen initialRouteName = 'turn-forward'
            options={{ headerShown: false }}
            />
        </NextPage.Navigator>
        )}
        </Tab.Screen>      
        <Tab.Screen>
        {() => (
        <Settings.Navigator>
            <Settings.Screen initialRouteName = 'settings'
            options={{ headerShown: false }}
            />
        </Settings.Navigator>
        )}
        </Tab.Screen>
        <Tab.Screen>
        {() => (
        <Info.Navigator>
            <Info.Screen initialRouteName = 'info'
            options={{ headerShown: false }}
            />
        </Info.Navigator>
        )}
        </Tab.Screen>
      </Tab.Navigator>
    </View>
    )
  }
}
