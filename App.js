import React, { Component } from "react";
import Navigation from "./src/navigation";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar, SafeAreaView } from "react-native";
export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          {/* <StatusBar barStyle="dark-content" hidden={true} /> */}
          <Navigation />
        </NavigationContainer>
      </SafeAreaView>
    );
  }
}

// import React from "react";
// import { View, Text, SafeAreaView } from "react-native";
// import ViewMoreText from "react-native-view-more-text";

// export default function App() {
//   function renderViewMore(onPress) {
//     return <Text onPress={onPress}>View more</Text>;
//   }
//   function renderViewLess(onPress) {
//     return <Text onPress={onPress}>View less</Text>;
//   }
//   return (
//     <SafeAreaView>
//       <ViewMoreText
//         numberOfLines={3}
//         renderViewMore={renderViewMore}
//         renderViewLess={renderViewLess}
//         // textStyle={{ textAlign: "center" }}
//       >
//         {/* <View> */}
//         <Text>
//           Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri molestie
//           constituto eu. Eum enim tantas sadipscing ne, ut omnes malorum nostrum
//           cum. Errem populo qui ne, ea ipsum antiopam definitionem eos.
//         </Text>
//         {/* </View> */}
//       </ViewMoreText>
//     </SafeAreaView>
//   );
// }
