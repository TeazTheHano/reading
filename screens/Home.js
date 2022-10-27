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
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
// import styled from 'styled-components/native';

// const deText = styled.Text`
//   fontSize: 14;
//   line-height: 21;
//   letter-spacing: 0.1;
// `;

const Home = () => {
  return (
    <SafeAreaView style={{flex:1, backgroundColor: '#8A56E6'}}>
    <StatusBar />
    
    <View style={{backgroundColor: 'white', height: '100%'}}>
      {/* account */}
      <View style={{
        paddingBottom: vw(5),
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        backgroundColor: '#8A56E6',
        position: 'absolute',
        width: '100%',
        zIndex: 1,
      }}>
        <View style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          alignSelf: 'center',
          position: 'relative',
          marginTop: vw(1),
        }}>
          <Image
              style={style.accountPic}
              source={{
                uri: 'https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-1/309867190_1808732989460752_3458846366665310071_n.jpg?stp=c0.0.200.200a_dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=pASjuJn-dD8AX_npetx&_nc_ht=scontent-hkg4-1.xx&oh=00_AT_p0o4aMo7xqxgkA6vNoKLyV0v267fVrkyMxZkoOWBlzA&oe=6342B82E',
              }}
          />
          <View>
            <Text style={{fontWeight: 'bold', fontSize: 18, color: 'white'}}>Chào Tuan Minh</Text>
            <Text style={{fontSize: 14, color: 'white', marginTop: vw(1.5)}}>Đống Đa, Hà Nội, Việt Nam</Text>
          
          {/* Way to bookmark */}
          </View>
          <Ionicons style={{position: 'absolute', right: '5%',}} name="bookmarks" size={vw(8)} color="white" />
          <View />
          
        </View>
      </View>
      
      <ScrollView>
      {/* main */}
      <View style={{ alignItems: 'center', backgroundColor: '#EFF4FF'}}>
        {/* For you */}
        <View style={style.forYou}>
          <Text style={{
            marginTop: vw(30),
            fontSize: 20,
            fontWeight: 'bold',
            letterSpacing: 0.25,
          }}>Dành cho bạn</Text>
          <View>
            {/* listcard */}
            <View style={style.forYouObject}>
            </View>
          </View>
        </View>

        {/* Most borrow  */}
        <View>
          <Text style={style.headText}>Sách được mượn nhiều nhất</Text>
          <ListCard/>
        </View>

        {/* Category */}
        <View>

        </View>
      </View>
      
      </ScrollView>
    </View>

    {/* <View
      style={{
        flex: 1,
        backgroundColor: "#F5F5F5",
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
    </View> */}
    
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  accountPic: {
    width: vw(20),
    height: vw(20),
    borderRadius: 10000,
    marginRight: vw(2.5),
    marginLeft: '5%'
  },
  forYou: {
    backgroundColor: '#DAEDFF',
    width: '100%',
    borderRadius: 15,
    alignItems: 'center',
  },
  headText: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    marginTop: vw(10),
    marginLeft: vw(2)
  },
  forYouObject: {
    height: vw(80),
    width: vw(80),
    borderWidth: 1,
    marginBottom: vw(10),
    marginTop: vw(2)
  },
})

export default Home;
