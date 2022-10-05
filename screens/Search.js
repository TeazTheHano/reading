import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Button, TextInput } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { Searchbar } from "react-native-paper";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from "react-native-safe-area-context";

const Search = ({navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <SafeAreaView style={{flex:1, backgroundColor: '#323232'}}>
    <StatusBar/>
        <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={{ height: 42, marginHorizontal: 24 }}
        />

        <View style={{ marginTop: 27, left: 25 }}>
          <Text style={{ color: "#ffffff", fontWeight: "600" }}>Category</Text>
        </View>

        <View style={{ marginTop: 26, flexDirection: "row" }}>
          <View style={{ left: 25 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Showing")}
              style={{
                width: 111,
                height: 42,
                borderRadius: 6,
                backgroundColor: "#fff",
                borderColor: "#ffffff",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text> History</Text>
            </TouchableOpacity>
          </View>

          <View style={{ left: 30 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Showing")}
              style={{
                width: 111,
                height: 42,
                borderRadius: 6,
                backgroundColor: "#fff",
                borderColor: "#ffffff",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text> History</Text>
            </TouchableOpacity>
          </View>

          <View style={{ left: 35 }}>
            <TouchableOpacity
              style={{
                width: 111,
                height: 42,
                borderRadius: 6,
                backgroundColor: "#fff",
                borderColor: "#ffffff",
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => navigation.navigate("Showing")}
            >
              <Text> History</Text>
            </TouchableOpacity>
          </View>
        </View>

    </SafeAreaView>
    
  );
};

export default Search;


// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   Dimensions,
//   TouchableOpacity,
//   SafeAreaView,
// } from "react-native";
// import { Button, TextInput } from "react-native-paper";
// import { Ionicons } from "@expo/vector-icons";
// import { Searchbar } from "react-native-paper";
// import { StatusBar } from 'expo-status-bar';

// const Search = ({navigation}) => {
//   const [searchQuery, setSearchQuery] = React.useState("");
//   const onChangeSearch = (query) => setSearchQuery(query);
//   return (
//     <SafeAreaView style={{flex:1, backgroundColor: '#323232'}}>
//     <StatusBar/>
//     <View
//       style={{
//         flex: 1,
//         backgroundColor: "#323232",
//       }}
//     >
//       <View style={{ marginTop: StatusBar.currentHeight }}>
//         <View>
//           <Searchbar
//             placeholder="Search"
//             onChangeText={onChangeSearch}
//             value={searchQuery}
//             style={{ height: 42, marginHorizontal: 24 }}
//           />
//         </View>

//         <View style={{ marginTop: 27, left: 25 }}>
//           <Text style={{ color: "#ffffff", fontWeight: "600" }}>Category</Text>
//         </View>

//         <View style={{ marginTop: 26, flexDirection: "row" }}>
//           <View style={{ left: 25 }}>
//             <TouchableOpacity
//               onPress={() => navigation.navigate("Showing")}
//               style={{
//                 width: 111,
//                 height: 42,
//                 borderRadius: 6,
//                 backgroundColor: "#fff",
//                 borderColor: "#ffffff",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               <Text> History</Text>
//             </TouchableOpacity>
//           </View>

//           <View style={{ left: 30 }}>
//             <TouchableOpacity
//               onPress={() => navigation.navigate("Showing")}
//               style={{
//                 width: 111,
//                 height: 42,
//                 borderRadius: 6,
//                 backgroundColor: "#fff",
//                 borderColor: "#ffffff",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               <Text> History</Text>
//             </TouchableOpacity>
//           </View>

//           <View style={{ left: 35 }}>
//             <TouchableOpacity
//               style={{
//                 width: 111,
//                 height: 42,
//                 borderRadius: 6,
//                 backgroundColor: "#fff",
//                 borderColor: "#ffffff",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//               onPress={() => navigation.navigate("Showing")}
//             >
//               <Text> History</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </View>
//     </SafeAreaView>
    
//   );
// };

// export default Search;
