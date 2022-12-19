import React, {Component} from 'react'
import {View, Text, StyleSheet,TouchableOpacity, StatusBar,Image, Dimensions} from 'react-native'
import Swiper from 'react-native-swiper'

import img1 from '../../assets/Image_Story/7.jpg'
import img2 from '../../assets/Image_Story/6.jpg'
import img3 from '../../assets/Image_Story/5.jpg'
import img4 from '../../assets/Image_Story/2.jpg'
import img5 from '../../assets/Image_Story/3.jpg'
import img6 from '../../assets/Image_Story/4.jpg'
const {width, height } = Dimensions.get('window');
export default class Recommend extends Component {
  render(){
    const {wrapper, title, imageStyle, slideImage} = styles;
    return(
      <View style={wrapper}>
        <View style={{ flex: 1, flexDirection:'row', justifyContent: 'space-between' }}>
          <Text style={title}>RECOMMEND</Text>

          <View>
          <Text style={{color: '#FFF', paddingRight: 20, paddingTop: 20}}>Xem tất cả</Text>
          </View>
          
        </View>
        <View style={{flex:4}}>
        <Swiper paginationStyle={{ bottom: -15 }} dotColor="#FFF">
          <View style={slideImage}>
          <Image source={img1} style={imageStyle} />
          <Image source={img2} style={imageStyle} />
          <Image source={img3} style={imageStyle} />
          </View>

          <View style={slideImage}>
          <Image source={img4} style={imageStyle} />
          <Image source={img5} style={imageStyle} />
          <Image source={img6} style={imageStyle} />
          </View>

        </Swiper>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  wrapper: {height: height*0.25, 
  backgroundColor: '#162639',
   margin: 10,
   borderRadius: 30,
   shadowColor: '#656BA4',
   shadowOffset: {width:3, height:5},
   shadowOpacity: 0.3},

   title: {
     color: '#FFF',
     fontFamily: 'serif',
     fontSize: 20,
     padding: 10,
   },

  slideImage:{
   flexDirection: 'row',
   padding: 10, 
   justifyContent: 'space-between'
  },

   imageStyle: {
     width:100,
     height: 150,
     borderRadius: 10,
     

   }
})