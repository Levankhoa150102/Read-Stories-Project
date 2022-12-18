import React, {Component} from 'react'
import {View, Text, StyleSheet,TouchableOpacity, StatusBar,Image, Dimensions} from 'react-native'
import Swiper from 'react-native-swiper'

const {width, height } = Dimensions.get('window');
import img1 from '../../assets/Banner/banner1.jpg'
import img2 from '../../assets/Banner/banner2.jpg'
import img3 from '../../assets/Banner/banner3.jpg'
import img4 from '../../assets/Banner/banner4.jpg'

import StoryDetail from '../StoryDetail/StoryDetail';
export default class NewStory extends Component {

  render() {
    const {wrapper, title, imageStyle} = styles;
    return(
      <View style={wrapper}>
        <View style={{ flex: 1, flexDirection:'row', justifyContent: 'space-between' }}>
          <Text style={title}>NEW STORY</Text>
          <View>
          <Text style={{color: '#FFF', paddingRight: 20, paddingTop: 20}} >Xem tất cả</Text>
          </View>
        </View>

        
      <View style ={{flex: 4, justifyContent:'center',  paddingLeft: 18}}>
        <Swiper 
        loop={true} 
        autoplay={{delay: 300,disableOnInteraction: false}}
         paginationStyle={{ bottom: -15 }}
         dotColor="#FFF">
          <Image source={img1} style={imageStyle} />
          <Image source={img2} style={imageStyle} />
          <Image source={img3} style={imageStyle} />
          <Image source={img4} style={imageStyle} />
        </Swiper>
      </View>
      </View>
    )
  }
}
//1:13:32: Cài Swiper
const styles = StyleSheet.create({
  wrapper: {height: height*0.3, 
  backgroundColor: '#162639',
   margin: 10,
   borderRadius: 30,
   shadowColor: '#656BA4',
   shadowOffset: {width:3, height:5},
   shadowOpacity: 0.3},

   title: {
     color: '#FFF',
     fontFamily: 'Avenir',
     fontSize: 20,
     padding: 15,
   },

   imageStyle: {
     width: '95%',
     height: '95%',
     borderRadius: 30,
   }
})