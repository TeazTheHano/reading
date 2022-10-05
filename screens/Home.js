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
import { ScrollView } from "react-native-virtualized-view";
import ListCard from "../components/ListCard";
import ListCard2 from "../components/ListCard2";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView style={{flex:1, backgroundColor: '#323232'}}>
    <StatusBar/>
    <View
      style={{
        flex: 1,
        backgroundColor: "#323232",
      }}
    >
      <View>
      
        <View
          style={{ marginTop: StatusBar.currentHeight, alignItems: "center" }}
        >
          <Text style={{ fontSize: 20, fontWeight: "600", color: "#A49CF2" }}>
            Best Selling Book
          </Text>
        </View>

        <ListCard />
      
      </View>

      <View style={{marginTop:-100}}>
        
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 20, fontWeight: "600", color: "#A49CF2" }}>
              Book For You
            </Text>
          </View>

          <ListCard2 />
        
      </View>
    </View>
    </SafeAreaView>
  );
};

export default Home;
