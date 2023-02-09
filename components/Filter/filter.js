import React, {Component, useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView,
        StatusBar, TextInput, Dimensions, Image, Button, ScrollView } from 'react-native'
//import SelectMultiple from 'react-native-select-multiple'
import { Ionicons } from '@expo/vector-icons';
import { xorBy } from 'lodash'
import MultiSelect from 'react-native-multiple-select';

import story from 'E:/Javascript/Read-Stories-Project/story.json'
const list = story.list_story
StatusBar.setHidden(true)
const {width, height } = Dimensions.get('window');
const Tags =  [
    { id: 1, name: 'Kiếm hiệp' },
    { id: 2, name: 'Lịch sử' },
    { id: 3, name: 'Ngôn tình' },
    { id: 4, name: 'Tiên hiệp' },
    { id: 5, name: 'Dị giới' },
    { id: 6, name: 'Đô thị' },
    { id: 7, name: 'Huyền ảo' },
    { id: 8, name: 'Trinh thám' },
    { id: 9, name: 'Cổ đại' },
    { id: 11, name: 'Hệ thống' },
    { id: 12, name: 'Khoa huyễn' },
    { id: 13, name: 'Quân sự' },
    { id: 14, name: 'Võng du' },
    { id: 15, name: 'Xuyên không' },
    { id: 16, name: 'Đam mỹ' },
    { id: 17, name: 'Quan trường' },
    { id: 18, name: 'Dị năng' },
    { id: 19, name: 'Xuyên nhanh' },
    { id: 20, name: 'Trọng sinh' },
    { id: 21, name: 'Linh dị' },
    { id: 22, name: 'Ngược' },
    { id: 23, name: 'Sủng' },
    { id: 24, name: 'Cung đấu' },
    { id: 25, name: 'Nữ cường' },
    { id: 26, name: 'Gia đấu' },
    { id: 27, name: 'Đông Phương' },
    { id: 28, name: 'Bách hợp' },
    { id: 29, name: 'Hài hước' },
    { id: 30, name: 'Điền văn' },
    { id: 31, name: 'Mạt thế' },
    { id: 32, name: 'Truyện teen' },
    { id: 33, name: 'Phương Tây' },
    { id: 34, name: 'Nữ phụ' },
    { id: 35, name: 'Light Novel' },
    { id: 36, name: 'Đoản Văn' },
  ];
const Status = [
    { id: 1, item: 'Tất cả' },
    { id: 2, item: 'Đang ra' },
    { id: 3, item: 'Đã hoàn thành' },
]
const renderLabel = (label, style) => {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{marginLeft: 10}}>
          <Text style={style}>{label}</Text>
        </View>
      </View>
    )
}


export default class Filter extends Component {
    state = {
        selectedStatus : [],
        selectedTags: []
    };
    
      
      onSelectedStatusChange = selectedStatus => {
        this.setState({ selectedStatus });
      };
      onSelectedTagsChange = selectedTags => {
        this.setState({ selectedTags });
      };
    render() {
        const { selectedStatus, selectedTags } = this.state;
        const {container, title, wrapper, 
                row, textInput, checkbox, box, textStyle,
                status, heading, sortButton, button} = styles
        return(  
            <View>
                <View style={container}>
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
                    <View style={box}>
                        <Text style={heading}>Trạng thái: </Text>
                    </View>
                    
                    <MultiSelect
                        //hideTags
                        items={Status}
                        uniqueKey="id"
                        ref={(component) => { this.multiSelect = component }}
                        onSelectedItemsChange={this.onSelectedTagsChange}
                        styleListContainer={{backgroundColor: '#222348'}}
                        styleDropdownMenuSubsection={styles.box}
                        styleTextDropdown={{color:'white', fontSize: 15}}
                        selectedItems={selectedTags}
                        selectText="Chọn trạng thái:"
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
                        submitButtonColor="#1A1C6A"
                        submitButtonText="Submit"
                        styleTextTag={{color:'white', fontSize: 15}}
                        styleSelectorContainer={{borderBottomLeftRadius: 1}}
                    />

                </View>
                
                <View style={container}>
                    <Text style={heading}>Thể Loại: </Text>
                    <SafeAreaView>
                   
                    <MultiSelect
                        //hideTags
                        items={Tags}
                        uniqueKey="id"
                        ref={(component) => { this.multiSelect = component }}
                        onSelectedItemsChange={this.onSelectedStatusChange}
                        styleListContainer={{backgroundColor: '#222348'}}
                        styleDropdownMenuSubsection={styles.box}
                        styleTextDropdown={{color:'white', fontSize: 15}}
                        selectedItems={selectedStatus}
                        selectText="Chọn thể loại:"
                        searchInputPlaceholderText="Search Items..."
                        onChangeInput={ (text)=> console.log(text)}
                        altFontFamily="ProximaNova-Light"
                        tagRemoveIconColor="#CCC"
                        tagBorderColor="#CCC"
                        tagTextColor="white"
                        selectedItemTextColor="white"
                        selectedItemIconColor="white"
                        itemTextColor="#71E4F6"
                        displayKey="name"
                        searchInputStyle={{ color: '#CCC' }}
                        submitButtonColor="#1A1C6A"
                        submitButtonText="Submit"
                    />
                    
                    </SafeAreaView>
                </View>
                <View style={container}>    
                    <Text style={heading}>
                        Số chương:
                    </Text>
                    <View style={sortButton}>
                        <TouchableOpacity style={button}>
                            <Text style={{color: '#FFFFFF'}}>1 - 500</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={button}>
                            <Text style={{color: '#FFFFFF'}}>501 - 1000</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={button}>
                            <Text style={{color: '#FFFFFF'}}>1001 - 2000</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={button}>
                            <Text style={{color: '#FFFFFF'}}>Hơn 2000</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.ApplyDirection}>
                        <Button title='Áp dụng'/>
                    </View>
                </View>
                
            </View>
        )
    }
}
function onMultiChange() {
    return (item) => setSelectedTeams(xorBy(selectedTeams, [item], 'id'))
  }

function onChange() {
    return (val) => setSelectedTeam(val)
}


const styles = StyleSheet.create({
    container: {
        flex: 0,
        flexDirection: 'column', 
        padding: 15,
        paddingTop: 5, 
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
    heading: {
        color: "#BBC6CD",
        fontFamily: "normal",
        fontSize: 17,
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
        backgroundColor: "#222348",
        paddingTop: '1%',
        paddingBottom: '73%',
    },
    button:{
        backgroundColor: '#1A1C6A',
        width: 100,
        height: 40,
        marginLeft: '3%',
        marginBottom: '3%',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    }
})