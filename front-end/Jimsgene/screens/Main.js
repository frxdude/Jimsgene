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
  ScrollView,
} from "react-native";
import MidCard from "../components/MidCard.js";
import MiniCard from "../components/MiniCard.js";
import MText from "../components/MText.js";
import images from "../images/Helper.js";


const Main = ({navigation}) => {
  const width = Math.round(Dimensions.get("window").width);
  const height = Math.round(Dimensions.get("window").height);
  const [searchText, onChangeText] = useState("Search here..");
  const list = ["Orange", "Banana", "Cherry", "Apple"];

  return (
    <ScrollView style={{flex : 1}}>
    <View style={styles.container}>
      <View style={{ flexDirection: "column", paddingHorizontal: 30 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "column" }}>
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
          <Image
            source={require("../assets/notification-bell.png")}
            style={styles.notificationBell}
          />
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
          <MiniCard width={width} height={height} text="Fruits" src={images.orange}/>
          <MiniCard width={width} height={height} text="Vegetables" src={images.tomato}/>
          <MiniCard width={width} height={height} text="Nuts" src={images.nut}/>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingBottom: 20,
            paddingVertical: 30,
          }}
        >
          <MText text="Popular" size={25} />
          <TouchableOpacity
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            <MText text="See All" />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between"}}>
          <ScrollView horizontal={true}>
            <MidCard
              width={width}
              height={height}
              src={images.orange}
              text="Fresh Orange"
              calories="33 calories"
              price="$4.60"
            />
            <MidCard
              width={width}
              height={height}
              src={images.strawberry}
              text="Strawberry"
              calories="233 calories"
              price="$8.60"
            />
            <MidCard
              width={width}
              height={height}
              src={images.tomato}
              text="Tomato"
              calories="67 calories"
              price="$5.60"
            />
            </ScrollView>
        </View>
          <View style={{ paddingVertical: 30 }}>
            <MText text="Top of the week" size={25} />
          </View>
          <MidCard
            width={width}
            src={images.orange}
            height={height}
            text="Fresh Orange"
            calories="33 calories"
            price="$4.60"
            direction="row"
          />
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 55,
    // paddingHorizontal: 20,
    backgroundColor: "#f7f6fd",
    flex:1,
    paddingBottom: 20
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
    width: 30,
    height: 30,
    marginTop: 5,
    marginLeft: 4,
  },
  notificationBell: {
    width: 30,
    height: 30,
    marginTop: 4,
  },
});
export default Main;

