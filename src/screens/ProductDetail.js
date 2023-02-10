import { Dimensions } from 'react-native';

import styled, { css } from 'styled-components/native';

const windowWidth = Dimensions.get('window').width;

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

const MainImage = styled.Image`
  ${({ windowWidth }) => {
    return css`
      width: ${windowWidth};
      height: ${windowWidth};
    `}
  }
`
const TitleView = styled.View`
  ${({ windowWidth }) => {
    return css`
      width: ${windowWidth};
    `}
  }
  padding: 20px; 
  padding-bottom: 150px;
`

const Name = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #2c2c2c;
`;

const Description = styled.Text`
  font-size: 15px;
  font-weight: 100;
  color: #2c2c2c;
`;


const ProductDetail = ({ navigation, route }) => {
  const { id, category, price, discount, brand, name, description, thumbnail } = route.params.product.item;

  return (
    <Container>
      <ScrollList>
        <MainImage source={{ uri: thumbnail }} windowWidth={windowWidth} />
        <TitleView>
          <Name> {name}</Name>
          <Description>{description}</Description>
        </TitleView>
      </ScrollList>
    </Container>
  )
}

export default ProductDetail