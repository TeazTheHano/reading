import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from "react-native-safe-area-context";

const SelectedBookScreen = ({ route }) => {
  const selectedBookData = route.params.selectedBookObj;
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex:1, backgroundColor: '#323232'}}>
    <StatusBar/>
    <View
      style={{
        backgroundColor: "#323232",
        flex: 1,
        alignItems: "center",
      }}
    >
      <View style={{marginTop:StatusBar.currentHeight}}> 
        <Ionicons color={"#A49CF2"} name="arrow-back-outline" size={30} onPress={() => navigation.navigate("Home")}/>
        <View
          style={{
            width: 380,
            height: 380,
            backgroundColor: "#fff",
            borderRadius: 6,
          }}
        >
          <Image style={styles.images} source={{ uri: selectedBookData.story }} />
        </View>
        <View style={{marginTop:32}}>
            <Text style={{color:"#ffffff", fontWeight:"700"}}>
                Title: {selectedBookData.title}
            </Text> 
        </View>
        <View style={{marginTop:16}}>
            <Text style={{color:"#ffffff", fontWeight:"700"}}>
                Author: {selectedBookData.author}
            </Text>
            
        </View>
        <View style={{marginTop:16}}>
            <Text style={{color:"#ffffff", fontWeight:"700"}}>
                Summary: {selectedBookData.description}
            </Text>
            
        </View>
      </View>
    </View>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({

    images: {
      width: 380,
      height: 380,
      borderRadius: 6,
    },
  });

export default SelectedBookScreen;
