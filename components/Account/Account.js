import React, {Component} from 'react'
import {View, Text, StyleSheet,TouchableOpacity, StatusBar, Image} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import profileIcon from '../../assets/Icon/Profile.png'
import ChangeInfo from './ChangInfo'
import SignIn from './SignIn';
StatusBar.setHidden(true)

export default class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: true
        };
    }

    ChangeInfo() {
        const {navigation} = this.props;
        navigation.navigate('ChangeInfo');
    }
    SignIn(){
        const {navigation} = this.props;
        navigation.navigate('SignIn');
    }

    render()
    {   const {container, profileStyle, btnStyle, btnText, btnStyle1} = styles
        const logoutJSX = (
          <View>
            <TouchableOpacity style={btnStyle} onPress={this.SignIn.bind(this)}>
              <Text style={btnText} >Đăng Nhập</Text>
            </TouchableOpacity>
          </View>
        );
        
        const loginJSX = (
        <View style={{ flex: 1, justifyContent:'space-between', alignItems:'center' }}>
        <Text style={{color: '#FFF', fontFamily:'serif', fontSize: 20, paddingTop: 20}}>Lê Văn Khoa</Text>
        <View>
        <TouchableOpacity style={btnStyle1} onPress={this.ChangeInfo.bind(this)}>
            <Text style={btnText}>Thay Đổi Thông Tin</Text>
        </TouchableOpacity>

        <TouchableOpacity style={btnStyle1}>
            <Text style={btnText}>Đăng Xuất</Text>
        </TouchableOpacity>
        </View>

        <View/>
    </View>
        )
        const mainJSX = this.state.isLogin ? loginJSX : logoutJSX;
        return (
          <View style={container}>
            <Image source={profileIcon} style={profileStyle}></Image>
           {mainJSX}
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: '#222348',
        alignItems: 'center',
     },

    profileStyle: {
        marginTop: 100,
        width: 150,
        height: 150,
    },

    btnStyle: {
        backgroundColor: '#fff',
        width: 100,
        height: 50,
        marginTop: 30,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    btnStyle1: {
        backgroundColor: '#fff',
        height: 60,
        marginTop: 10,
        borderRadius: 10,
        paddingHorizontal: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },

    btnText: {
        color: '#222348',
        fontFamily: 'serif',
        fontSize: 20,
    },

})


