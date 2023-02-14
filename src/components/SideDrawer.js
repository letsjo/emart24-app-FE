import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

class SideDrawer extends Component {

  navigateToScreen = (route) => () => {
    this.props.navigation.dispatch(
      CommonActions.navigate({
        name: route,
        params: {}
      })
    )
  }

  render() {
    return (
      <View style={ styles.container }>
        <ScrollView>
          <View>
            <View style={ styles.imageContainer }>
              <Image
                source={ require('../../assets/menuLogo.jpg') }
                style={ { width: 250, height: 80 } }
              />
            </View>
            <Text style={ styles.sectionHeading }>이마트 소개</Text>
            <View style={ styles.addSectionStyle }>
              <TouchableOpacity onPress={ this.navigateToScreen('Home') } style={ styles.navItemStyle }><Text>홈</Text></TouchableOpacity>
              <TouchableOpacity onPress={ this.navigateToScreen('Event') } style={ styles.navItemStyle }><Text>이벤트</Text></TouchableOpacity>
              <TouchableOpacity onPress={ () => alert('매장찾기') } style={ styles.navItemStyle }><Text>매장찾기</Text></TouchableOpacity>
              <TouchableOpacity onPress={ () => alert('재고조회') } style={ styles.navItemStyle }><Text>재고조회</Text></TouchableOpacity>
            </View>
            <Text style={ styles.sectionHeading }>상품별 카테고리</Text>
            <View style={ styles.addSectionStyle }>
              <TouchableOpacity onPress={ () => alert('스낵류') } style={ styles.navItemStyle }><Text>스낵류</Text></TouchableOpacity>
              <TouchableOpacity onPress={ () => alert('라면류') } style={ styles.navItemStyle }><Text>라면류</Text></TouchableOpacity>
              <TouchableOpacity onPress={ () => alert('음료류') } style={ styles.navItemStyle }><Text>음료류</Text></TouchableOpacity>
              <TouchableOpacity onPress={ () => alert('주먹밥류') } style={ styles.navItemStyle }><Text>주먹밥류</Text></TouchableOpacity>
              <TouchableOpacity onPress={ () => alert('도시락류') } style={ styles.navItemStyle }><Text>도시락류</Text></TouchableOpacity>
              <TouchableOpacity onPress={ () => alert('샌드위치/버거') } style={ styles.navItemStyle }><Text>샌드위치/버거</Text></TouchableOpacity>
              <TouchableOpacity onPress={ () => alert('빵/디저트') } style={ styles.navItemStyle }><Text>빵/디저트</Text></TouchableOpacity>
              <TouchableOpacity onPress={ () => alert('커피') } style={ styles.navItemStyle }><Text>커피</Text></TouchableOpacity>
              <TouchableOpacity onPress={ () => alert('커피') } style={ styles.navItemStyle }><Text>커피</Text></TouchableOpacity>
              <TouchableOpacity onPress={ () => alert('커피') } style={ styles.navItemStyle }><Text>커피</Text></TouchableOpacity>
              <TouchableOpacity onPress={ () => alert('커피') } style={ styles.navItemStyle }><Text>커피</Text></TouchableOpacity>
              <TouchableOpacity onPress={ () => alert('커피') } style={ styles.navItemStyle }><Text>커피</Text></TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <View style={ styles.navBottomFooter }>
          <TouchableOpacity onPress={ () => alert('로그아웃하기') } style={ styles.navBottomItemStyle }>
            <MaterialCommunityIcons name="logout" size={ 24 } color="black" />
            <Text>로그아웃</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    backgroundColor: '#56555C',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10
  },
  sectionHeading: {
    color: '#fff',
    backgroundColor: '#EFAB23',
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontWeight: 'bold'
  },
  addSectionStyle: {
    backgroundColor: '#EFAB23'
  },
  navItemStyle: {
    backgroundColor: '#fff',
    padding: 10,
    color: '#56555C',
    borderBottomColor: '#EFAB23',
    borderBottomWidth: 0.5,
  },
  navBottomFooter: {
    backgroundColor: '#56555C',
    paddingBottom: 50,
    borderTopWidth: 1,
    borderTopColor: '#56555C',
  },
  navBottomItemStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    color: '#56555C',
    borderTopColor: '#56555C',
    borderTopWidth: 0.5,
  },
})

export default SideDrawer;