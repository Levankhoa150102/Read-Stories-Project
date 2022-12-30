import React, {Component} from 'react'
import { View, Text, StyleSheet, TouchableOpacity,
        StatusBar, TextInput, Dimensions, Image, Button } from 'react-native'
import SelectMultiple from 'react-native-select-multiple'
import { Ionicons } from '@expo/vector-icons';



StatusBar.setHidden(true)
const {height} = Dimensions.get('window')
const State = ['Huyền huyễn', 'Kiếm hiệp', 'Lịch sử', 
                'Ngôn tình', 'Tiên hiệp', 'Dị giới', 
                'Đô thị', 'Huyền ảo', 'Trinh thám',
                ' Cổ đại', 'Hệ thống', 'Khoa huyễn', 
                'Quân sự', 'Võng du', 'Xuyên không',
                'Đam mỹ', 'Quan trường', 'Dị năng',
                'Xuyên nhanh', 'Trọng sinh', 'Linh dị',
                'Ngược', 'Sủng', 'Cung đấu', 'Nữ cường',
                'Gia đấu', 'Đông Phương', 'Bách hợp', 
                'Hài hước', 'Điền văn', 'Mạt thế', 'Truyện teen',
                'Phương Tây', 'Nữ phụ', 'Light Novel',
                'Đoản Văn', 'Khác']

export default class TheLoai extends Component{
    state = { selectedFruits: [] }
        onSelectionsChange = (selectedFruits) => {
        // selectedFruits is array of { label, value }
        this.setState({ selectedFruits })
    }
    GobacktoHomePage() {
        const {navigation} = this.props;
        navigation.goBack();
    }
    render(){
        const {container, title, wrapper, 
            row, textInput, checkbox, box, textStyle,
            status, heading, sortButton, button} = styles
        return(
            <View style={container}>
                
                {/* <Text style={heading}>Thể loại: </Text> */}
                        <SelectMultiple
                            items={State}
                            selectedItems={this.state.selectedFruits}
                            onSelectionsChange={this.onSelectionsChange}
                            rowStyle={status}
                            checkboxStyle={checkbox}
                            labelStyle={textStyle}  
                            selectedCheckboxStyle={{color: '#239B56'}}
                        />
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container: { 
        //height: height / 10, 
        padding: 15, 
        backgroundColor: "#222348",
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
        //marginTop: "5%",
        //height: height / 8, 
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
        //padding: 15, 
        backgroundColor: "#222348",
    },
    status: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 0,
        paddingTop: 1,
        //marginLeft:'-5%',
        //borderBottomWidth: 1,
        borderBottomColor: '#222348',
        backgroundColor: '#222348'
    },
    checkbox:{
        backgroundColor: '#FFFFFF',
        width: 19,
        height: 19,
        //marginRight: 5
    },
    textStyle: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#FFF",
        fontFamily: "normal",
    },
    heading: {
        color: "#BBC6CD",
        //fontWeight: "bold",
        fontFamily: "normal",
        fontSize: 17,
        paddingBottom: 15,
        //textAlign: "center",
    },
    sortButton:{
        flex: 1,
        flexDirection: 'row',
        flexWrap: "wrap",
        alignItems: 'center',
        //padding: 15, 
        backgroundColor: "#222348",
        alignSelf: "flex-start",
        paddingHorizontal: 8,
        paddingTop: '1%',
        paddingBottom: '80%',
        //borderRadius: 4,
    },
    button:{
        backgroundColor: '#1A1C6A',
        width: 100,
        height: 40,
        //marginTop: '1%',
        marginLeft: '3%',
        marginBottom: '3%',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    }
})