import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import { SliderBox } from "react-native-image-slider-box";
export default function List(props) {
  const [state, setState] = useState({
    dataContainer: [],
    images: [
      "https://source.unsplash.com/1024x768/?nature",
      "https://source.unsplash.com/1024x768/?water",
      "https://source.unsplash.com/1024x768/?girl",
    ],
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://itunes.apple.com/search?term=Michael+jackson")
      .then((response) => {
        setLoading(false);

        console.warn("data ==", response.data.results.artworkUrl60);
        setState({
          ...state,
          dataContainer: response.data.results ? (
            response.data.results
          ) : (
            <Text>Nodata found</Text>
          ),
        });
      })

      .catch((error) => {
        setLoading(false);

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
      <View>
        <TouchableOpacity
          onPress={() => props.navigation.toggleDrawer()}
          style={styles.listContainer}
        >
          <Image
            source={require("../../assets/list.png")}
            style={styles.list}
          />
        </TouchableOpacity>
        <SliderBox
          images={state.images}
          sliderBoxHeight={200}
          onCurrentImagePressed={(index) =>
            console.warn(`image ${index} pressed`)
          }
          dotColor="blue"
          inactiveDotColor="white"
          dotStyle={styles.point}
        />
      </View>
      {loading ? (
        <ActivityIndicator
          visible={loading}
          color={"blue"}
          size={35}
          style={styles.loadingcontainer}
        />
      ) : (
        <>
          <FlatList
            data={state.dataContainer}
            renderItem={(item) => renderItem(item)}
            keyExtractor={(item) => item.artistId}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: { padding: 10 },
  list: { height: 30, width: 30 },
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

  image: { height: 50, width: 50, borderRadius: 25 },
  point: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
    padding: 0,
    margin: 0,
  },
  loadingcontainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
