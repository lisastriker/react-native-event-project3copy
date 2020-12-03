import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useLinkProps } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

function EventHomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Event!</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("EventSecond")}
        style={styles.text}
      >
        Second Screen
      </TouchableOpacity>
    </View>
  );
}

function EventSecondScreen({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Event!</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("EventThird")}
        style={styles.text}
      >Third Screen</TouchableOpacity>
    </View>
  );
}

function EventThirdScreen({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Event!</Text>
      <TouchableOpacity
        onPress={() => navigation.popToTop()}
        style={styles.text}
      >Return to Events</TouchableOpacity>
    </View>
  );
}
const EventStack = createStackNavigator();

export default function EventStackScreen() {
  return (
    <EventStack.Navigator>
      <EventStack.Screen name="Event" component={EventHomeScreen} />
      <EventStack.Screen name="EventSecond" component={EventSecondScreen} />
      <EventStack.Screen name="EventThird" component={EventThirdScreen} />
    </EventStack.Navigator>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "grey",
    border: "tomato solid 3px",
    backgroundColor: "white",
  },
});
