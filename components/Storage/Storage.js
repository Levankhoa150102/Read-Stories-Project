import React, {Component, useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList, SafeAreaView,
  StatusBar, TextInput, Dimensions, Image, Button, TouchableWithoutFeedback } from 'react-native'
import Header from '../HEADERR'
StatusBar.setHidden(true)
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons } from '@expo/vector-icons';



import story from '../../story_1.json'


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
const TS = ({ story_name, source_img, author, Press_to_Detail, Press_to_read}) => {
  return(
  <View style={styles.container}>
      <TouchableOpacity 
          style={styles.image} 
          activeOpacity={1} 
          onPress={Press_to_Detail}>
      <Image source={{uri: source_img}} style={styles.imageStyle} />
      <View>
        <Text style={styles.storyName}>{story_name}</Text>
        <Text style={styles.storyNameside}>{author}</Text>
        <TouchableOpacity
            style={styles.intoChapter}
            activeOpacity={0}
            onPress={Press_to_read}
        >
          <Text style={{color: "#FFFFFF"}}>Chương {"123"}</Text>
        </TouchableOpacity> 
      </View>
    </TouchableOpacity>
  </View>
  );
};

const Off = ({ story_name, source_img, author, Press_to_Detail, Press_to_read }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
          style={styles.image} 
          activeOpacity={1} 
          onPress={Press_to_Detail}>
      <Image source={{uri: source_img}} style={styles.imageStyle} />
      <View>
        <Text style={styles.storyName}>{story_name}</Text>
        <Text style={styles.storyNameside}>{author}</Text>
        {/* <Text style={styles.storyNameside}>Thể loại: {tag}</Text>*/}
        <TouchableOpacity
            style={styles.intoChapter}
            activeOpacity={0}
            onPress={Press_to_read}
        >
          <Text style={{color: "#FFFFFF"}}>Chương {"123"}</Text>
        </TouchableOpacity> 
      </View>
    </TouchableOpacity>
  </View>
  );
};

function TuSach({navigation}){
  const [count, setCount] = useState(0);

  const Press_to_Detail = () => {
    navigation.navigate('StoryDetail')
  };
  const Press_to_read = () => {
    navigation.navigate('StoryRead')
  };
  const renderItem = ({ item }) => (
    <TS
      story_name={item.story_name} 
      source_img={item.source_img} 
      author={item.author} 
      Press_to_Detail={Press_to_Detail}
        Press_to_read={Press_to_read}
      />
  );
  
  return (
    <View style={{backgroundColor: "#222348"}}>
      <SafeAreaView style={styles.container}>
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        Press_to_Detail={Press_to_Detail}
        Press_to_read={Press_to_read}
      />
    </SafeAreaView>
    </View>
  );  
}
function Offline({navigation}){
  const [count, setCount] = useState(0);

  const Press_to_Detail = () => {
    navigation.navigate('StoryDetail')
  };
  const Press_to_read = () => {
    navigation.navigate('StoryRead')
  };
  const renderItem = ({ item }) => (
    <Off  
        story_name={item.story_name} 
        source_img={item.source_img} 
        author={item.author} 
        Press_to_Detail={Press_to_Detail}
        Press_to_read={Press_to_read}
        />
  );
  return (
    <View style={{backgroundColor: "#222348"}}>
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

export default class Storage extends Component {
    render()
    {
        return (
          
          <View style={{flex: 1}}>
              <Tab1.Navigator>
                  <Tab1.Screen name="Tủ Sách" component={TuSach} />
                  <Tab1.Screen name="Offline" component={Offline} />
              </Tab1.Navigator>
          </View>

        )
    }
}
const styles = StyleSheet.create({
  container: { 
    padding: 4, 
    backgroundColor: "#222348",
    flexDirection: 'row',
    borderBottomColor: '#FFFFFF',
    borderBottomWidth: 1,
  },
  container1: { 
    padding: 4, 
    backgroundColor: "#222348",
    borderBottomColor: '#FFFFFF',
    borderBottomWidth: 1,
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
    //flex: 0,
    marginBottom: '-5%',
    padding: 5,
  },
  imageStyle: {
    width:  90,
    height: 130,
    borderRadius: 10,
    
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
  }
});
