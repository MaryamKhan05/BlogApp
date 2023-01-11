import React from "react";
import "expo-dev-menu";
import { TouchableOpacity, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import IndexScreen from "./src/screens/IndexScreen";
import ShowScreen from "./src/screens/ShowScreen";
import { Provider } from "./src/context/BlogContext";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="IndexScreen"
          component={IndexScreen}
          options={({ navigation }) => ({
            headerTitle: "All Blogs",
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("CreateScreen")}
              >
                <Ionicons
                  name="add-outline"
                  size={30}
                  color="black"
                  style={{ marginRight: 15 }}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="ShowScreen"
          component={ShowScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateScreen"
          component={CreateScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditScreen"
          component={EditScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

const App = MyStack;

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};

{
  /* RUNNING ON ANDROID  */
}

// import { createAppContainer } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";

// const navigator = createStackNavigator(
//   {
//     Index: IndexScreen
//   },
//   {
//     initialRouteName: 'Index',
//     defaultNavigationOptions: {
//       title: 'Blogs'
//     }
//   }
// );
// export default createAppContainer(navigator);
