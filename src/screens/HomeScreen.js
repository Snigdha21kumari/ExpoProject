import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { SliderBox } from "react-native-image-slider-box";
export default function List(props) {
  const [loading, setLoading] = useState(false);

  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  const [state, setState] = useState({
    dataContainer: [],
    images: [
      "https://source.unsplash.com/1024x768/?nature",
      "https://source.unsplash.com/1024x768/?water",
      "https://source.unsplash.com/1024x768/?girl",
    ],
  });

  useEffect(() => {
    axios
      .get("https://itunes.apple.com/search?term=Michael+jackson")
      .then((response) => {
        console.warn("data ==", response.data.results.artworkUrl60);
        setState({
          ...state,
          dataContainer: response.data.results,
          imageData: response.data.results.artworkUrl100,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.flatListwrap}
        onPress={() =>
          props.navigation.navigate("List", {
            musicDetails: item,
          })
        }
      >
        <TouchableOpacity style={styles.imgWrap}>
          <Image source={{ uri: item.artworkUrl60 }} style={styles.image} />
        </TouchableOpacity>
        <View style={styles.artistNameWrap}>
          <Text> {item.artistName}</Text>
          <Text> {item.primaryGenreName}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.text}>Music List</Text>
      <View>
        {loading ? (
          <ActivityIndicator visible={loading} />
        ) : (
          <>
            <SliderBox
              images={state.images}
              sliderBoxHeight={200}
              onCurrentImagePressed={(index, startLoading) =>
                console.warn(`image ${index} pressed`)
              }
              dotColor="blue"
              inactiveDotColor="white"
              dotStyle={{
                width: 8,
                height: 8,
                borderRadius: 4,
                marginHorizontal: 5,
                padding: 0,
                margin: 0,
              }}
            />
          </>
        )}
      </View>

      <FlatList
        data={state.dataContainer}
        renderItem={(item) => renderItem(item)}
        keyExtractor={(item, index) => item.artistId}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  flatListwrap: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#e2e2e2",
    paddingVertical: 5,
  },
  imgWrap: {
    paddingVertical: 10,
  },
  artistNameWrap: {
    paddingHorizontal: 30,
  },
  text: {
    color: "orange",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  image: { height: 50, width: 50, borderRadius: 25 },
});
