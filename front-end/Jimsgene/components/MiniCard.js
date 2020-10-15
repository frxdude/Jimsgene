import React from "react";
import { View, Image, SafeAreaView, Text } from "react-native";
const MiniCard = (props) => {
  return (
    <View
      style={{
        paddingTop: 30,
      }}
    >
      <View style={{ flexDirection: "row", borderWidth: 4, borderRadius: 10}}>
        <Image
          source={require("../assets/orange.png")}
          style={{
            width: props.width / 7,
            height: props.height / 21,
            resizeMode: "contain",
            backgroundColor: "#ff0",
          }}
        />
        <View
          style={{
            backgroundColor: "#ff120d",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>{props.text}</Text>
        </View>
      </View>
    </View>
  );
};
export default MiniCard;

