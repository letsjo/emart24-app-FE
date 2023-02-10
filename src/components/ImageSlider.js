import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from "react-native";
import Slideshow from "react-native-image-slider-show";

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
      <Slideshow position={position} height={250} dataSource={sliderImages} onPress={false} />
    </View>
  );
};

export default ImageSlider;