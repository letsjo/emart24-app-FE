import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { getProductDetailApi } from '../apis/products';

const CartCard = ({ cartData, deleteCart }) => {

  const { id, productId } = cartData;
  const [productDetail, setProductDetail] = useState(null);

  const getProductDetail = () => {
    getProductDetailApi({ productId })
      .then((res) => {
        setProductDetail(res.data);
      })
      .catch((err) => { console.log(err) })
  }

  useEffect(() => {
    getProductDetail();
  }, [])

  if (productDetail !== null)
    return (
      <View style={ styles.container }>
        <View style={ styles.product }>
          <Image style={ styles.image } source={ { uri: productDetail.thumbnail } } />
          <View style={ styles.description }>
            <Text style={ styles.name }>{ productDetail.name }</Text>
            <Text style={ styles.price }>{ `${productDetail.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원` }</Text>
          </View>
        </View>
        <View style={ styles.close }>
          <TouchableOpacity onPress={ () => deleteCart(id) }>
            <AntDesign name="close" size={ 24 } color="black" />
          </TouchableOpacity>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#222',
    borderBottomWidth: 0.5,
  },
  product: {
    flex: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  description: {
    flex: 2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 10,
    width: 200,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    height: 100,
    width: 100,
    objectFit: 'cover',
  },
  name: {
    fontWeight: 'bold',
  },
  price: {
    marginTop: 10,
    color: 'red',
    fontWeight: 'bold',
  },
  close: {
    flex: 1,
    padding: 15,
  }
})

export default CartCard