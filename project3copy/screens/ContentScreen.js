import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useLinkProps } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function ContentScreen(){
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Content!</Text>
    </View>
    );
  }