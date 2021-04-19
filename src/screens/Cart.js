import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Header from "../common/Header";
import { SliderBox, CommonText, Button, Footer, Link } from "../common";
import { data, textList } from "../screens/data";

function Cart() {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.big}>
        <ImageBackground source={item.image} style={styles.bunchImage}>
          <View style={styles.imagebackground}>
            <Image
              source={require("../../assets/blankheart.png")}
              style={styles.heart}
            ></Image>
          </View>
        </ImageBackground>
        <Text style={styles.text}>{item.fruitName}</Text>
      </View>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.head}>
        <Header />
        <SliderBox />
      </View>
      <View style={styles.bigContainer}>
        <CommonText label={data.textList.ac} />
        <View style={styles.box}>
          <CommonText label="$56" style={{ color: "green" }} striketext="$72" />
          <Button label={data.textList.btn} style={styles.button} />
        </View>
        <View style={styles.line}>
          <View style={styles.row}>
            <Image
              source={require("../../assets/copy.png")}
              style={styles.small}
            />
            <CommonText label={data.textList.abc} style={{ color: "black" }} />
          </View>
          <View style={styles.row}>
            <Image
              source={require("../../assets/copy.png")}
              style={styles.small}
            />
            <CommonText label={data.textList.qa} style={{ color: "black" }} />
          </View>
          <View style={styles.row}>
            <Image
              source={require("../../assets/copy.png")}
              style={styles.small}
            />
            <CommonText label="Fresh" style={{ color: "black" }} />
          </View>
        </View>

        <Link />

        <View style={styles.middle}>
          <Image
            source={require("../../assets/favourite.png")}
            style={styles.like}
          />

          <Button label="Add To cart" style={styles.medium} />
        </View>
        <CommonText label="Similar Products" />
        <FlatList
          data={data.cartItem}
          renderItem={(item) => renderItem(item)}
          horizontal
        />
      </View>
      <View style={styles.back}>
        <View style={styles.layout}>
          <Text style={styles.total}>$11.6</Text>
          <View style={styles.last}>
            <Button label={data.textList.Check} style={styles.total} />
            <Footer />
          </View>
        </View>
      </View>
    </View>
  );
}
export default Cart;
const styles = StyleSheet.create({
  bigContainer: {
    backgroundColor: "white",
    borderRadius: 25,
    padding: 20,
  },
  button: {
    backgroundColor: "#3377ff",
    width: 100,
    alignItems: "center",
    borderRadius: 10,
    height: 30,
    justifyContent: "center",
  },
  small: {
    height: 20,
    width: 20,
    backgroundColor: "#00b300",
    paddingHorizontal: 10,
  },
  box: { flexDirection: "row", justifyContent: "space-between", padding: 5 },
  line: { flexDirection: "row", justifyContent: "space-between", padding: 10 },
  row: { flexDirection: "row" },
  middle: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    alignItems: "center",
  },
  like: { height: 30, width: 30 },
  medium: {
    width: 250,
    backgroundColor: "#00b300",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
  },
  lorem: { color: "grey", fontSize: 14 },
  last: { color: "#00e673", fontSize: 15 },
  paragraphEnd: { flexDirection: "row" },
  bunchImage: {
    height: 180,
    width: 170,
    borderWidth: 2,
    borderColor: "#f0f5f5",
    borderRadius: 20,
    alignItems: "flex-start",
  },
  text: { fontWeight: "bold", fontSize: 15 },
  back: {
    backgroundColor: "white",
    borderColor: "grey",
  },

  total: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    paddingHorizontal: 20,
  },
  layout: {
    backgroundColor: "#00b300",
    height: 50,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 10,
    alignItems: "center",
  },
  heart: { height: 20, width: 20 },
  imagebackground: {
    backgroundColor: "#D8D8D8",
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    margin: 10,
    alignSelf: "flex-end",
  },
  big: { paddingHorizontal: 10, paddingVertical: 10 },
  head: { backgroundColor: "#99ffeb" },
  last: { flexDirection: "row", padding: 20 },
});
