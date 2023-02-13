import { Dimensions, Image } from 'react-native';

import styled from 'styled-components/native';

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

const TitleView = styled.View`
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

  const ProductInfo = route.params.product.item;
  // const { id, category, price, discount, brand, name, description, thumbnail } = ProductInfo;

  return (
    <Container>
      <ScrollList>
        <Image
          source={ { uri: ProductInfo.thumbnail } }
          style={ { width: windowWidth, height: windowWidth } }
        />
        <TitleView style={ { width: windowWidth } }>
          <Name> { ProductInfo.name }</Name>
          <Description>{ ProductInfo.description }</Description>
        </TitleView>
      </ScrollList>
    </Container>
  )
}

export default ProductDetail