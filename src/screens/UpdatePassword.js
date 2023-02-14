import React, { useState } from 'react'
import { View, StyleSheet, Text, TextInput, Alert, TouchableOpacity } from 'react-native'
import { editPasswordApi } from '../apis/user';
import { useRecoilValue } from 'recoil';
import { UserState } from '../state/UserState';

const UpdatePassword = ({ navigation }) => {
  const userData = useRecoilValue(UserState);
  const [updateData, setUpdateData] = useState({
    password: '',
    newPassword: '',
    newPasswordCheck: '',
  });

  const successAlert = () =>
    Alert.alert('성공', '비밀번호가 수정되었습니다.', [
      { text: 'OK', onPress: () => navigation.goBack() },
    ]);

  const errorAlert = ({ meg }) => {
    return Alert.alert('실패', meg, [
      { text: 'OK' },
    ]);
  }

  const onUpdatePassword = () => {
    if (updateData.newPassword === updateData.newPasswordCheck && userData.password === updateData.password) {
      return editPasswordApi({ id: userData.userId, newPassword: updateData.newPassword })
        .then(() => {
          successAlert();
        }).catch(() => {
          errorAlert({ meg: '입력하신 정보가 올바르지 않습니다.' });
        });
    }
    return errorAlert({ meg: '비밀번호가 일치하지 않습니다.' });
  }

  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>비밀번호 변경</Text>
      <TextInput
        onChangeText={ (password) => setUpdateData({ ...updateData, password }) }
        placeholder={ '현재 비밀번호' }
        secureTextEntry={ true }
        style={ styles.input }
      />
      <TextInput
        onChangeText={ (newPassword) => setUpdateData({ ...updateData, newPassword }) }
        placeholder={ '새 비밀번호' }
        secureTextEntry={ true }
        style={ styles.input }
      />
      <TextInput
        onChangeText={ (newPasswordCheck) => setUpdateData({ ...updateData, newPasswordCheck }) }
        placeholder={ '새 비밀번호 재 입력' }
        secureTextEntry={ true }
        style={ styles.input } />
      <TouchableOpacity
        title={ '수정하기' }
        style={ styles.button }
        onPress={ onUpdatePassword }
      >
        <Text>수정하기</Text>
      </TouchableOpacity>
      <TouchableOpacity
        title={ '뒤로가기' }
        style={ styles.button }
        onPress={ () => navigation.goBack() }
      >
        <Text>뒤로가기</Text>
      </TouchableOpacity>
    </View>
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
})

export default UpdatePassword