import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useLinkProps } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen(){
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        <TouchableOpacity>Click me</TouchableOpacity>
        <RenderText words="Hello there"></RenderText>
    </View>
    );

}

const EventStack = createStackNavigator();
  export default function EventStackScreen() {
 return (
   <EventStack.Navigator>
    <EventStack.Screen name="Home" component={EventScreen} />             
    <EventStack.Screen name="Details" component={DetailScreen} />
   </EventStack.Navigator>
  );
}*/