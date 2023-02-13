import React, {Component, useState, useEffect} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView,
        StatusBar, TextInput, Dimensions, Image, Button, ScrollView } from 'react-native'
//import SelectMultiple from 'react-native-select-multiple'
import { Ionicons } from '@expo/vector-icons';

import MultiSelect from 'react-native-multiple-select';

const Tags =  [
    { 'id': 1, 'item': 'Kiếm hiệp' },
    { 'id': 2, 'item': 'Lịch sử' },
    { 'id': 3, 'item': 'Ngôn tình' },
    { 'id': 4, 'item': 'Tiên hiệp' },
    { 'id': 5, 'item': 'Dị giới' },
    { 'id': 6, 'item': 'Đô thị' },
    { 'id': 7, 'item': 'Huyền ảo' },
    { 'id': 8, 'item': 'Trinh thám' },
    { 'id': 9, 'item': 'Cổ đại' },
    { 'id': 10, 'item': 'Hệ thống' },
    { 'id': 11, 'item': 'Khoa huyễn' },
    { 'id': 12, 'item': 'Quân sự' },
    { 'id': 13, 'item': 'Võng du' },
    { 'id': 14, 'item': 'Xuyên không' },
    { 'id': 15, 'item': 'Đam mỹ' },
    { 'id': 16, 'item': 'Quan trường' },
    { 'id': 17, 'item': 'Dị năng' },
    { 'id': 18, 'item': 'Xuyên nhanh' },
    { 'id': 19, 'item': 'Trọng sinh' },
    { 'id': 20, 'item': 'Linh dị' },
    { 'id': 21, 'item': 'Ngược' },
    { 'id': 22, 'item': 'Sủng' },
    { 'id': 23, 'item': 'Cung đấu' },
    { 'id': 24, 'item': 'Nữ cường' },
    { 'id': 25, 'item': 'Gia đấu' },
    { 'id': 26, 'item': 'Đông Phương' },
    { 'id': 27, 'item': 'Bách hợp' },
    { 'id': 28, 'item': 'Hài hước' },
    { 'id': 29, 'item': 'Điền văn' },
    { 'id': 30, 'item': 'Mạt thế' },
    { 'id': 31, 'item': 'Truyện teen' },
    { 'id': 32, 'item': 'Phương Tây' },
    { 'id': 33, 'item': 'Nữ phụ' },
    { 'id': 34, 'item': 'Light Novel' },
    { 'id': 35, 'item': 'Đoản Văn' },
    { 'id': 36, 'item': 'Huyền Huyễn' },
  ];
const Status = [
    { 'id': 1, 'item': 'Tất cả' },
    { 'id': 2, 'item': 'Đang ra' },
    { 'id': 3, 'item': 'Đã hoàn thành' },
]
const Chapter = [
    { 'id': 1, 'item': '1 - 200' },
    { 'id': 2, 'item': '201 - 500' },
    { 'id': 3, 'item': '500 - 1000' },
    { 'id': 4, 'item': 'Hơn 1000' },
]
const {width, height } = Dimensions.get('window');
import story from '../../story_1.json'
export default class Display_Result extends Component {
    state = {
        selectedStatus : [],
        selectedTags: [],
        selectedChaper: [],
    };
    
