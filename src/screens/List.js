// import React, { Component } from "react";
// import { Text, FlatList, SafeAreaView } from "react-native";

// class List extends Component {
//   constructor() {
//     super();
//     this.state = { data: [] };
//   }
//   componentDidMount() {
//     this.apiCall();
//   }
//   async apiCall() {
//     let resp = await fetch(
//       "https://itunes.apple.com/search?term=Michael+jackson"
//     );
//     let respJson = await resp.json();
//     // console.warn(respJson);
//     this.setState({ data: respJson.results });
//   }
//   render() {
//     return (
//       <SafeAreaView>
//         <Text
//           style={{
//             fontSize: 50,
//             textAlign: "center",
//             fontWeight: "bold",
//             color: "#330033",
//             textDecorationLine: "underline",
//           }}
//         >
//           {" "}
//           MUSIC LIST{" "}
//         </Text>
//         <FlatList
//           data={this.state.data}
//           renderItem={({ item }) => (
//             <Text
//               style={{
//                 fontSize: 25,
//                 color: "#993399",
//                 backgroundColor: "#ffccff",
//                 margin: 14,
//                 borderBottomColor: "black",
//                 borderBottomWidth: 1,
//                 fontFamily: "Helvetica",
//               }}
//             >
//               {item.title}
//               {item.trackName}:{item.collectionName}
//             </Text>
//           )}
//         />
//       </SafeAreaView>
//     );
//   }
// }
// export default List;
import React, { Component } from "react";

import axios from "axios";
import { Text, View, Image, FlatList } from "react-native";
export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageURL: "",
      dataContainer: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://itunes.apple.com/search?term=Michael+jackson")
      .then((response) => {
        // console.warn("", JSON.stringify(response.data.results, undefined, 2));
        this.setState({ dataContainer: response.data.results });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    // console.warn("abc", JSON.stringify(this.state.dataContainer, undefined, 2));
    const { dataContainer } = this.state;
    return (
      // <FlatList>
      <View style={{ flex: 1, margin: 30 }}>
        <Text
          style={{
            color: "orange",
            fontSize: 30,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {" "}
          Music List
        </Text>

        {dataContainer.map((item) => {
          // console.warn("item..", item);
          return (
            <View>
              <Text
                style={{
                  fontSize: 20,
                  color: "#b35900",
                  fontWeight: "bold",
                  fontFamily: "Helvetica",
                  backgroundColor: "#ffccff",
                }}
              >
                {item.trackName}
              </Text>
              <Text style={{ fontSize: 15, color: "#b35900" }}>
                {item.artistName}
              </Text>
            </View>
          );
        })}
      </View>
      // </FlatList>
    );
  }
}
