import React, { useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import { Context } from "../context/BlogContext";

const ShowScreen = ({ route, navigation, item }) => {
  const id = route.params.id;
  const { state } = useContext(Context);
  const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.icon}
        >
          <Ionicons name="arrow-back-circle-outline" size={30} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("EditScreen", { id: route.params.id });
          }}
          style={styles.icon}
        >
          <FontAwesome
            name="edit"
            size={25}
            color="black"
            style={{ marginRight: 15 }}
          />
        </TouchableOpacity>
       
      </View>

      <Text style={styles.title}>{blogPost.title}</Text>
      <Text style={styles.content}>{blogPost.content}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // alignItems:'center'
  },
  icon: {
    marginLeft: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    margin: 20,
    lineHeight: 30,
  },
  content: {
    marginHorizontal: 20,
    fontSize: 20,
    lineHeight: 30,
  },
  
});

export default ShowScreen;
