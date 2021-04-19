import React from "react";
import { View, Text } from "react-native";
import ViewMoreText from "react-native-view-more-text";

export default function Link() {
  function renderViewMore(onPress) {
    return (
      <Text onPress={onPress} style={{ color: "green" }}>
        View more
      </Text>
    );
  }
  function renderViewLess(onPress) {
    return <Text onPress={onPress}>View less</Text>;
  }
  return (
    <View>
      <ViewMoreText
        numberOfLines={3}
        renderViewMore={renderViewMore}
        renderViewLess={renderViewLess}
      >
        <Text style={{ color: "grey" }}>
          Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri molestie
          constituto eu. Eum enim tantas sadipscing ne, ut omnes malorum Errem
          populo qui ne, ea ipsum antiopam definitionem eos...
        </Text>
      </ViewMoreText>
    </View>
  );
}
