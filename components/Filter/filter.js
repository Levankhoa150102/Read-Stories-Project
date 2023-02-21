import React, {Component, useState, useEffect} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, FlatList,
        StatusBar, TextInput, Dimensions, Image, Button, ScrollView } from 'react-native'
//import SelectMultiple from 'react-native-select-multiple'
import { Ionicons } from '@expo/vector-icons';

import MultiSelect from 'react-native-multiple-select';
import { useNavigation } from '@react-navigation/native';

import Display_Result from './result_filter';

import story from '../../story_1.json'

StatusBar.setHidden(true)
const {width, height } = Dimensions.get('window');
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

const renderLabel = (label, style) => {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{marginLeft: 10}}>
          <Text style={style}>{label}</Text>
        </View>
      </View>
    )
}

const story_list = story.list_story

//console.log(story_list.filter(filter_title))




 
const Filter = ({navigation}) => {
    const [search, setSearch] = useState('')
    const [filterData, setFilterData] = useState([]);
    const [SaveHis, setSaveHis] = useState([]);
    //const navigation = useNavigation();
    const Press_to_Detail = () => {
        SaveHis(search);
        console.log(search);
        navigation.navigate('StoryDetail')
      };
      const Press_to_read = () => {
        navigation.navigate('StoryRead')
      };
    const searchFilter = (text) => {
        if(text) {
            const newData = story_list.filter(item => {
                const itemData = item.story_name ? item.story_name.toUpperCase()
                                : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            })
            setFilterData(newData);
            setSearch(text);
        }
        else {
            setFilterData(story_list);
            setSearch(text);
        }
    }
    
    const ItemView = ({item}) => {
        return(
            <View style={styles.container1}>
                <TouchableOpacity 
                    style={styles.image} 
                    activeOpacity={0}
                    onPress={() => {
                        try{
                            var a = SaveHis
                            if(a[a.length-1]!=item.story_name ||
                                a.filter(s => s.id) != item.key)
                                a.push({
                                    id: item.key,
                                    search_name: item.story_name
                                })
                            setSaveHis(a)
                            console.log(SaveHis)
                            navigation.navigate('StoryDetail')
                        }catch(e){
                            setSaveHis(item.story_name)
                        }
                    }} 
                    >
                <View style={{flexDirection: 'row'}}>
                    <Image source={{uri: item.source_img}} style={styles.imageStyle} />
                    <View>
                    <Text style={styles.storyName}>{item.story_name}</Text>
                    <Text style={styles.storyNameside}>{item.author}</Text>
                    </View>
                </View>  
                    </TouchableOpacity> 
            </View>
        )
    }
    const View_Search_His = ({item}) => {
        return(
            <View style={{flex: 2}}>
                <Text styles={{color: "red"}}>{item.search_name}</Text>
            </View>
        )
    }
    const Save_Search_History = () => {
        return(
            <View>

            </View>
        )
    }
    return(
        <View style={{flex: 1, backgroundColor:'#222348'}}>
            <View style={styles.container}>
            <Text style={styles.title}>Tìm kiếm</Text>
                    <View style={styles.wrapper}>
                        <View style={styles.row}>
                        <TextInput 
                            style={styles.textInput} 
                            placeholder="Tìm kiếm truyện..." 
                            placeholderTextColor={'#494F86'} 
                            onChangeText={(text) => searchFilter(text)}
                            inlineImageLeft='search_icon'
                            value={search}
                    
                        />
                        </View>
                    </View>
                    {/*console.log(search)*/}
            </View>
            <View>
                <TouchableOpacity styles={styles.ApplyDirection} onPress={()=>navigation.navigate('Display_Result')}>
                    <Text style={styles.button}>
                    <Ionicons 
                        name='funnel-outline'
                        style={{justifyContent: 'center'}}
                        size={22}/> Tìm kiếm nâng cao 
                    </Text>
                </TouchableOpacity>
                {search?<FlatList
                    data={filterData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={(item) => ItemView(item)}
                />:
                    
                    <FlatList
                        data={SaveHis}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={(item) => {
                            <View style={{flex: 2}}>
                                    <Text styles={{color: "red"}}>{item.search_name}</Text>
                            </View>
                        }}
                    />}
            </View>
        </View>
    )
    
}
export default Filter
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
    container1: { 
        padding: 4, 
        backgroundColor: "#222348",
        //flexDirection: 'row',
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
       justifyContent: 'center',
       padding: 15,
       marginTop: 20,
       textAlign:'center',
        
    },
    button:{
        //backgroundColor: 'blue',
        color: "#FFF",
        justifyContent:'center',
        fontWeight: "500",
        fontSize: 17,
        width: 200,
        textAlign:'center',
        //borderRadius: 20,
        marginLeft: '22%'
    },
    storyNameside:{
        paddingLeft: 10,
        fontSize: 15 ,
        color: 'grey',
        fontWeight: '500',
        //backgroundColor: '#222348',
      },
      storyName:{
        paddingLeft: 10,
        fontSize: 15 ,
        //fontFamily: 'Avenir',
        color: '#FFFFFF'
      },
      intoChapter: {
        alignItems: "center",
        backgroundColor: "#2196F3",
        padding: 13,
        height: height*5.5/100,
        width: width*35/100,
        borderRadius: 5, 
        marginRight: '40%',
      },
      image:{
        width: width*0.8,
        height: height*0.2,
        //flex: 1,
        //flexDirection: 'row',
        marginBottom: '-5%',
        padding: 5,
      },
      imageStyle: {
        width:  90,
        height: 130,
        borderRadius: 10,
    },
})

