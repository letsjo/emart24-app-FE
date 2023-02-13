import styled from 'styled-components/native';

import { userClient } from '../apis/userClient'
import { useEffect, useState } from 'react';

import ProductCard from '../components/ProductCard';
import ImageSlider from '../components/ImageSlider';

import { sliderBanner } from '../datas/SliderImageData';
import { Button } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProductsWrapper = styled.FlatList`
  background-color: #fff;
`

const ProductsCardTouch = styled.TouchableOpacity`
  padding-left: 10px;
  padding-right: 10px;
`

const Home = ({ navigation }) => {

  const [products, setProducts] = useState([]);
  const [events, setEvents] = useState([]);
  const [containerWidth, setContainerWidth] = useState(0);

  const access_token = AsyncStorage.getItem('access_token');

  const margins = 39 * 2;
  const numColumns = 2;

  useEffect(() => {
    const loadProductList = async () => {
      try {
        const productListAPI = userClient.get('/products');
        const eventListAPI = userClient.get('/events');

        let [responseProductList, responseEventList] =
          await Promise.allSettled([
            productListAPI,
            eventListAPI,
          ]);

        if (responseProductList.status == "fulfilled") {
          setProducts(responseProductList.value.data);
        }

        if (responseEventList.status == "fulfilled") {
          setEvents(responseProductList.value.data);
        }

      } catch (e) {
        console.log(e);
      }
    }
    loadProductList();
  }, []);

  useEffect(() => {
    console.log(access_token);
  }, [access_token])

  // console.log(products);
  // console.log(events);
  return (
    <>
      {/* <MenuBtn title={'MenuBar'} onPress={() => navigation.navigate('MenuBar')}><Text>124214Home</Text></MenuBtn> */ }
      <ProductsWrapper
        data={ products }
        ListHeaderComponent={
          <>
            <Button title={ '로그인' } onPress={ () => navigation.navigate('Login') } />
            <ImageSlider sliderImages={ sliderBanner } />
          </>
        }
        columnWrapperStyle={ {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'flex-start',
          marginTop: 18,
          marginBottom: 18,
        } }
        onLayout={ e => setContainerWidth(e.nativeEvent.layout.width) }
        renderItem={ (product) => (
          <ProductsCardTouch
            options={ ({ route }) => ({ product }) }
            onPress={ () => navigation.navigate('ProductDetail', { product }) }
          >
            <ProductCard
              scale={ ((containerWidth - margins) / numColumns) > 0 ? Number(((containerWidth - margins) / numColumns).toFixed(2)) : 0 }
              product={ product.item }
            />
          </ProductsCardTouch>
        ) }
        keyExtractor={ (item) => item.id }
        numColumns={ numColumns }
      />
    </>
  )
}

export default Home