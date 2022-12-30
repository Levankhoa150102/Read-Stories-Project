import React, {Component} from 'react'
import { View, Text, StyleSheet, TouchableOpacity,
        StatusBar, TextInput, Dimensions, Image, Button } from 'react-native'
import SelectMultiple from 'react-native-select-multiple'
import { Ionicons } from '@expo/vector-icons';



StatusBar.setHidden(true)
const {height} = Dimensions.get('window')
const State = ['Tất cả', 'Đang ra', 'Đã hoàn thành']
const renderLabel = (label, style) => {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{marginLeft: 10}}>
          <Text style={style}>{label}</Text>
        </View>
      </View>
    )
}


export default class Filter extends Component {
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
            <View>
                <View style={container}>
                    <Text style={title}>Tìm kiếm</Text>
                    <View style={wrapper}>
                        <View style={row}>
                        <TextInput 
                            style={textInput} 
                            placeholder="Tìm kiếm truyện..." 
                            placeholderTextColor={'#494F86'}  
                        />
                        </View>
                    </View>
                    <View style={box}>
                        <Text style={heading}>Trạng thái: </Text>
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
                </View>
                
                <View style={container}>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('TheLoai') }}>
                    
                        <Text style={heading}>
                            Thể loại
                        </Text>
                    
                        <Text style= {textStyle}>Chọn thể loại </Text>
                    </TouchableOpacity>
                </View>
                <View style={container}>    
                    <Text style={heading}>
                        Số chương
                    </Text>
                    <View style={sortButton}>
                        <TouchableOpacity style={button}>
                            <Text style={{color: '#FFFFFF'}}>1 - 500</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={button}>
                            <Text style={{color: '#FFFFFF'}}>501 - 1000</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={button}>
                            <Text style={{color: '#FFFFFF'}}>1001 - 2000</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={button}>
                            <Text style={{color: '#FFFFFF'}}>Hơn 2000</Text>
                        </TouchableOpacity>
                    </View>
                    <Button title='Áp dụng'/>
                </View>
                
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