import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {createAppConatainer} from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs"
import SearchScreen from "./screens/SearchScreen";
import TransactionScreen from "./screens/BookTransactionScreen";

export default class App extends React.Component{
  render(){
  return (
    <AppContainer  />

  );
  }
}
const TabNavigator = createBottomTabNavigator({
  Transaction: {screen: TransactionScreen},
  Search: {screen: SearchScreen},
  
});
const AppContainer = createAppConatainer(TabNavigator) 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  }
});
