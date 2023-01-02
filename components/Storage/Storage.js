import React, {Component} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList, SafeAreaView,
  StatusBar, TextInput, Dimensions, Image, Button } from 'react-native'
import Header from '../HEADERR'
StatusBar.setHidden(true)
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons } from '@expo/vector-icons';
import story from 'E:/Javascript/Read-Stories-Project/story.json'
//console.log(story.list_story[0].story_name)
import img1 from '../../assets/Image_Story/7.jpg' 
import img2 from '../../assets/Image_Story/6.jpg'
import img3 from '../../assets/Image_Story/5.jpg'
import img4 from '../../assets/Image_Story/2.jpg'
import img5 from '../../assets/Image_Story/3.jpg'
import img6 from '../../assets/Image_Story/4.jpg'
import img7 from '../../assets/Image_Story/9.jpg'
import img8 from '../../assets/Image_Story/10.jpg'
import img9 from '../../assets/Image_Story/11.jpg'
import img10 from '../../assets/Image_Story/12.jpg'
import { List } from 'react-native-paper';

const {width, height } = Dimensions.get('window');
const Tab1 = createMaterialTopTabNavigator();
const list = story.list_story
const Library = [
  {
    id: 1,
    title: "Tổng tài, Anh nhận nhầm người rồi",
    author: 'LVL',
    Category: 'aa, bb, cc',
    img: img1,
  },
  {
    id: 2,
    title: "Sau này của chúng ta",
    author: 'LVL',
    Category: 'aa, bb, cc',
    img: img2,
  },
  {
    id: 3,
    title: "Mê vợ, không lối về",
    author: 'LVL',
    Category: 'aa, bb, cc',
    img: img3,
  },
  {
    id: 4,
    title: "Cô dâu bị đánh tráo của tổng tài",
    author: 'LVL',
    Category: 'aa, bb, cc',
    img: img4,
  },
  {
    id: 5,
    title: "Mê muội vì em",
    author: 'LVL',
    Category: 'aa, bb, cc',
    img: img5,
  }
]
console.log(list[0])
const offline = [
  {
    id: 1,
    title: "Tổng tài, Anh nhận nhầm người rồi",
    author: 'LVL',
    Category: 'aa, bb, cc',
    img: img1,
  },
  {
    id: 3,
    title: "Mê vợ, không lối về",
    author: 'LVL',
    Category: 'aa, bb, cc',
    img: img3,
  },
  {
    id: 4,
    title: "Cô dâu bị đánh tráo của tổng tài",
    author: 'LVL',
    Category: 'aa, bb, cc',
    img: img4,
  },
  {
    id: 'None',
    title: "",
    author: '',
    Category: 'aa, bb, cc',
    img: '',
  },
  {
    id: 'None',
    title: "",
    author: '',
    Category: 'aa, bb, cc',
    img: '',
  },
] 
const Item = ({ story_name, source_img, author, tag }) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.image}>
      <Image source={source_img} style={styles.imageStyle} />
      <View>
        <Text style={styles.storyName}>{story_name}</Text>
        <Text style={styles.storyNameside}>Tác giả: {author}</Text>
        <Text style={styles.storyNameside}>Thể loại: {tag}</Text>
      </View>
    </TouchableOpacity>
  </View>
);

function TuSach(){
  const renderItem = ({ item }) => (
    <Item 
      title={item.story_name} 
      source_img={item.source_img} 
      author={item.author} 
      tag={item.tag.join(", ")}
      />
      
  );
  
  return (
    
    <View style={{backgroundColor: "#222348", paddingBottom: 30,
    }}>
      <SafeAreaView style={styles.container}>
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
    </View>
  );  
}
function Offline(){
  const renderItem = ({ item }) => (
    <Item title={item.title} img={item.img}/>
  );
  return (
    <View style={{backgroundColor: "#222348", paddingBottom: 30,
    }}>
      <SafeAreaView style={styles.container}>
      <FlatList
        data={offline}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
    </View>
  );
}
export default class Storage extends Component {
    render()
    {
        return (
          
          <View style={{flex: 1, backgroundColor: "#222348" }}>
              <Tab1.Navigator>
                  <Tab1.Screen name="Tủ Sách" component={TuSach} options={{}}/>
                  <Tab1.Screen name="Offline" component={Offline} />
              </Tab1.Navigator>
          </View>

        )
    }
}
const styles = StyleSheet.create({
  container: { 
    //height: height / 10, 
    padding: 4, 
    backgroundColor: "#222348",
    //marginBottom: '6%',
    //borderBottomColor: '#FFFFFF',
    //borderBottomWidth: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 5,
    marginHorizontal: 14,
  },
  storyNameside:{
    paddingLeft: 10,
    fontSize: 15 ,
    color: 'grey',
    fontWeight: '500'
  },
  title: {
    color: '#FFF',
    fontFamily: 'serif',
    fontSize: 20,
    padding: 10,
  },
  image:{
    width: width*0.8,
    height: height*0.2,
    flexDirection: 'row',
    marginBottom: '-5%',
    padding: 5,
  },
  imageStyle: {
    //paddingLeft: 2,
    width:  90,
    height: 130,
    borderRadius: 10,
  },
  storyName:{
    paddingLeft: 10,
    fontSize: 15 ,
    //fontFamily: 'Avenir',
    color: '#FFFFFF',
    fontWeight: '500'
  },
});
