import { useRecoilState } from 'recoil';
import { UserState } from '../state/UserState';
import { TouchableOpacity, TextInput, Text, View, Alert, StyleSheet, SafeAreaView } from 'react-native';
import { signInApi } from '../apis/user';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from 'react';

function Login({ navigation }) {
  const [userData, setUserData] = useRecoilState(UserState);

  const successAlert = ({ name }) =>
    Alert.alert('로그인 완료', `${name} 님 환영합니다.`, [
      { text: 'OK', onPress: () => navigation.goBack() },
    ]);

  const errorAlert = () =>
    Alert.alert('로그인 실패', '로그인에 실패하셨습니다.', [
      { text: 'OK' },
    ]);

  const onLogin = () => {
    signInApi(userData).then((res) => {
      AsyncStorage.setItem('access_token', res.data.accessToken);
      setUserData({ ...userData, accessToken: res.data.accessToken })
      successAlert({ name: res.data.user.name });
    }).catch(() => {
      errorAlert();
    });
  }

  useEffect(() => {
    const access_token = AsyncStorage.getItem('access_token');
    console.log(access_token);
  }, [])

  return (
    <SafeAreaView style={ styles.container }>
      <TextInput
        onChangeText={ (email) => setUserData({ ...userData, email }) }
        placeholder={ 'Username' }
        style={ styles.input }
      />
      <TextInput
        onChangeText={ (password) => setUserData({ ...userData, password }) }
        placeholder={ 'Password' }
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
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