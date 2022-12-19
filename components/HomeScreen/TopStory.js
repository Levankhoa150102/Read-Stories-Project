import React, {Component} from 'react'
import {View, Text, StyleSheet,TouchableOpacity, StatusBar,Image, Dimensions, ScrollView} from 'react-native'
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
    const {wrapper, title, imageStyle, slideImage, image, storyName, storyTop} = styles;
    return (
      <View style={wrapper}>
        <View style={{ height: height * 0.05 }}>
          <Text style={title}>TOP 10 STORIES</Text>
        </View>
        <ScrollView>
          <View style={slideImage}>
            <TouchableOpacity style={image}>
              <Image source={img1} style={imageStyle} />
              <View>
                <Text style={storyTop}>TOP 1</Text>
                <Text style={storyName}>Tổng tài, Anh nhận nhầm người rồi</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={image}>
              <Image source={img2} style={imageStyle} />
              <View>
                <Text style={storyTop}>TOP 2</Text>
                <Text style={storyName}>Sau này của chúng ta</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={image}>
              <Image source={img3} style={imageStyle} />
              <View>
                <Text style={storyTop}>TOP 3</Text>
                <Text style={storyName}>Mê vợ, không lối về</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={image}>
              <Image source={img4} style={imageStyle} />
              <View>
                <Text style={storyTop}>TOP 4</Text>
                <Text style={storyName}>Cô dâu bị đánh tráo của tổng tài</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={image}>
              <Image source={img5} style={imageStyle} />
              <View>
                <Text style={storyTop}>TOP 5</Text>
                <Text style={storyName}>Hôm nay thích hợp để yêu hơn</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={image}>
              <Image source={img6} style={imageStyle} />
              <View>
                <Text style={storyTop}>TOP 6</Text>
                <Text style={storyName}>Làm vợ thầy em nhé!</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={image}>
              <Image source={img7} style={imageStyle} />
              <View>
                <Text style={storyTop}>TOP 7</Text>
                <Text style={storyName}>Đại ca học đường</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={image}>
              <Image source={img8} style={imageStyle} />
              <View>
                <Text style={storyTop}>TOP 8</Text>
                <Text style={storyName}>Chị đại học đường</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={image}>
              <Image source={img9} style={imageStyle} />
              <View>
                <Text style={storyTop}>TOP 9</Text>
                <Text style={storyName}>Mê muội vì em</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={image}>
              <Image source={img10} style={imageStyle} />
              <View>
                <Text style={storyTop}>TOP 10</Text>
                <Text style={storyName}>Tình yêu học đường 2015</Text>
              </View>
            </TouchableOpacity>

          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {height: height*0.5, 
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
     padding: ,
   },

  slideImage:{
    //padding: 15,
   flexDirection: 'column',
  },

  image:{
    flexDirection: 'row',
    padding: 10,
  },

   imageStyle: {
     width:100,
     height: 150,
     borderRadius: 10,
   },

  storyName:{
    paddingLeft: 10,
    fontFamily: 'serif',
    color: '#FFFFFF',
    fontWeight: '500'
  },
  storyTop:{
  paddingLeft: 10,
  fontSize: 25,
  fontWeight: '500',
  fontFamily: 'serif',
  color: '#F6DE00'
  }
})