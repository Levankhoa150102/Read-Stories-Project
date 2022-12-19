import React, {Component} from 'react'
import {View, Text, TextInput, StyleSheet,TouchableOpacity, StatusBar, Button} from 'react-native'
import Header_Account from './Header_Account'
import { Ionicons } from '@expo/vector-icons';
StatusBar.setHidden(true)

export default class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {isSignIn: true}
    }
    signIn(){
        this.setState({isSignIn: true})
    }
    signUp(){
        this.setState({isSignIn: false})
    }

    GobackAccounnt() {
        const {navigation} = this.props;
        navigation.goBack();
    }
    render()
    {
        const {container, row, title, ControlSISU, TextSISU, TextSISU1, InputStyle,BtnSI} = styles
        
        const SignInJSX = (
            <View>
            
              <View style ={{justifyContent: 'center', marginLeft: 20, marginRight: 20}}>
                <Text style ={title}>LOGIN</Text>
                <TextInput style={InputStyle} placeholder='Enter your email...'></TextInput>
                <TextInput style={InputStyle} secureTextEntry={true} placeholder='Enter your password...'></TextInput>
                <TouchableOpacity  style={BtnSI}>
                        <Text>SIGN IN</Text>
                </TouchableOpacity>
              </View>
            <View style ={ControlSISU}>
                <Text style = {TextSISU}>Not a member?</Text>
                <TouchableOpacity onPress={this.signUp.bind(this)}>
                    <Text style={TextSISU1}> Sign up now</Text>
                </TouchableOpacity>
            </View>
         </View>
         
        );

        const SignUpJSX = (
            <View style ={{justifyContent: 'center', marginLeft: 20, marginRight: 20}}>
               

                <Text style={title}>SIGN UP</Text>
                <TextInput style={InputStyle} placeholder='Enter your name...'></TextInput>
                <TextInput style={InputStyle} placeholder='Enter your email...'></TextInput>
                <TextInput style={InputStyle} secureTextEntry={true} placeholder='Enter your password...'></TextInput>
                <TextInput style={InputStyle} secureTextEntry={true} placeholder='Re-enter your password...'></TextInput>
                <TouchableOpacity  style={BtnSI}>
                        <Text>SIGN UP</Text>
                </TouchableOpacity>
            </View>
        );
        const mainJSX = this.state.isSignIn ? SignInJSX : SignUpJSX;
        return (
          <View style={container}>
             <View style={row}>
                    <TouchableOpacity onPress={this.GobackAccounnt.bind(this)}>
                <Ionicons
                  style={{ color: "#FFFFFF", fontSize: 30, paddingLeft: 15 }}
                  name="arrow-back-outline"
                />
                    </TouchableOpacity>
                </View>
            {mainJSX}
            <View />
            <View />
            <View />
            <View />
          </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#222348",
        justifyContent:'space-between'
    },
    row : {
        flexDirection: 'row',
        paddingTop: 30,
        paddingLeft: 10,
    },
    title:{
        color: '#FFF',
        fontWeight: '500',
        fontFamily: 'serif',
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 20
    },
    InputStyle:{
        backgroundColor: '#FFF',
        padding: 20,
        marginBottom: 15,
        borderRadius: 20
    },

    BtnSI:{
        backgroundColor: '#FFF',
        marginHorizontal: 120,
        width: 100,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    ControlSISU: {
        flexDirection: 'row',
        paddingBottom: 50,
        justifyContent: 'center',
        marginTop: 20
    },
    TextSISU: {
        color: '#FFF',
        fontFamily: 'normal'
    },
    TextSISU1: {
        color: '#FFF',
        fontFamily: 'normal',
        textDecorationLine: 'underline'
    }

})
/**/