        onSelectedStatusChange = selectedStatus => {
        this.setState({ selectedStatus });
      };
      onSelectedTagsChange = selectedTags => {
        this.setState({ selectedTags });
      };
        onSelectedChaperChange = selectedChaper => {
        this.setState({ selectedChaper });
      };
      clearSelectedCategories = () => {
        this._multiSelect._removeAllItems();
     };
    ApplyAll (){
    
    }
    render() {
        const { selectedStatus, selectedTags, selectedChaper } = this.state;
        const {container, title, wrapper, 
                row, textInput, checkbox, box, textStyle,
                status, heading, sortButton, button, ApplyDirection} = styles
        return(  
            <ScrollView style={container}>
                <View style={container}>
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
                    <View style={box}>
                        <Text style={heading}>Trạng thái: </Text>
                    </View>
                    
                    <MultiSelect
                        //hideTags
                        items={Status}
                        uniqueKey="id"
                        //ref={(component) => { multiSelect = component }}
                        onSelectedItemsChange={this.onSelectedStatusChange}
                        styleListContainer={{backgroundColor: '#222348'}}
                        styleDropdownMenuSubsection={styles.box}
                        styleTextDropdown={{color:'white', fontSize: 15}}
                        selectedItems={selectedStatus}
                        selectText="Chọn trạng thái:"
                        searchInputPlaceholderText="Search Items..."
                        onChangeInput={ (text)=> console.log(text)}
                        //altFontFamily="ProximaNova-Light"
                        tagRemoveIconColor="#CCC"
                        tagBorderColor="#CCC"
                        //tagTextColor="white"
                        selectedItemTextColor="white"
                        selectedItemIconColor="white"
                        itemTextColor="white"
                        displayKey="item"
                        searchInputStyle={{ color: '#CCC' }}
                        submitButtonColor="#1A1C6A"
                        submitButtonText="Áp dụng"
                        styleTextTag={{color:'white', fontSize: 15}}
                        styleSelectorContainer={{borderBottomLeftRadius: 1}}

                        //searchInputStyle={{fontSize: 20, padding: 7}}

                        styleRowList={{ borderBottomColor: 'grey', borderBottomWidth: 1}}


                    />

                </View>
                
                <View style={container}>
                    <Text style={heading}>Thể Loại: </Text>
                    <SafeAreaView>
                   
                    <MultiSelect
                        //hideTags
                        items={Tags}
                        uniqueKey="id"
                        //ref={(component) => { this.multiSelect = component }}
                        onSelectedItemsChange={this.onSelectedTagsChange}
                        styleListContainer={{backgroundColor: '#222348'}}
                        styleDropdownMenuSubsection={styles.box}
                        styleTextDropdown={{color:'white', fontSize: 15}}
                        selectedItems={selectedTags}
                        selectText="Chọn thể loại:"
                        searchInputPlaceholderText="Search Items..."
                        onChangeInput={ (text)=> console.log(text)}
                        //altFontFamily="ProximaNova-Light"
                        tagRemoveIconColor="#CCC"
                        tagBorderColor="#CCC"
                        tagTextColor="white"
                        selectedItemTextColor="white"
                        selectedItemIconColor="white"
                        itemTextColor="#FFFFFF"
                        displayKey="item"
                        searchInputStyle={{ color: '#CCC' }}
                        submitButtonColor="#1A1C6A"
                        submitButtonText="Áp dụng"

                        //searchInputStyle={{fontSize: 20, padding: 7}}
                        styleRowList={{ borderBottomColor: 'grey', borderBottomWidth: 1}}

                    />
                    
                    </SafeAreaView>
                </View>
                
                <View style={container}>    
                <Text style={heading}>Số chương: </Text>
                    <SafeAreaView>
                   
                    <MultiSelect
                        //hideTags
                        items={Chapter}
                        uniqueKey="id"
                        //ref={(component) => { this.multiSelect = component }}
                        onSelectedItemsChange={this.onSelectedChaperChange}
                        styleListContainer={{backgroundColor: '#222348'}}
                        styleDropdownMenuSubsection={styles.box}
                        styleTextDropdown={{color:'white', fontSize: 15}}
                        selectedItems={selectedChaper}
                        selectText="Chọn số chương:"
                        searchInputPlaceholderText="Search Items..."
                        onChangeInput={ (text)=> console.log(text)}
                        altFontFamily="ProximaNova-Light"
                        tagRemoveIconColor="#CCC"
                        tagBorderColor="#CCC"
                        //tagTextColor="white"
                        selectedItemTextColor="white"
                        selectedItemIconColor="white"
                        itemTextColor="#71E4F6"
                        displayKey="item"
                        searchInputStyle={{ color: '#CCC' }}
                        submitButtonColor="#FFFFFF"
                        submitButtonText="Áp dụng"
                        styleTextTag={{color:'white', fontSize: 15}}
                        styleSelectorContainer={{borderBottomLeftRadius: 1}}
                        //searchInputStyle={{fontSize: 20, padding: 5}}
                        styleRowList={{ borderBottomColor: 'grey', borderBottomWidth: 1}}


                    />
                    
                    </SafeAreaView>

                    
                    
                </View>
                <View>
                <TouchableOpacity style={ApplyDirection} onPress={()=> {}}>
                        <Text style={button}>ÁP DỤNG</Text>
                </TouchableOpacity>
                </View>
                
            </ScrollView>
        )
    }
}
// function onMultiChange() {
//     return (item) => setSelectedTeams(xorBy(selectedTeams, [item], 'id'))
//   }

// function onChange() {
//     return (val) => setSelectedTeam(val)
//}
const styles = StyleSheet.create({
    container: {
        flex: 0,
        flexDirection: 'column', 
        padding: 10,
        paddingTop: 5, 
        backgroundColor: "#222348",
        borderBottomColor: '#1A1C6A',
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
        //padding: 10,
        backgroundColor: "#222348",
        borderBottomColor: '#FFFFFF',
        borderBottomWidth: 0,
        color: 'white',
        borderRadius: 20,
        height: 50,
        //width: 20,
    },
    status: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 0,
        paddingTop: 1,
        borderBottomColor: '#222348',
        backgroundColor: '#222348'
    },
    checkbox:{
        backgroundColor: '#FFFFFF',
        width: 19,
        height: 19,
    },
    textStyle: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#FFF",
        fontFamily: "normal",
    },
    text_button: {
        backgroundColor: 'blue',
        color: '#FFFFF',
        fontFamily: 'serif',
        justifyContent:'center',
        fontSize: 15,
        padding: 10,
        width: 200,
        borderRadius:20,
      },
    heading: {
        color: "yellow",
        fontFamily: "normal",
        fontSize: 20,
        fontWeight: "bold",
        paddingBottom: 15,
    },
    sortButton:{
        flex: 1,
        flexDirection: 'row',
        flexWrap: "wrap",
        alignItems: 'center',
        backgroundColor: "#222348",
        alignSelf: "flex-start",
        paddingHorizontal: 8,
        paddingTop: '1%',
        paddingBottom: '30%',
    },
    ApplyDirection: {
       backgroundColor:'blue',
       alignItems: 'center',
       padding: 10,
       marginTop: 20,

    },
    button:{
        
        fontWeight: "500",
        fontSize: 20,
    }
})