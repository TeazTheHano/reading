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
import { useNavigation } from "@react-navigation/native";
const SignUp = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [pass2, setPass2] = useState("");
  return (
    <SafeAreaView style={{flex:1, backgroundColor: '#323232'}}>
    <StatusBar/>
    <View
      style={{
        flex: 1,
        backgroundColor: "#323232",
      }}
    >
      <View style={{ top: 5, left: 5 }}>
        <Ionicons
          name="arrow-back-outline"
          size={28}
          color={"#A49CF2"}
          onPress={() => navigation.navigate("Splash")}
        />
      </View>

      <View style={{ marginTop: 45, left: 26 }}>
        <Text style={{ color: "#D237ED", fontWeight: "700", fontSize: 40 }}>
          SIGN UP{" "}
        </Text>
      </View>

      <View style={{ marginTop: 13, left: 26 }}>
        <Text style={{ color: "#9D9D9D", fontWeight: "700", fontSize: 20 }}>
          Enter your credentials
        </Text>
      </View>

      <View style={{ marginTop: 33, alignItems: "center" }}>
        <TextInput
          label={"Email"}
          value={pass}
          onChangeText={(text) => setPass(text)}
          secureTextEntry={true}
          style={{
            backgroundColor: "#fff",
            width: 380,
            height: 60,
            borderRadius: 6,
          }}
        ></TextInput>
      </View>

      <View style={{ marginTop: 24, alignItems: "center" }}>
        <TextInput
          label={"Password"}
          value={pass}
          onChangeText={(text) => setPass(text)}
          secureTextEntry={true}
          style={{
            backgroundColor: "#fff",
            width: 380,
            height: 60,
            borderRadius: 6,
          }}
        ></TextInput>
      </View>

      <View style={{ marginTop: 24, alignItems: "center" }}>
        <TextInput
          label={"Enter password again"}
          value={pass}
          onChangeText={(text) => setPass(text)}
          secureTextEntry={true}
          style={{
            backgroundColor: "#fff",
            width: 380,
            height: 60,
            borderRadius: 6,
          }}
        ></TextInput>
      </View>

      <View style={{ marginTop: 16, alignItems: "center" }}>
        <Button
          style={{
            borderRadius: 6,
            width: 380,
            height: 60,
            backgroundColor: "#A49CF2",
            justifyContent: "center",
          }}
          mode="contained"
          onPress={() => navigation.navigate("Tabs")}
        >
          {" "}
          SIGN UP{" "}
        </Button>
      </View>
    </View>
    </SafeAreaView>
    
  );
};

export default SignUp;
