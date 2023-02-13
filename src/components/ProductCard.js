import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  backgroundColor: '#f9c2ff';
`

const TopWrapper = styled.View`
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
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const ProductTitle = styled.Text`
  font-weight: light;
  text-align: center;
`

const ProductDescription = styled.Text`
  font-weight: bold;
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

function ProductCard({ product, scale }) {
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
        <ProductTitle style={ { fontSize: scale * 0.07 } } numberOfLines={ 2 }>{ product.name }</ProductTitle>
        <ProductPrice style={ { fontSize: scale * 0.07 } }>{ product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") } 원</ProductPrice>
        <AddCart activeOpacity={ 0.8 } style={ { width: scale * 0.5, height: 25, borderRadius: 8 } } onPress={ () => console.log(product.id) }>
          <Text style={ { fontSize: scale * 0.07 } }>담기</Text>
        </AddCart>
        {/* <ProductDescription style={{ fontSize: scale * 0.05 }} numberOfLines={1}>{product.description}</ProductDescription> */ }
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
  text: {
    color: "#fff"
  }
});

export default ProductCard