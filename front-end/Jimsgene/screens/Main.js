import React, { useState } from "react";
import {
  SafeAreaView,
  Dimensions,
  TextInput,
  Image,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ViewPropTypes,
} from "react-native";
import MidCard from "../components/MidCard.js";
import MiniCard from "../components/MiniCard.js";
import MText from "../components/MText.js";

const width = Math.round(Dimensions.get("window").width);
const height = Math.round(Dimensions.get("window").height);
const Main = () => {
  const [searchText, onChangeText] = useState("Search here..");
  const list = ["Orange", "Banana", "Cherry", "Apple"];
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={{ flexDirection: "column", paddingHorizontal: 30 }}>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 30 }}>Hey fRx</Text>
            <Text
              style={{
                color: "#808080",
                paddingTop: 8,
                fontSize: 20,
              }}
            >
              What do you like to find
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "white",
              height: height / 22,
              borderColor: "white",
              borderWidth: 1,
              marginTop: 20,
              borderRadius: 10,
            }}
          >
            <TouchableOpacity>
              <Image
                source={require("../assets/searchicon.png")}
                style={styles.searchIcon}
              />
            </TouchableOpacity>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => onChangeText(text)}
              value={searchText}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              backgroundColor: "White",
            }}
          >
            <MiniCard width={width} height={height} text="Fruits" />
            <MiniCard width={width} height={height} text="Veget" />
            <MiniCard width={width} height={height} text="Spices" />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingBottom: 20,
              paddingHorizontal: 10,
              paddingVertical: 30,
            }}
          >
            <MText text="Popular" size={25} />
            <TouchableOpacity>
              <MText text="See All" />
            </TouchableOpacity>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <MidCard
              width={width}
              height={height}
              text="Fresh Orange"
              calories="33 calories"
              price="$4.60"
            />
            <MidCard
              width={width}
              height={height}
              text="Strawberry"
              calories="233 calories"
              price="$8.60"
            />
          </View>
          <View style={{ paddingVertical: 30 }}>
            <MText text="Top of the week" size={25} />
          </View>
          <MidCard 
              width={width}
              height={height}
              text="Fresh Orange"
              calories="33 calories"
              price="$4.60"
              direction="row"
              />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 20,
    backgroundColor: "#f7f6fd",
    width: width,
    height: height,
  },
  textInput: {
    height: 40,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    color: "#adadad",
    backgroundColor: "white",
    paddingHorizontal: 10,
    width: "90%",
  },
  searchIcon: {
    width: width / 14,
    height: height / 30,
    marginTop: 5,
    marginLeft: 4,
  },
});
export default Main;

