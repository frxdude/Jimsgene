import React from "react";
import { View, Image, SafeAreaView, Text } from "react-native";
import MText from "./MText";
import images from "../images/Helper.js";
const MidCard = (props) => {
  return (
    <View
      style={{
        flexDirection: props.direction,
        // borderWidth: 4,
        borderRadius: 20,
        backgroundColor: "#ffffff",
        width: props.width/2.5
        
        // justifyContent: 'space-between'
      }}
    >
      <View style={{justifyContent: 'center', alignItems:'center'}}>
        <Image
          source={props.src}
          style={{
            width: props.width / 2.7,
            height: props.height / 10,
            resizeMode: "contain",
            // backgroundColor: "#ff0",
          }}
        />
      </View>

      <View>
        <View
          style={{
            paddingBottom: 15,
            // backgroundColor: "#ff120d",
            paddingLeft: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>{props.text}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            paddingBottom: 15,
          }}
        >
          <Image
            source={require("../assets/fire.png")}
            style={{
              marginLeft: 12,
              width: props.width / 20,
              height: props.height / 35,
              // backgroundColor: "#788989",
            }}
          />

          <Text style={{ paddingTop: 5, paddingRight: 20 }}>
            {props.calories}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            paddingBottom: 15,
          }}
        >
          <View
            style={{
              borderRadius: 3,
              backgroundColor: "#fde9d8",
              justifyContent: "center",
              alignItems: "center",
              width: 35,
              height: 20,
            }}
          >
            <Text style={{ fontSize: 12 }}>1 KG</Text>
          </View>
          <Text style={{ paddingTop: 3, paddingRight: 20 }}>{props.price}</Text>
        </View>
      </View>
    </View>
  );
};
export default MidCard;

