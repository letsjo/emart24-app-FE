import { useState } from 'react';
import { TouchableOpacity, TextInput, Text, Alert, StyleSheet, SafeAreaView } from 'react-native';
import { signUpApi } from '../apis/user';

function Signup({ navigation }) {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    passwordCheck: '',
  });

  const successAlert = () =>
    Alert.alert('회원가입 완료', '로그인 페이지로 돌아갑니다.', [
      { text: 'OK', onPress: () => navigation.goBack() },
    ]);

  const errorAlert = ({ meg }) => {
    return Alert.alert('회원가입 실패', meg, [
      { text: 'OK' },
    ]);
  }

  const onSignup = () => {
    if (userData.password === userData.passwordCheck) {
      return signUpApi(userData)
        .then(() => {
          successAlert();
        }).catch(() => {
          errorAlert({ meg: '이미 존재하는 이메일이거나, 입력하신 정보가 올바르지 않습니다.' });
        });
    }
    return errorAlert({ meg: '비밀번호가 일치하지 않습니다.' });
  }

  return (
    <SafeAreaView style={ styles.container }>
      <Text style={ styles.title }>회원가입</Text>
      <TextInput
        onChangeText={ (name) => setUserData({ ...userData, name }) }
        placeholder={ '성함' }
        style={ styles.input }
      />
      <TextInput
        onChangeText={ (email) => setUserData({ ...userData, email }) }
        placeholder={ '이메일' }
        style={ styles.input }
      />
      <TextInput
        onChangeText={ (password) => setUserData({ ...userData, password }) }
        placeholder={ '비밀번호' }
        secureTextEntry={ true }
        autoComplete={ 'off' }
        style={ styles.input }
      />
      <TextInput
        onChangeText={ (passwordCheck) => setUserData({ ...userData, passwordCheck }) }
        placeholder={ '비밀번호 확인' }
        secureTextEntry={ true }
        autoComplete={ 'off' }
        style={ styles.input }
      />

      <TouchableOpacity
        title={ '가입하기' }
        style={ styles.button }
        onPress={ onSignup }
      >
        <Text>가입하기</Text>
      </TouchableOpacity>

      <TouchableOpacity
        title={ '뒤로가기' }
        style={ styles.button }
        onPress={ () => navigation.goBack() }
      >
        <Text>뒤로가기</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
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

export default Signup