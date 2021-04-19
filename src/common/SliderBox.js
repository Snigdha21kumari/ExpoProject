import React from "react";
import { View, StyleSheet } from "react-native";
import { SliderBox as PhotoSlider } from "react-native-image-slider-box";
import { data } from "../screens/data";
export default function SliderBox() {
  return (
    <View>
      <PhotoSlider
        images={data.images}
        sliderBoxHeight={210}
        dotColor="white"
        inactiveDotColor="white"
        dotStyle={styles.point}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  point: {
    width: 10,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
  },
});
