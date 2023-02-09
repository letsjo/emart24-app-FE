import React from 'react'
import styled from 'styled-components/native';

const Container = styled.View`
  position: relative;
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const ScrollList = styled.ScrollView`
  flex: 24;
`

const Name = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #2c2c2c;
`;

function ProductDetail({ navigation, route }) {
  return (
    <Container>
      <ScrollList>
        <Name>ProductDetail</Name>
      </ScrollList>
    </Container>
  )
}

export default ProductDetail