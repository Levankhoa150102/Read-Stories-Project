import React, {Component} from 'react'
import {View, Text, StyleSheet,TouchableOpacity, StatusBar,Image, Dimensions, ScrollView} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
const {height} = Dimensions.get('window')
export default class StoryRead extends Component {
    goBack() {
      const {navigation} = this.props;
      navigation.goBack();
  }
    gotoChapters(){
        const {navigation} = this.props;
        navigation.navigate('StoryChapters');
    }

    render() {
        const {container, row, Titletext, Chaptertext, scrollView, mainText} = styles
        return (
            <ScrollView style={{ flex: 1, backgroundColor: "#000000" }}>
                <View style = {container}>
                    <View style = {row}>
                        <TouchableOpacity onPress={this.goBack.bind(this)}>
                            <Ionicons
                            style={{ color: "#FFFFFF", fontSize: 30, paddingLeft: 15 }}
                            name="arrow-back-outline"
                            />
                        </TouchableOpacity>
                    </View>
                    <View style = {row}>
                        <Text style = {Titletext}>Tổng tài, Anh nhận nhầm người rồi{"\n"}
                        <Text style = {Chaptertext}>Chương 1</Text>
                        </Text>
                    </View>
                    <View style = {row}>
                        <TouchableOpacity onPress = {this.gotoChapters.bind(this)}>
                            <Ionicons
                            style={{ color: "#FFFFFF", fontSize: 30, paddingLeft: 15 }}
                            name="list-outline"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <ScrollView style = {scrollView}>
                        <Text style = {mainText}>
                            
Tại biệt thự nhà họ Thời.
“Mẹ, con sẽ không kết hôn, có chết con cũng không kết hôn, hu hu hu...”

Thời Vũ Kha nhào vào lòng mẹ khóc như mưa, khuôn mặt nhỏ nhắn xinh đẹp tràn ngập tuyệt vọng.

Cô ta có nằm mơ cũng không nghĩ đến việc mình sẽ phải hẹn hò vui vẻ với một người mù!

Tuy rằng Thịnh Hàn Ngọc khi trưởng thành vô cùng đẹp trai, thậm chí còn đẹp hơn cả minh tinh, nhưng có ích gì chứ?
Cô ta không muốn kết hôn với một người đàn ông mù, cả đời này cô sẽ biến thành trò cười của thiên hạ!
"Con gái ngoan, đừng khóc, mẹ sẽ tìm cách giúp con, mẹ sẽ không bao giờ để con gả cho người tàn tật.
Đừng khóc, con khóc làm mẹ rất đau lòng.” Giang Nhã Đan vừa dỗ dành con gái, vừa hung hăng trừng mắt với chồng đang ngồi đối diện.
Chuyện này đều do ông ấy, không xem xét rõ ràng trước khi quyết định.
Cho dù nhà họ Thịnh có quyền có thế, tài sản dư thừa nhưng Giang Nhã Đan sẽ không bao giờ chấp nhận để đứa con gái bảo bối kết hôn với một người đàn ông mù.
“Vũ Kha không thể nào kết hôn với Thịnh Hàn Ngọc được.
Vũ Thành, anh không được đẩy con gái của chúng ta vào con đường chết!” Giang Nhã Đan lau nước mắt.
Thời Vũ Thành thở dài bất đắc dĩ nói: “Em nghĩ anh bằng lòng sao? Nhưng em cũng biết hoàn cảnh của gia đình chúng ta, nợ nần bên ngoài nhiều như vậy, nếu như Vũ Kha gả đi gia đình chúng ta sẽ không phải phá sản.”
"Ông chủ nhà họ Thịnh đã hứa chỉ cần chúng ta gả con gái đi, họ liền chia cho chúng ta 10% cổ phần, cộng thêm 350 tỷ là quà đính hôn..."
Trước khi ông nói hết lời, hai mẹ con đã ngừng khóc, trong ánh mắt lộ ra một tia thèm thuồng!
Thời Vũ Kha không ngừng đung đưa cánh tay mẹ mà làm nũng: “Mẹ ơi, con muốn có 10% cổ phần của nhà họ Thịnh, hơn nữa quà đính hôn 350 tỷ cũng đủ để gia đình chúng ta trở thành nhà quyền thế bậc nhất Giang Châu...!"
Giang Nhã Đan nghĩ rằng con gái mình đã thay đổi quyết định, mặc dù cũng bị cám dỗ bởi một điều kiện thuận lợi như vậy, nhưng bà vẫn do dự khi nghĩ đến hạnh phúc cả đời của con: “Con gái ngốc, đừng đồng ý nhanh như vậy, hãy suy nghĩ kĩ càng.”
“Mẹ...”
Thời Vũ Kha ngồi thẳng người, khuôn mặt xinh đẹp thoáng qua một tia ranh mãnh: “Bố mẹ ơi, bố đã quên rằng nhà chúng ta vẫn còn một cô con gái hay sao? Mẹ có thể để Thời Du Huyên đó gả đi, chia cổ phần cho con và báo hiếu cho bố mẹ.

Hoàn hảo!"
Nhà họ Thời có hai cô con gái, cô chị Thời Vũ Kha là con ruột, cô ta trắng trẻo xinh đẹp, là mỹ nữ bậc nhất ở Giang Châu!
Cô con gái thứ hai tên Thời Du Huyên, là con gái của bạn tốt Thời Vũ Thành, bố mẹ cô bị tai nạn xe hơi qua đời ngay sau khi cô được sinh ra, vì vậy Thời Vũ Thành đã nhận cô làm con nuôi.
Cô em gái thực ra xinh đẹp hơn chị, nhưng năm mười hai tuổi không may bị ngã cầu thang khiến đầu óc trở nên không bình thường, trở thành một đứa ngốc.
Thời Vũ Thành không đồng ý: “Không được, nếu Vũ Kha không muốn kết hôn thì chúng ta từ chối, dù sao cũng không thể gả Huyên Huyên đi được.”
Giang Nhã Đan cau mày, đồng tình với ý kiến của con gái: “Vũ Kha nói đúng.

Thời Du Huyên cũng là con gái của nhà họ Thời.

Dù sao thì nhà họ Thịnh nói muốn cưới con gái chúng ta, như vậy thì gả ai cũng như nhau.”
Thời Vũ Thành vẫn phản đối: "Đây không phải là chuyện vớ vẩn hay sao, Vũ Kha đi xem mắt, sau đó lại để cho Huyên Huyên kết hôn ư?"
“Huyên Huyên bị bệnh tâm thần, Thịnh Hàn Ngọc sẽ không thể nào đồng ý kết hôn với Huyên Huyên cho dù cậu ấy bị tàn tật.


Với gia thế nhà họ Thịnh như vậy, chúng ta không thể tùy ý động vào.

Nếu không đến lúc đó cả nhà chúng ta đều phải chết."
Ông ta ban đầu không đồng ý nhưng dần dần bị vợ và con gái tẩy não.
Giang Nhã Đan nói: “Lúc trước nhà họ Thịnh đưa người đến mai mối cũng không nói rõ là con gái nào, họ chỉ nói rằng muốn xem mắt con gái nhà chúng ta.

Hơn nữa hai người đi gặp riêng trong buổi gặp mặt.

Cậu chủ Thịnh bị mù nên cậu ấy sẽ không biết người đó là Vũ Kha.”
Thời Vũ Thành: “...”
Thời Vũ Kha nói: “Đúng vậy đó bố, anh ta không biết con trông như thế nào, vì vậy để một đứa ngốc kết hôn thay con cũng không sao.

Thịnh Hàn Ngọc bị mù và Thời Du Huyên bị ngốc.


Giống như một cặp trời sinh.”
Giang Nhã Đan: “Ông xã, anh đồng ý đi.

Nhà họ Thịnh có 10% cổ phần, lại thêm 100 triệu quà đính hôn.

Với số tiền này Vũ Kha đủ để tìm được một người đàn ông xuất sắc kết hôn.

Nhà họ Thời sẽ trở nên nổi tiếng ở Giang Châu!”
Thời Du Huyên ôm con gấu nấp sau cây cột, lẳng lặng nghe bọn họ bàn cãi.
Cô cúi đầu, cho dù có người phát hiện cô đang ngồi ở đây, cũng không có ai để ý đến đôi mắt xinh đẹp của Thời Du Huyên lóe lên vẻ tinh anh, khóe miệng cong lên một đường đẹp đẽ, lộ ra tia châm biếm!
Dáng vẻ này căn bản không hề giống người ngốc nghếch.
                        </Text>
                    </ScrollView>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 30,
        marginTop: 10
      },
    Titletext: {
        flexDirection: "row",
        color: "#F6DE00",
        textAlign: 'center',
    },
    Chaptertext: {
        flexDirection: "row",
        color: "#D9D9D9",
        textAlign: 'center'
    },
    scrollView: {
        marginHorizontal: 20,
        height: height*0.8
    },
    mainText: {
        color: '#FFFFFF',
        fontSize: 17,
        lineHeight: 30,
        textAlign: 'justify',
        marginTop: 10,


    }
})