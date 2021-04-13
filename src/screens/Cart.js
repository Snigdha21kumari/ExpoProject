import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { four, two } from "../../assets";
import Header from "../common/Header";

export default function Cart() {
  const [state, setState] = useState({
    cartItem: [
      { fruitName: "Fresh Cherry", image: four },
      { fruitName: "Japan Cherry", image: two },
      { fruitName: "Fresh Cherry", image: four },
      { fruitName: "Japan Cherry", image: two },
    ],
  });

  const renderItem = ({ item }) => {
    return (
      <View>
        <Image source={item.image} style={styles.bunchImage}></Image>
        <Text style={styles.text}>{item.fruitName}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Header />
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image
          source={require("../../assets/two.png")}
          style={styles.backImage}
        />
      </View>
      <View style={styles.bigContainer}>
        <Text style={styles.first}>Australian Cherry</Text>
        <View style={styles.box}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.second}>$5.6 </Text>
            <Text style={styles.twice}>$7.2 </Text>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.third}> Buy</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.line}>
          <View style={styles.row}>
            <Image
              source={require("../../assets/copy.png")}
              style={styles.small}
            />
            <Text style={styles.feature}>ABC</Text>
          </View>
          <View style={styles.row}>
            <Image
              source={require("../../assets/copy.png")}
              style={styles.small}
            />
            <Text style={styles.feature}>Quality</Text>
          </View>
          <View style={styles.row}>
            <Image
              source={require("../../assets/copy.png")}
              style={styles.small}
            />
            <Text style={styles.feature}>Fresh</Text>
          </View>
        </View>
        <Text style={styles.lorem}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et
        </Text>
        <View style={styles.paragraphEnd}>
          <Text style={styles.lorem}>dolore magna aliqua. Ut enim ad m</Text>
          <Text style={styles.last}>...View more</Text>
        </View>
        <View style={styles.middle}>
          <Image
            source={require("../../assets/favourite.png")}
            style={styles.like}
          ></Image>

          <TouchableOpacity style={styles.medium}>
            <Text style={styles.fifth}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
        <View style={{ paddingVertical: 10 }}>
          <Text style={styles.sixth}>Similar Products</Text>
          <View style={{ width: "100%", alignItems: "center" }}>
            <View style={styles.tagView}>
              <FlatList
                data={state.cartItem}
                // numColumns={2}
                renderItem={(item) => renderItem(item)}
                horizontal
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.back}>
        <View style={styles.bottom}>
          <Text style={styles.total}>$11.6</Text>
          <View style={styles.side}>
            <Text style={styles.total}>CHECKOUT</Text>
            <Image
              source={require("../../assets/arrow.png")}
              style={styles.photo}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { backgroundColor: "#99ffeb", flex: 1 },
  backImage: {
    height: 250,
    width: 200,
    backgroundColor: "transparent",
  },
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
  first: { fontSize: 20, fontWeight: "bold", padding: 10 },
  second: { fontSize: 20, color: "#00e673", fontWeight: "bold" },
  twice: {
    fontSize: 20,
    color: "grey",
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
  third: { color: "white", fontWeight: "bold", fontSize: 20 },
  feature: { fontWeight: "bold", fontSize: 15 },
  small: { height: 20, width: 20, backgroundColor: "#00b300" },
  box: { flexDirection: "row", justifyContent: "space-between", padding: 5 },
  line: { flexDirection: "row", justifyContent: "space-around", padding: 10 },
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
  lorem: { color: "#527a7a", fontSize: 15 },
  last: { color: "#00e673", fontWeight: "bold" },
  paragraphEnd: { flexDirection: "row" },
  fifth: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  sixth: { fontSize: 20, fontWeight: "bold", paddingVertical: 10 },
  bunchImage: {
    height: 100,
    width: 150,
    borderWidth: 2,
    borderColor: "#f0f5f5",
    borderRadius: 20,
  },
  cards: { flexWrap: "wrap" },

  text: { fontWeight: "bold" },
  tagView: {
    flexDirection: "row",
    padding: 10,
  },
  back: {
    backgroundColor: "white",
    height: 100,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "white",
    justifyContent: "center",
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#00b300",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
  },
  total: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  side: { flexDirection: "row" },
  photo: {
    height: 30,
    width: 30,
    padding: 10,
    tintColor: "white",
    justifyContent: "center",
  },
});
