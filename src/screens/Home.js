import { ScrollView, Text } from 'react-native'
import styled from 'styled-components/native';

import userApi from '../apis/userApi'
import { useEffect, useState } from 'react';

import ProductCard from '../components/ProductCard';
import ImageSlider from '../components/ImageSlider';

import { sliderBanner } from '../datas/SliderImageData';

const Container = styled.ScrollView`
  flex: 24;
  background-color: #f3f3f3;
`;

const MenuBtn = styled.Button`

`
const ProductsWrapper = styled.FlatList`
  background-color: #fff;
`

const ProductsCardTouch = styled.TouchableOpacity`
  padding-left: 10px;
  padding-right: 10px;
`

const Home = ({ navigation }) => {

  const [products, setProducts] = useState([]);
  const [containerWidth, setContainerWidth] = useState(0);

  const margins = 39 * 2;
  const numColumns = 2;

  useEffect(() => {
    const getProductList = () => {
      userApi.get('/products')
        .then(res => {
          setProducts(res.data);
        }).catch(error => console.log(error));
    }
    getProductList();
  }, []);

  return (
    <Container>
      <MenuBtn title={'MenuBar'} onPress={() => navigation.navigate('MenuBar')}><Text>124214Home</Text></MenuBtn>
      <ImageSlider sliderImages={sliderBanner} />
      <ProductsWrapper
        data={products}
        columnWrapperStyle={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'flex-start',
          marginTop: 18,
          marginBottom: 18,
        }}
        onLayout={e => setContainerWidth(e.nativeEvent.layout.width)}
        renderItem={(product) => (
          <ProductsCardTouch
            onPress={() => navigation.navigate('ProductDetail', { product })}
          >
            <ProductCard
              width={(containerWidth - margins) / numColumns}
              product={product.item}
            />
          </ProductsCardTouch>
        )}
        keyExtractor={(item, index) => index}
        numColumns={numColumns}
      />
    </Container>
  )
}

export default Home