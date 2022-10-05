import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from 'expo-status-bar';
import { Button, TextInput } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const Account = () => {
  return (
    <SafeAreaView style={{flex:1, backgroundColor: '#A49CF2'}}>
    <StatusBar/>
    <View style={styles.container}>
      <View style={styles.background}>
        <Image source={require("../assets/ava.png")} />
        <View style={{ marginTop: 17 }}>
          <Text style={{ color: "#fff", fontWeight: "700" }}>
            Nguyen Tuan Minh
          </Text>
        </View>
      </View>

      <View style={styles.footer}>
        <View>
          <Text style={{ color: "white", fontWeight: "500" }}>098212348</Text>
        </View>
        <View style={{ marginTop: 17 }}>
          <Text style={{ color: "white", fontWeight: "500" }}>
            Số 9, tòa nhà Sunshine, phố Vũ Phạm Hàm, Cầu GIấy, Hà Nội
          </Text>
        </View>
        <View style={{ marginTop: 16, alignItems: "center" }}>
          <Button
            style={{
              borderRadius: 6,
              backgroundColor: "#A49CF2",
              width: 380,
              height: 60,
              justifyContent: "center",
            }}
            mode="contained"
            onPress={() => console.log("Pressed")}
          >
            Press me
          </Button>
        </View>
      </View>
    </View>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A49CF2",
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  footer: {
    flex: 2,
    backgroundColor: "#323232",
    padding: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});

export default Account;
