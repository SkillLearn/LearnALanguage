import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import HomeScreen from "./screens/HomeScreen";
import ListOfWords from "./screens/ListOfWords";
import ScrollWords from "./screens/ScrollWords";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const TabNavigator = createBottomTabNavigator({
  Home: { screen: HomeScreen },
  ListOfWords: { screen : ListOfWords },
  LearnWords : {screen : ScrollWords}
});

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  }
});
