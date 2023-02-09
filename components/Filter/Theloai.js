import React, {Component,  useState, useEffect} from 'react'
import { View, Text, StyleSheet, TouchableOpacity,
        StatusBar, TextInput, Dimensions, Image, Button, SafeAreaView } from 'react-native'
//import SelectMultiple from 'react-native-select-multiple'
import { Ionicons } from '@expo/vector-icons';
//import MultiSelect from 'react-native-multiple-select';

// ['Huyền huyễn', 'Kiếm hiệp', 'Lịch sử', 
//                 'Ngôn tình', 'Tiên hiệp', 'Dị giới', 
//                 'Đô thị', 'Huyền ảo', 'Trinh thám',
//                 ' Cổ đại', 'Hệ thống', 'Khoa huyễn', 
//                 'Quân sự', 'Võng du', 'Xuyên không',
//                 'Đam mỹ', 'Quan trường', 'Dị năng',
//                 'Xuyên nhanh', 'Trọng sinh', 'Linh dị',
//                 'Ngược', 'Sủng', 'Cung đấu', 'Nữ cường',
//                 'Gia đấu', 'Đông Phương', 'Bách hợp', 
//                 'Hài hước', 'Điền văn', 'Mạt thế', 'Truyện teen',
//                 'Phương Tây', 'Nữ phụ', 'Light Novel',
//                 'Đoản Văn', 'Khác']
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
//
export default function TheLoai (){
    const [selectedItems, setSelectedItems] = useState([]);
    const onSelectedItemsChange = (selectedItems) => {
 
        setSelectedItems(selectedItems);
 
        for (let i = 0; i < selectedItems.length; i++) {
            var tempItem = Tags.find(item => item.id === selectedItems[i]);
            console.log(tempItem);
        }
 
  };
        const {container, title, wrapper, 
            row, textInput, checkbox, box, textStyle,
            status, heading, sortButton, button, intoChapter} = styles
        return(
            //<SafeAreaView style={{ flex: 1 }}>
 
      <View style={container}>
 
        {/* <Text style={styles.text}> React Native Multiple Select </Text> */}
 
        <MultiSelect
          //hideTags
          items={Tags}
          uniqueKey="id"
          onSelectedItemsChange={onSelectedItemsChange}
          selectedItems={selectedItems}
          selectText="Select Items"
          searchInputPlaceholderText="Search Items Here..."
          onChangeInput={(text) => console.log(text)}
          tagRemoveIconColor="#CCC"
          tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#CCC"
          itemTextColor="#000"
          displayKey="name"
          searchInputStyle={{ color: '#CCC' }}
          submitButtonColor="#00BFA5"
          submitButtonText="Submit"
        />
 
      </View>
    //</SafeAreaView>
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