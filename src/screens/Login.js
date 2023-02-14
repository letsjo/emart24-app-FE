import { useRecoilState, useSetRecoilState } from 'recoil';
import { UserState } from '../state/UserState';
import { CartState } from '../state/CartState';
import { TouchableOpacity, TextInput, Text, Alert, StyleSheet, SafeAreaView, BackHandler, Image } from 'react-native';
import { signInApi } from '../apis/user';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Login({ navigation }) {
  const [userData, setUserData] = useRecoilState(UserState);
  const setCartState = useSetRecoilState(CartState);

  const successAlert = ({ name }) =>
    Alert.alert('로그인 완료', `${name} 님 환영합니다.`, [
      { text: 'OK', onPress: () => navigation.navigate('Home') },
    ]);

  const errorAlert = () =>
    Alert.alert('로그인 실패', '로그인에 실패하셨습니다.', [
      { text: 'OK' },
    ]);

  const onLogin = () => {
    signInApi(userData).then((res) => {
      setCartState('flex');
      AsyncStorage.setItem(
        'accessToken',
        JSON.stringify({
          userId: res.data.user.id,
          accessToken: res.data.accessToken,
        })
      );
      setUserData({ ...userData, name: res.data.user.name, userId: res.data.user.id, accessToken: res.data.accessToken })
      successAlert({ name: res.data.user.name });
    }).catch(() => {
      errorAlert();
    });
  }

  const handlePressBack = () => {
    if (navigation?.canGoBack()) {
      navigation.navigate('Home');
      return true
    }
    return false
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handlePressBack)
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handlePressBack)
    }
  }, [handlePressBack])

  return (
    <SafeAreaView style={ styles.container }>
      <Image style={ styles.image } source={ require('../../assets/logo.png') } />
      <TextInput
        onChangeText={ (email) => setUserData({ ...userData, email }) }
        placeholder={ '이메일 또는 아이디' }
        style={ styles.input }
      />
      <TextInput
        onChangeText={ (password) => setUserData({ ...userData, password }) }
        placeholder={ '비밀번호' }
        secureTextEntry={ true }
        autoComplete={ 'off' }
        style={ styles.input }
      />
      <TouchableOpacity
        title={ '로그인' }
        style={ styles.button }
        onPress={ onLogin }
      >
        <Text>로그인</Text>
      </TouchableOpacity>

      <TouchableOpacity
        title={ '회원가입' }
        style={ styles.button }
        onPress={ () => navigation.navigate('Signup') }
      >
        <Text>회원가입</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  image: {
    width: 170,
    height: 30,
    marginBottom: 50,
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: '#64666A',
    marginBottom: 10,
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
});

export default Login