import React, { useState } from "react";
import {
  Dimensions,
  TextInput,
  Image,
  Text,
  StyleSheet,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import MidCard from "../components/MidCard.js";
import MiniCard from "../components/MiniCard.js";
import MText from "../components/MText.js";
import images from "../images/Helper.js";
import SlidingUpPanel from 'rn-sliding-up-panel';

const width = Math.round(Dimensions.get("window").width);
const height = Math.round(Dimensions.get("window").height);
const Main = () => {
  const [searchText, onChangeText] = useState("");
  const miniList = [{text: "Fruits", src: images.orange},{text: "Vegetables", src: images.tomato},{text: "Nuts", src: images.nut},{text: "Fruits", src: images.orange},{text: "Vegetables", src: images.tomato},{text: "Nuts", src: images.nut}]; 
  const list = [{}, {}, {}, {}];


  // const onPress = () => this._panel.show()
  return (
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
          <TouchableWithoutFeedback>
            <Image
              source={require("../assets/searchicon.png")}
              style={styles.searchIcon}
            />
          </TouchableWithoutFeedback>
          <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} onPress={Keyboard.dismiss}>
          <TextInput
            placeholder="Search here"
            style={styles.textInput}
            onChangeText={(text) => onChangeText(text)}
            value={searchText}
          />
          </KeyboardAvoidingView>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            backgroundColor: "White",
          }}
        >
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={true}>
          {miniList.map((item, key) => {
            return (
              <MiniCard
            onPress={() => this._panel.show()}
            key={key}
            width={width}
            height={height}
            text={item.text}
            src={item.src}
          />
            )
          })}
          </ScrollView>
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
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
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
       {/* <Button onPress={() => this._panel.show()} title="Press Here"/> */}
       <SlidingUpPanel ref={c => this._panel = c} draggableRange={{top: height/1.5, bottom: -100}}>
          <View style={styles.container}>
            <ScrollView>
          <Text>
            Fruits
            </Text>
        <MidCard
          width={width}
          src={images.orange}
          height={height}
          text="Fresh Orange"
          calories="33 calories"
          price="$4.60"
          direction="row"
        />
            </ScrollView>
            {/* <Button title='Hide' onPress={() => this._panel.hide()} /> */}
          </View>
        </SlidingUpPanel>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
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

