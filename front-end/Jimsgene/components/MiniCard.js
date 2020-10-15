import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
const MiniCard = (props) => {


  const [toggle, setToggle] = useState(false);

  const toggleF = () => {
    setToggle(!toggle);
  }
  return (
    <TouchableOpacity onPress={() => toggleF()}>
      {console.log(toggle)}
      <View
        style={{
          paddingTop: 30,
          paddingHorizontal: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            borderRadius: 10,
            backgroundColor: toggle ? "#f8d4d8" : "#ffffff",
          }}
        >
          <Image
            source={props.src}
            style={{
              width: props.width / 7,
              height: props.height / 21,
              resizeMode: "contain",
              // backgroundColor: "#ff0",
            }}
          />
          <View
            style={{
              // backgroundColor: "#ff120d",
              alignItems: "center",
              justifyContent: "center",
              width: 50,
              height: 50,
            }}
          >
            <Text>{props.text.length < 7
                ? `${props.text}`
                : `${props.text.substring(0, 5)}...`}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default MiniCard;

