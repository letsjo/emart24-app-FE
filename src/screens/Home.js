import styled from 'styled-components/native';

import { userClient } from '../apis/userClient'
import { useEffect, useState } from 'react';

import ProductCard from '../components/ProductCard';
import ImageSlider from '../components/ImageSlider';

import { sliderBanner } from '../datas/SliderImageData';

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

          setEvents(responseEventList.value.data);
        }

      } catch (e) {
        console.log(e);
      }
    }
    loadProductList();
  }, []);

  return (
    <>
      <ProductsWrapper
        data={ products }
        ListHeaderComponent={
          <ImageSlider sliderImages={ sliderBanner } />
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
              navigation={ navigation }
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