import { useState } from 'react'
import { View, StyleSheet, Text, TextInput, Alert, TouchableOpacity } from 'react-native'
import { editProfileApi } from '../apis/user';
import { useRecoilState } from 'recoil';
import { UserState } from '../state/UserState';

const UpdateProfile = ({ navigation }) => {
  const [userData, setUserData] = useRecoilState(UserState);
  const [updateData, setUpdateData] = useState({
    email: userData.email,
    name: userData.name,
  });

  const successAlert = () =>
    Alert.alert('성공', '프로필 정보가 수정되었습니다.', [
      { text: 'OK', onPress: () => navigation.goBack() },
    ]);

  const errorAlert = ({ meg }) => {
    return Alert.alert('실패', meg, [
      { text: 'OK' },
    ]);
  }

  const onUpdateProfile = () => {
    return editProfileApi({ id: userData.userId, email: updateData.email, name: updateData.name })
      .then(() => {
        setUserData({ ...userData, email: updateData.email, name: updateData.name })
        successAlert();
      }).catch(() => {
        errorAlert({ meg: '입력하신 정보가 올바르지 않습니다.' });
      });

  }

  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>프로필정보 수정</Text>
      <TextInput
        onChangeText={ (email) => setUpdateData({ ...updateData, email }) }
        placeholder={ '이메일' }
        defaultValue={ updateData?.email }
        style={ styles.input }
      />
      <TextInput
        onChangeText={ (name) => setUpdateData({ ...updateData, name }) }
        placeholder={ '이름' }
        defaultValue={ updateData?.name }
        style={ styles.input }
      />
      <TouchableOpacity
        title={ '수정하기' }
        style={ styles.button }
        onPress={ onUpdateProfile }
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

export default UpdateProfile