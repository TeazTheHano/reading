import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from 'expo-status-bar';
import { Button, TextInput } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
const Add = () => {
  const [text, setText] = React.useState("");
  const [text2, setText2] = React.useState("");
  const [text3, setText3] = React.useState("");
  const [text4, setText4] = React.useState("");
  const [text5, setText5] = React.useState("");

  return (
    <SafeAreaView style={{flex:1, backgroundColor: '#323232'}}>
    <StatusBar/>
    <View
      style={{
        flex: 1,
        backgroundColor: "#323232",
      }}
    >
      <View
        style={{ marginTop: StatusBar.currentHeight, alignItems: "center" }}
      >
        
        <View style={{ marginTop: -189 }}>
          <Image source={require("../assets/plus.png")} />
        </View>
      </View>
      <View style={{ marginTop: 178, alignItems: "center" }}>
        <TextInput
          style={{ width: 380, height: 0, backgroundColor: "#666666" }}
          label="Email"
          value={text}
          onChangeText={(text) => setText(text)}
        />
      </View>

      <View
        style={{
          left: "1%",
          marginTop: 10,
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <TextInput
          style={{ width: 180, height: 0, backgroundColor: "#666666" }}
          label="Genre"
          value={text}
          onChangeText={(text2) => setText2(text2)}
        />

        <View style={{ left: "20%" }}>
          <TextInput
            style={{ width: 180, height: 0, backgroundColor: "#666666" }}
            label="Phone Number"
            value={text}
            onChangeText={(text3) => setText3(text3)}
          />
        </View>
      </View>
      <View style={{ marginTop: 10, alignItems: "center" }}>
        <TextInput
          style={{ width: 380, height: 0, backgroundColor: "#666666" }}
          label="Description"
          value={text}
          onChangeText={(text) => setText(text)}
        />
      </View>
    </View>
    </SafeAreaView>
    
  );
};

export default Add;
