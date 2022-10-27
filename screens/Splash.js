import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Image, View, ImageBackground, } from "react-native";
import { Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

function Splash({ navigation }) {
  return (
    <SafeAreaView style={{flex:1, backgroundColor: 'white'}}>
    <StatusBar/>
    <View style={styles.container}>
      <View>
        <Image source={require("../assets/1.png")} />
      </View>

      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text style={{ color: "#8B558E", fontWeight: "700", fontSize: 40 }}>
          Xin chào
        </Text>
      </View>

      <View style={{ marginTop: 160, alignItems: "center" }}>
        <Button
          style={{
            borderRadius: 6,
            width: 380,
            height: 60,
            backgroundColor: "#8A56E6",
            justifyContent: "center",
          }}
          mode="contained"
          onPress={() => navigation.navigate("Sign in")}
        >
          {" "}
          Đăng nhập{" "}
        </Button>
      </View>

      <View style={{ marginTop: 16, alignItems: "center" }}>
        <Button
          style={{
            borderRadius: 6,
            width: 380,
            height: 60,
            backgroundColor: "#323232",
            justifyContent: "center",
            shadowOpacity: 0.95,
            
          }}
          mode="contained"
          onPress={() => navigation.navigate("Sign in")}
        >
          {" "}
          Đăng ký{" "}
        </Button>
      </View>
    </View>
    </SafeAreaView>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignSelf: 'center'
  },
});

export default Splash;
