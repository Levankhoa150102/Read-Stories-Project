import React, {Component} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput, Dimensions, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

StatusBar.setHidden(true)
const {height} = Dimensions.get('window')
export default class Filter extends Component {
    GobacktoHomePage() {
        const {navigation} = this.props;
        navigation.goBack();
    }
    render(){
        const {container1,title, wrapper, row, textInput} = styles
        return(  
            <View style={container1}>
                <Text style={title}>Tìm kiếm</Text>
                <View style={wrapper}>
                    <View style={row}>
                    <TextInput 
                        style={textInput} 
                        placeholder="Tìm kiếm truyện..." 
                        placeholderTextColor={'#494F86'}  
                    />
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container1: { 
        //height: height / 10, 
        padding: 15, 
        backgroundColor: "#222348" 
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
    }
})