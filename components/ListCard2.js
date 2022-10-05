import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
  TouchableHighlight,
  Image,
} from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
function ListCard2(props) {
  const navigation = useNavigation();
  const [lists, setList] = useState([
    {
      id: "1",
      story: "https://resources.mindx.edu.vn/uploads/images/sach-day-lap-trinh-co-ban-2.jpg",
      title: "The Pragmatic Programmer",
      author: "Andy",

    },
    {
      id: "2",
      story: "https://salt.tikicdn.com/cache/w1200/ts/product/f4/4f/ec/c8d7c174cbca49acb9b8ef31cb690557.jpg",
      title: "Giáo trình Kỹ thuật lập trình C căn bản & nâng cao ",
      author: "Andy",

    },
    {
      id: "3",
      story: "https://resources.mindx.edu.vn/uploads/images/sach-day-lap-trinh-co-ban-4.jpg",
      title: "Cracking the Coding Interview",
      author: "Andy",

    },
    {
      id: "4",
      story: "https://salt.tikicdn.com/cache/w1200/ts/product/92/86/16/e04f9b63a395da9bf9f887c9bf5f5eab.jpg",
      title: "STEM Học Viện Lập Trình Viên",
      author: "Andy",

    },
    {
      id: "5",
      story: "https://salt.tikicdn.com/cache/w1200/ts/product/a7/18/47/e4d30a34e0e1970b921e6c8de04515c6.jpg",
      title: "Đại Việt sử ký toàn thư",
      author: "Andy",

    },
    {
      id: "6",
      story: "https://toplist.vn/images/800px/sup-do-362818.jpg",
      title: "Đại Việt sử ký toàn thư",
      author: "Andy",

    },
    {
      id: "7",
      story: "https://toplist.vn/images/800px/nhung-cuoc-chinh-phat-cua-alexander-dai-de-362827.jpg",
      title: "Đại Việt sử ký toàn thư",
      author: "Andy",

    },
    {
      id: "8",
      story: "https://toplist.vn/images/800px/bach-khoa-lich-su-the-gioi-362872.jpg",
      title: "Đại Việt sử ký toàn thư",
      author: "Andy",

    },



  ]);
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        marginTop: 16,
      }}
    >
      
        <FlatList
          horizontal={true}
          data={lists}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <View style={{ margin: 7 }}>
                <View style={styles.card}>
                  <TouchableHighlight
                    onPress={() =>
                      navigation.navigate("SelectedBook", {
                        selectedBookObj: item,
                      })
                    }
                  >
                    <Image source={{ uri: item.story }} style={styles.images} />
                  </TouchableHighlight>
                </View>

                <View
                  style={{
                    marginTop: 4,
                    width: 180,
                    height: 180,
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "#ffffff",
                      fontSize: 15,
                      fontWeight: "bold",
                      lineHeight: 20,
                    }}
                  >
                    {" "}
                    {item.title}{" "}
                  </Text>
                </View>
              </View>
            );
          }}
        ></FlatList>
    
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 180,
    height: 180,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 6,
  },
  images: {
    width: 180,
    height: 180,
    borderRadius: 6,
  },
});

export default ListCard2;
