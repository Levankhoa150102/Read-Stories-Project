import React, {Component} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput, Dimensions, Image, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import Header from '../HEADERR'

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
const {height} = Dimensions.get('window')
export default class StoryDetail extends Component {
  goBack() {
    const {navigation} = this.props;
    navigation.goBack();
}
    gotoDetail(){
        const {navigation} = this.props;
        navigation.navigate('StoryDetail')
    }
  render() {
    const {container, row, title, header, textInput, image, imageStyle, storyName,storyNameside, storyTop} = styles;
    return (
      <View style={{ flex: 1, backgroundColor: "#222348" }}>
        <View style={container}>
          <View style={row}>
            <TouchableOpacity  onPress={this.goBack.bind(this)}>
              <Ionicons
                style={{ color: "#FFFFFF", fontSize: 30, paddingLeft: 15 }}
                name="arrow-back-outline"
              />
            </TouchableOpacity>
            <Text style={title}>NEW STORY</Text>
            <TouchableOpacity>
              <Ionicons
                style={{ color: "#FFFFFF", fontSize: 30, paddingRight: 20 }}
                name="funnel-outline"
              />
            </TouchableOpacity>
          </View>
        </View>
        
        <View>
        <TextInput style={textInput} placeholder="Tìm kiếm truyện..." placeholderTextColor={'#494F86'}  />
        </View>

        <ScrollView  style ={header}>
        <TouchableOpacity style={image} onPress={this.gotoDetail.bind(this)}>
              <Image source={img1} style={imageStyle} />
              <View>
                <Text style={storyName}>Tổng tài, Anh nhận nhầm người rồi</Text>
                <Text style={storyNameside}>Thể loại: Ngôn tình</Text>
                <Text style={storyNameside}>Tác giả: LVK</Text>
              </View>
        </TouchableOpacity>

            <TouchableOpacity style={image}>
              <Image source={img2} style={imageStyle} />
              <View>
                <Text style={storyName}>Sau này của chúng ta</Text>
                <Text style={storyNameside}>Thể loại: Ngôn tình</Text>
                <Text style={storyNameside}>Tác giả: LVK</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={image}>
              <Image source={img3} style={imageStyle} />
              <View>
                <Text style={storyName}>Mê vợ, không lối về</Text>
                <Text style={storyNameside}>Thể loại: Ngôn tình</Text>
                <Text style={storyNameside}>Tác giả: LVK</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={image}>
              <Image source={img4} style={imageStyle} />
              <View>
                <Text style={storyName}>Cô dâu bị đánh tráo của tổng tài</Text>
                <Text style={storyNameside}>Thể loại: Ngôn tình</Text>
                <Text style={storyNameside}>Tác giả: LVK</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={image}>
              <Image source={img5} style={imageStyle} />
              <View>
                <Text style={storyName}>Hôm nay thích hợp để yêu hơn</Text>
                <Text style={storyNameside}>Thể loại: Ngôn tình</Text>
                <Text style={storyNameside}>Tác giả: LVK</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={image}>
              <Image source={img6} style={imageStyle} />
              <View>
                <Text style={storyName}>Làm vợ thầy em nhé!</Text>
                <Text style={storyNameside}>Thể loại: Ngôn tình</Text>
                <Text style={storyNameside}>Tác giả: LVK</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={image}>
              <Image source={img7} style={imageStyle} />
              <View>
                <Text style={storyName}>Đại ca học đường</Text>
                <Text style={storyNameside}>Thể loại: Ngôn tình</Text>
                <Text style={storyNameside}>Tác giả: LVK</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={image}>
              <Image source={img8} style={imageStyle} />
              <View>

                <Text style={storyName}>Chị đại học đường</Text>
                <Text style={storyNameside}>Thể loại: Ngôn tình</Text>
                <Text style={storyNameside}>Tác giả: LVK</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={image}>
              <Image source={img9} style={imageStyle} />
              <View>
                <Text style={storyName}>Mê muội vì em</Text>
                <Text style={storyNameside}>Thể loại: Ngôn tình</Text>
                <Text style={storyNameside}>Tác giả: LVK</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={image}>
              <Image source={img10} style={imageStyle} />
              <View>
                <Text style={storyName}>Tình yêu học đường 2015</Text>
                <Text style={storyNameside}>Thể loại: Ngôn tình</Text>
                <Text style={storyNameside}>Tác giả: LVK</Text>
              </View>
            </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: { height: height / 10, padding: 10, backgroundColor: "#222348" },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 30,
  },
  title: {
    color: "#FFF",
    fontWeight: "500",
    fontFamily: "Avenir",
    fontSize: 25,
    textAlign: "center",
  },
  header: {
    height: 500,
    backgroundColor: "#162639",
    margin: 10,
    borderRadius: 10,
    shadowColor: "#656BA4",
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.3,
  },
  textInput:{
    height: height / 23,
    width: '90%',
    backgroundColor:'#FFFFFF',
    borderRadius: 20,
    paddingLeft: 10,
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  image:{
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },

   imageStyle: {
     width:100,
     height: 150,
     borderRadius: 10,
     
   },

  storyName:{
    paddingLeft: 10,
    fontSize: 15 ,
    //fontFamily: 'Avenir',
    color: 'yellow',
    fontWeight: '500'
  },
  storyNameside:{
    paddingLeft: 10,
    fontSize: 15 ,
    color: 'grey',
    fontWeight: '500'
  },
  //textInput: {height: height / 23, width: '80%', backgroundColor:'#FFFFFF', borderRadius: 20, paddingLeft: 10}
});