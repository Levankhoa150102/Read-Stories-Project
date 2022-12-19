import React, {Component} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput, Dimensions, Image, ScrollView, Button } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import Header from '../HEADERR'
const {height} = Dimensions.get('window')
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
export default class StoryDetail extends Component {
  goBack() {
    const {navigation} = this.props;
    navigation.goBack();
}
  render() {
    const {SInfo, row, container, imageStyle,storyName,Kindtxt, storyNameside, BtnKind, ReadNow, wrapper, intro} = styles;
    return (
      <ScrollView style={{ flex: 1, backgroundColor: "#222348" }}>
        <View style={row}>
          <TouchableOpacity onPress={this.goBack.bind(this)}>
            <Ionicons
              style={{ color: "#FFFFFF", fontSize: 30, paddingLeft: 15 }}
              name="arrow-back-outline"
            />
          </TouchableOpacity>
        </View>
        <View style={SInfo}>
          <Image source={img1} style={imageStyle}></Image>
          <View style={container}>
            <Text style={storyName}>Tổng tài, Anh nhận nhầm người rồi</Text>
            <View
              style={{
                marginLeft: 10,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity style={BtnKind}>
                <Text style={Kindtxt}>Ngôn tình</Text>
              </TouchableOpacity>

              <TouchableOpacity style={BtnKind}>
                <Text style={Kindtxt}>Hiện Đại</Text>
              </TouchableOpacity>

              <TouchableOpacity style={BtnKind}>
                <Text style={Kindtxt}>Tình Cảm</Text>
              </TouchableOpacity>
            </View>
            <Text style={storyNameside}>Tình trạng: Đã xong</Text>

            <View
              style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
              <TouchableOpacity style={ReadNow}>
                <Text style={{ color: "#fff" }}>Đọc Ngay</Text>
                <Ionicons
                  name="chevron-forward-outline"
                  style={{ color: "#FFFFFF" }}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <Ionicons
                  style={{ color: "#FFFFFF", fontSize: 30, paddingLeft: 15 }}
                  name="bookmark-outline"
                />
              </TouchableOpacity>
            </View>

          </View>
        </View>
        <ScrollView style = { wrapper}>
          <Text style={{color: '#FFF', fontSize: 25, margin: 10, marginBottom: 0, color: 'yellow'}}>Giới thiệu</Text>
          <Text style={intro}>
          Văn án
Tạ Tiểu Ngọc là cháu gái trưởng thôn, dáng vẻ xinh đẹp, tính cách tốt bụng, đôi mắt long lanh giống như biết nói chuyện.
Tạ Tiểu Ngọc thích một thanh niên trí thức xuống quê, lấy phần lương thực không nhiều nấu thành cơm, dùng lá sen gói kỹ len lét nhét vào túi của Nghiêm Dặc.
Chăm sóc người nhà của anh, yêu quý em gái nhỏ của anh.
Nhưng Tạ Tiểu Ngọc không biết Nghiêm Dặc có thích cô hay không...
Nghiêm gia bình phản, hỏi Tạ Tiểu Ngọc muốn điều gì?
Tạ Tiểu Ngọc nhìn thấy tình huống ở thế giới song song, một người đầy ân huệ, cô gả cho Nghiêm Dặc, hai người sống một cuộc đời đầy oán hận.
Tạ Tiểu Ngọc thấy trước tình huống, liền đổi câu nói muốn làm vợ của Nghiêm Dặc, kịp thời đổi thành: Cháu muốn làm em gái Nghiêm Dặc.
Nghiêm gia sau khi đến Bắc Kinh, Tạ Tiểu Ngọc có công việc, vui vẻ kiếm tiền, phiền não duy nhất chính là Nghiêm Dặc, không có gì lại chạy đến bên cạnh cô, còn không có nói có thích cô hay không.
Tạ Tiểu Ngọc hận nên thề, nhất định phải tìm một người đàn ông tốt gấp một trăm lần Nghiêm Dặc.
Có người giới thiệu đối tượng cho Tạ Tiểu Ngọc, lúc coi mắt Nghiêm Dặc cũng ở đây.
Tạ Tiểu Ngọc giới thiệu Nghiêm Dặc với người đàn ông đối diện: "Đây là anh tôi..."Nghiêm Dặc lạnh lùng cười một tiếng: "Thường những người đàn ông trả lời lại, đều bị tôi chặt đứt chân, lại thích đi chợ coi mắt, chê cười."

          </Text>
        </ScrollView>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  SInfo: {
    flexDirection: 'row',
    padding: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 30,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  imageStyle: {
    width: 115,
    height: 165,
    borderRadius: 10,
    
  },
  storyName:{
    paddingLeft: 10,
    fontSize: 20 ,
    //fontFamily: 'Avenir',
    color: 'yellow',
    fontWeight: '500'
  },

  storyNameside:{
    paddingLeft: 10,
    fontSize: 15 ,
    color: '#FFF',
    fontWeight: '500'
  },
  BtnKind:{
    height: 30,
    width: 72,
    paddingLeft: 10,
    borderRadius: 10,
    backgroundColor: '#656BA4',
    justifyContent: 'center',
  },
  Kindtxt:{
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
  },
  ReadNow:{
    height: 40,
    width: 150,
    borderRadius: 10,
    backgroundColor: '#656BA4',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  wrapper:{
    height: 250,
    borderRadius: 10,
    backgroundColor: '#162639',
    margin: 10,
    borderRadius: 10,
    shadowColor: "#656BA4",
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.3,
  },
  intro:{
    color: '#FFF',
    margin: 10,
    fontSize: 17,
  }
  
})