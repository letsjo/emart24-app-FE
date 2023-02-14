import React from 'react'
import { Text, StyleSheet, View, Alert } from 'react-native';
import styled from 'styled-components/native';
import { addCartApi } from '../apis/cart';
import { useRecoilValue } from 'recoil';
import { UserState } from '../state/UserState';

const Container = styled.View`
  backgroundColor: '#f9c2ff';
  flex: 1;
`

const TopWrapper = styled.View`
  flex: 2;
`

const Image = styled.Image`
  object-fit: cover;
`

const ProductNameWrapper = styled.View`
  position: absolute;
  padding: 3px;
  background-color: #555;
`

const ProductName = styled.Text`
  color: #fff;
  font-weight: bold;
`

const BottomWrapper = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const ProductTitle = styled.Text`
  font-weight: light;
  text-align: center;
`

const AddCart = styled.TouchableOpacity`
  background-color: #ffb71b;
  justify-content: center;
  align-items: center;
`

const ProductPrice = styled.Text`
  color: red;
  font-weight: bold;
`

function ProductCard({ navigation, product, scale }) {
  const userData = useRecoilValue(UserState)

  const onAddCart = (id) => {
    addCartApi({ productId: id, quantity: 1 })
      .then((res) => { console.log(res) })
      .catch((err) => { console.log(err) })
  }

  const successAlert = ({ msg }) =>
    Alert.alert('성공', msg, [
      { text: 'OK' },
    ]);

  const errorAlert = ({ msg }) =>
    Alert.alert('실패', msg, [
      { text: 'OK', onPress: () => navigation.navigate('Login') },
    ]);

  const handleClick = () => {
    if (userData.accessToken > 0) {
      onAddCart(product.id);
      return successAlert({ msg: '장바구니에 담겼습니다.' });
    }
    return errorAlert({ msg: '로그인이 필요합니다.' });
  }

  return (
    <Container style={ { width: scale } }>
      <TopWrapper
        style={ { width: scale, height: scale } }
      >
        <Image
          style={ { width: scale, height: scale, borderRadius: (scale * 0.05) } }
          source={
            { uri: product.thumbnail }
          } />
        {
          product.name && (
            <ProductNameWrapper style={ { top: 10, left: 10 } }>
              <ProductName style={ { fontSize: scale * 0.05 } }>
                { product.category }
              </ProductName>
            </ProductNameWrapper>)
        }
      </TopWrapper>
      <BottomWrapper>
        <View style={ styles.description }>
          <ProductTitle style={ { fontSize: scale * 0.07 } } numberOfLines={ 2 }>{ product.name }</ProductTitle>
          <ProductPrice style={ { fontSize: scale * 0.07 } }>{ product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") } 원</ProductPrice>
        </View>
        <AddCart activeOpacity={ 0.8 } style={ { width: scale * 0.5, height: 25, borderRadius: 8 } } onPress={ handleClick }>
          <Text style={ { fontSize: scale * 0.07 } }>담기</Text>
        </AddCart>
      </BottomWrapper>
    </Container >
  )
}

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    backgroundColor: "#ffb71b",
    justifyContent: "center",
    alignItems: "center"
  },
  description: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff"
  }
});

export default ProductCard