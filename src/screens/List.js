import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function List(props) {
  const [state, setState] = useState({
    musicList: props.route.params.musicDetails,
  });
  return (
    <View style={styles.container}>
      <View style={{ width: "100%", height: 200 }}>
        <Image
          source={{ uri: state.musicList.artworkUrl100 }}
          style={styles.artphoto}
        />
      </View>
      <View style={styles.textWrap}>
        <Text style={styles.artist}>Artist Name</Text>
        <Text style={styles.name}>{state.musicList.artistName}</Text>
      </View>
      <View style={styles.textWrap}>
        <Text style={styles.artist}>Genre Name</Text>
        <Text style={styles.name}>{state.musicList.primaryGenreName}</Text>
      </View>
      <View style={styles.textWrap}>
        <Text style={styles.artist}>ArtistId</Text>
        <Text style={styles.name}>{state.musicList.artistId}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  artphoto: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  name: { fontSize: 20, color: "#6600ff" },
  textWrap: { margin: 10 },
  artist: {
    fontSize: 20,
    color: "#ff6600",
    fontWeight: "bold",
  },
  name: { fontSize: 15 },
});
