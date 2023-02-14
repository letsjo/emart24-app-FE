import { SafeAreaView, StyleSheet, Text, BackHandler, Alert, TouchableOpacity, View } from 'react-native'
import { useRecoilState, useSetRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import { UserState } from '../state/UserState';
import { CartState } from '../state/CartState';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ShowQRCode from '../components/ShowQRCode';
import { FontAwesome } from '@expo/vector-icons';

const MyPage = ({ navigation }) => {
  const [userData, setUserData] = useRecoilState(UserState);
  const [date, setDate] = useState('');
  const setCartState = useSetRecoilState(CartState);

  const handlePressBack = () => {
    if (navigation?.canGoBack()) {
      navigation.navigate('Home');
      return true
    }
    return false
  }

  const onLogout = () => {
    setUserData({ accessToken: '', email: '', password: '', name: '' })
    AsyncStorage.removeItem('accessToken');
    setCartState('none');
    successAlert();
  }

  const successAlert = () =>
    Alert.alert('SUCCESS', '로그아웃 되었습니다.', [
      { text: 'OK', onPress: () => navigation.navigate('Home') },
    ]);

  const errorAlert = () =>
    Alert.alert('잘못된 접근', '회원 전용 페이지 입니다.', [
      { text: 'OK', onPress: () => navigation.navigate('Home') },
    ]);

  const getCurrentDate = () => {
    const date = new Date();
    setDate(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
  }

  useEffect(() => {
    if (userData.accessToken === '') {
      AsyncStorage.removeItem('accessToken');
      setCartState('none');
      return errorAlert();
    };
  }, [])

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handlePressBack)
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handlePressBack)
    }
  }, [handlePressBack])

  return (
    <SafeAreaView style={ styles.container }>
      <View style={ styles.qrCode }>
        <Text style={ { fontSize: 25, fontWeight: 'bold' } }>체크인 QR 코드</Text>
        <ShowQRCode date={ date } />
        <TouchableOpacity
          style={ styles.qrCodeButton }
          onPress={ getCurrentDate }
        >
          <FontAwesome name="refresh" size={ 40 } color="black" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={ styles.button }
        onPress={ () => navigation.navigate('UpdatePassword') }
      >
        <Text style={ styles.text }>비밀번호 변경</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={ styles.button }
        onPress={ () => navigation.navigate('UpdateProfile', { userData }) }
      >
        <Text style={ styles.text }>개인정보 수정</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={ styles.button }
        onPress={ onLogout }
      >
        <Text style={ styles.text }>로그아웃</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    marginBottom: 70,
  },
  qrCode: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    width: 500,
    height: 350,
  },
  qrCodeButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    backgroundColor: '#EFAB23',
    borderColor: 'white',
    marginBottom: 10,
  },
  text: {
    color: 'white',
  }
})

export default MyPage