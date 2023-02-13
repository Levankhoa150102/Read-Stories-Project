import React, {Component,  useState, useEffect} from 'react'
import { View, Text, StyleSheet, TouchableOpacity,ScrollView,
        StatusBar, TextInput, Dimensions, Image, Button, SafeAreaView } from 'react-native'
//import SelectMultiple from 'react-native-select-multiple'
import { Ionicons } from '@expo/vector-icons';
import MultiSelect from 'react-native-multiple-select';
import { useNavigation } from '@react-navigation/native';

StatusBar.setHidden(true)
const {width, height } = Dimensions.get('window');

export default function TheLoai (){
    const navigation = useNavigation();
    useEffect(()=>{
        navigation.setOptions({
            headerLargeTitle: false
        })
    },[navigation])
    return(
        <ScrollView>
            <View style={styles.container}>
            <Text style={title}>Tìm kiếm</Text>
                    <View style={wrapper}>
                        <View style={row}>
                        <TextInput 
                            style={textInput} 
                            placeholder="Tìm kiếm truyện..." 
                            placeholderTextColor={'#494F86'}  
                            inlineImageLeft='search_icon'
                        />
                        </View>
                    </View>
            </View>
        </ScrollView>
    )
    
}



const styles = StyleSheet.create({
    container: { 
        //height: height / 10, 
        flex: 1,
        padding: 12,
        backgroundColor: 'white'
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
        //flex: 1,
        //flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 1,
        paddingTop: -5,
        //marginBottom:'-3%',
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
        //paddingBottom: '80%',
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
    intoChapter: {
        alignItems: "center",
        padding: 10,
        height: 40,
        backgroundColor: "#2196F3",
        marginBottom: 30
    },
    text: {
        padding: 12,
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'black'
      }
})