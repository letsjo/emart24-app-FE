import React, { useState, useEffect } from 'react';
import { View } from "react-native";
import Slideshow from "../modules/Slideshow";
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const ImageSlider = ({ sliderImages = [] }) => {
  const [position, setPosition] = useState(0)

  useEffect(() => {
    const toggle = setInterval(() => {
      setPosition(position === sliderImages.length - 1 ? 0 : position + 1);
    }, 3000);

    return () => clearInterval(toggle);
  })

  return (
    <View>
      <Slideshow position={position} width={windowWidth} dataSource={sliderImages} />
    </View>
  );
};

export default ImageSlider;