import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";

import Feather from "react-native-vector-icons/Feather";

import { Context as BlogContext } from "../context/BlogContext";

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost, getBlogPost } = useContext(BlogContext);

  useEffect(() => {
    getBlogPost();
    const listener = navigation.addListener("focus", () => {
      getBlogPost();
    });
    return () => {
      // listener.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate("ShowScreen", { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.title}>{item.title}</Text>

                <TouchableOpacity
                  style={styles.iconbg}
                  onPress={() => deleteBlogPost(item.id)}
                >
                  <Feather style={styles.icon} name="trash-2" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignContent: "center",
    justifyContent: "center",
  },
  card: {
    margin: 10,
  },
  row: {
    // flexDirection: "row",
    // justifyContent: "center",
    // paddingVertical: 20,
    // paddingHorizontal: 10,
    // borderTopWidth: 1,
    // borderColor: "gray",
    width: 170,
    height: 200,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#E2E2E2",
  },
  title: {
    alignSelf: "center",
    fontSize: 25,
    fontWeight: "bold",
    margin: 10,
    marginTop: 20,
  },
  icon: {
    fontSize: 25,
    alignSelf: "center",
    color: "black",
  },
  iconbg: {
    // position:'absolute',
    width: 45.67,
    height: 45.67,
    borderRadius: 17,
    backgroundColor: "#B7DFF5",
    justifyContent: "center",
    alignSelf: "flex-end",
    marginTop: "50%",
    marginRight: 15,
  },
});

export default IndexScreen;
