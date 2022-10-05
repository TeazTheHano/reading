import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Image, Text, TouchableOpacity } from "react-native";


import Home from "../screens/Home";
import Add from "../screens/Add";
import Account from "../screens/Account";
import Search from "../screens/Search";
import Read from "../screens/Read";
import SelectedBookScreen from "../components/SelectedBook";
import ShowSearch from "../screens/ShowSearch";
import Splash from "../screens/Splash";
import SignIn from "../screens/Signin";
import SignUp from "../screens/Signup";

const HomeStack = createNativeStackNavigator();
function HomeStacks() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home Stack" component={Home} />
    </HomeStack.Navigator>
  );
}

const SearchStack = createNativeStackNavigator();
function SearchStacks() {
  return (
    <SearchStack.Navigator screenOptions={{ headerShown: false }}>
      <SearchStack.Screen name="Search Stack" component={Search} />
    </SearchStack.Navigator>
  );
}

const ReadStack = createNativeStackNavigator();
function ReadStacks() {
  return (
    <ReadStack.Navigator screenOptions={{ headerShown: false }}>
      <ReadStack.Screen name="Read Stack" component={Read} />
    </ReadStack.Navigator>
  );
}

const AddStack = createNativeStackNavigator();
function AddStacks() {
  return (
    <AddStack.Navigator screenOptions={{ headerShown: false }}>
      <AddStack.Screen name="Add Stack" component={Add} />
    </AddStack.Navigator>
  );
}

const AccountStack = createNativeStackNavigator();
function AccountStacks() {
  return (
    <AccountStack.Navigator screenOptions={{ headerShown: false }}>
      <AccountStack.Screen name="Account Stack" component={Account} />
    </AccountStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
const CustomButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: "center",
      alignItems: "center",
      shadowColor: "#666666",
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
      elevation: 5,
    }}
    onPress={onPress}
  >
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: "#A49CF2",
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          elevation: 0,
          backgroundColor: "#666666",
          width: "100%",
          height: 70,
          shadowColor: "#666666",
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
          elevation: 5,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStacks}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("../assets/home.png")}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? "#A49CF2" : "#A4A4A4",
                }}
              ></Image>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Search"
        component={SearchStacks}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("../assets/2.png")}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? "#A49CF2" : "#A4A4A4",
                }}
              ></Image>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="post"
        component={ReadStacks}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/icon.png")}
              resizeMode="contain"
              style={{ width: 30, height: 30, tintColor: "#fff" }}
            />
          ),
          tabBarButton: (props) => <CustomButton {...props} />,
        }}
      ></Tab.Screen>

      <Tab.Screen
        name="Add"
        component={AddStacks}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("../assets/3.png")}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? "#A49CF2" : "#A4A4A4",
                }}
              ></Image>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="More"
        component={AccountStacks}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("../assets/4.png")}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? "#A49CF2" : "#A4A4A4",
                }}
              ></Image>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const RootStacks = createNativeStackNavigator();
function RootStack() {
  return (
    <NavigationContainer>
      <RootStacks.Navigator screenOptions={{ headerShown: false }}>
        <RootStacks.Screen name="Splash" component={Splash} />
        <RootStacks.Screen name="Sign in" component={SignIn} />
        <RootStacks.Screen name="Sign up" component={SignUp} />
        <RootStacks.Screen name="Tabs" component={Tabs} />
        <RootStacks.Screen name="SelectedBook" component={SelectedBookScreen} />
        <RootStacks.Screen name="Showing" component={ShowSearch} />
      </RootStacks.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;
