import React, {Component} from 'react'
import {View, Text, StyleSheet,TouchableOpacity, StatusBar,Image, Dimensions} from 'react-native'
import Swiper from 'react-native-swiper'

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
const {width, height } = Dimensions.get('window');
export default class Recommend extends Component {
  render() {
    const {wrapper, title, imageStyle, slideImage, storyName, storyTop} = styles;
    return(
      <View style={wrapper}>
        <View style={{ flex: 1 }}>
          <Text style={title}>TOP 10 STORIES</Text>
        </View>
        <View style={{ flex: 4 }}>
          <Swiper paginationStyle={{ bottom: -15 }}>
            <View style={slideImage}>
              <View>
                <Image source={img1} style={imageStyle} />
                <Text style={storyTop}>Top 1</Text>
                <Text style={storyName}>Name</Text>
              </View>
              <View>
                <Image source={img2} style={imageStyle} />
                <Text style={storyTop}>Top 2</Text>
                <Text style={storyName}>Name</Text>
              </View>
              <View>
                <Image source={img3} style={imageStyle} />
                <Text style={storyTop}>Top 3</Text>
                <Text style={storyName}>Name</Text>
              </View>
            </View>

            <View style={slideImage}>
              <View>
                <Image source={img4} style={imageStyle} />
                <Text style={storyTop}>Top 4</Text>
                <Text style={storyName}>Name</Text>
              </View>
              <View>
                <Image source={img5} style={imageStyle} />
                <Text style={storyTop}>Top 5</Text>
                <Text style={storyName}>Name</Text>
              </View>
              <View>
                <Image source={img6} style={imageStyle} />
                <Text style={storyTop}>Top 6</Text>
                <Text style={storyName}>Name</Text>
              </View>

            </View>
            <View style={slideImage}>
              <View>
                <Image source={img7} style={imageStyle} />
                <Text style={storyTop}>Top 7</Text>
                <Text style={storyName}>Name</Text>
              </View>
              <View>
                <Image source={img8} style={imageStyle} />
                <Text style={storyTop}>Top 8</Text>
                <Text style={storyName}>Name</Text>
              </View>
              <View>
                <Image source={img9} style={imageStyle} />
                <Text style={storyTop}>Top 9</Text>
                <Text style={storyName}>Name</Text>
              </View>
            </View>

            <View style={slideImage}>
              <View>
                <Image source={img10} style={imageStyle} />
                <Text style={storyTop}>Top 10</Text>
                <Text style={storyName}>Name</Text>
              </View>
  
            </View>
          </Swiper>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  wrapper: {height: height*0.32, 
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

  slideImage:{
   flexDirection: 'row',
   padding: 10, 
   justifyContent: 'space-between'
  },

   imageStyle: {
     width:100,
     height: 150,
     borderRadius: 10,
   },

  storyName:{
    paddingLeft: 10,
    fontFamily: 'Avenir',
    color: '#FFFFFF',
    fontWeight: '500'
  },
  storyTop:{
  paddingLeft: 10,
  fontSize: 20,
  fontWeight: '500',
  fontFamily: 'Avenir',
  color: '#F6DE00'
  }
})