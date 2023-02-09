import React from 'react'
import styled, { css } from 'styled-components/native';

const Container = styled.View`
  ${({ width }) => {
    return css`
      width: ${width};
    `}
  }
  backgroundColor: '#f9c2ff';
`

const TopWrapper = styled.View`
  ${({ width }) => {
    return css`
      width: ${width};
      height: ${width};
    `}
  }
`

const Image = styled.Image`
  ${({ width }) => {
    return css`
      width: ${width};
      height: ${width};
      border-radius: ${width * 0.05}
    `}
  }
  object-fit: cover;
`

const ProductNameWrapper = styled.View`
  position: absolute;
  top: 10;
  left: 10;
  padding: 3px;
  background-color: #555;
`

const ProductName = styled.Text`
  ${({ width }) => {
    return css`
      font-size: ${width * 0.05};
    `}
  }
  color: #fff;
  font-weight: bold;
`

const BottomWrapper = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

const ProductTitle = styled.Text`
  ${({ width }) => {
    return css`
      font-size: ${width * 0.1};
      font-weight: bold;
    `}
  }
`

const ProductDescription = styled.Text`
  ${({ width }) => {
    return css`
      font-size: ${width * 0.07};
      font-weight: bold;
    `}
  }
`

function ProductCard({ product, width }) {
  console.log(product)
  return (
    <Container width={width}>
      <TopWrapper
        width={width}
      >
        <Image
          width={width}
          source={
            { uri: product.thumbnail }
          } />
        {product.name && (
          <ProductNameWrapper>
            <ProductName width={width}>
              {product.category}
            </ProductName>
          </ProductNameWrapper>)
        }
      </TopWrapper>
      <BottomWrapper>
        <ProductTitle width={width} numberOfLines={2}>{product.name}</ProductTitle>
        <ProductDescription width={width} numberOfLines={1}>{product.description}</ProductDescription>
      </BottomWrapper>
    </Container>
  )
}

export default ProductCard