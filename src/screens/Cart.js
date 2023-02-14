import React, { useCallback, useEffect, useState } from 'react'
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native'
import CartCard from '../components/CartCard'
import { deleteCartApi, getCartApi } from '../apis/cart'
import { useRecoilValue } from 'recoil'
import { UserState } from '../state/UserState'

const Cart = ({ navigation }) => {
  const userData = useRecoilValue(UserState);
  const [cartList, setCartList] = useState([]);

  const onGetCart = () => {
    getCartApi({ userId: userData.userId })
      .then((res) => {
        setCartList(res.data);
      })
      .catch((err) => { console.log(err) })
  }

  const deleteCart = (id) => {
    deleteCartApi({ CartId: id })
      .then(() => {
        successAlert({ msg: '장바구니에서 삭제되었습니다.' });
        getCartApi({ userId: userData.userId })
          .then((res) => {
            setCartList(res.data);
          })
          .catch((err) => { console.log(err) })
      }).catch((err) => { console.log(err) })
  }

  const successAlert = ({ msg }) =>
    Alert.alert('성공', msg, [
      { text: 'OK', onPress: () => navigation.navigate('Home') },
    ]);

  useEffect(() => {
    onGetCart();
  }, [])

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  })

  return (
    <ScrollView style={ styles.container }>
      <View>
        <Text>장바구니</Text>
      </View>
      {
        cartList && cartList.map((cartData, index) => {
          return (
            <CartCard
              key={ index }
              cartData={ cartData }
              deleteCart={ deleteCart }
            />
          )
        })
      }
    </ScrollView>
  )
}

export default Cart