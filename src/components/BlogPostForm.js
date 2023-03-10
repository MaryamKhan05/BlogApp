import React, { useContext, useState } from "react";
import { Text, View, StyleSheet, Button, TextInput } from "react-native";

const BlogPostForm = ({ onSubmit, initialValues, text }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{text}</Text>
      <Text style={styles.label}>Enter Title:</Text>

      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />

      <Text style={styles.label}>Enter Content:</Text>

      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(content) => setContent(content)}
      />

      <Button title="Save Blog Post" onPress={() => onSubmit(title, content)} />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: {
    title: "",
    content: "",
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "98%",
    alignSelf: "center",
    // marginTop:'10%'
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    margin: 5,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: 25,
  },
});

export default BlogPostForm;
