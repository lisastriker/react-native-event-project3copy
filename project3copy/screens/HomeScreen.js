import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useLinkProps } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Card,
  CardItem,
  Left,
  Thumbnail,
  Body,
  Button,
  Icon,
} from "native-base";

import Accordian from '../Accordian'

const dataArray = [
  {title:"What is this", data:"I am a basket full of nuts"},
  {title:"What is my purpose", data:"Squirrels hide their stash in me"},
  {title:"When do they do this", data:"Right before winter where they then forget where it is."}
];



function HomeScreen(){
    return(
      <View style={{ padding: 10 }}>
      <Text style={styles.titleText}>International Potato Day</Text>
      <Card style={styles.card}>
        <CardItem>
          <Body>
            <Text style={styles.cardTitle}>Welcome</Text>
            <Text>
              Thanks for downloading our app! Here, you'll find all kinds of
              information about our upcoming event. It'll be great!
            </Text>
          </Body>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={{
              uri:
                "https://upload.wikimedia.org/wikipedia/commons/a/ab/Patates.jpg",
            }}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </CardItem>
      </Card>
      {renderAccordian()}
    </View>
    );

}

const HomeStack = createStackNavigator();
  export default function HomeStackScreen() {
 return (
   <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomeScreen} />             
   </HomeStack.Navigator>
  );
}

function renderAccordian(){
  let items = [];
  let item;
  for(item in dataArray){
    items.push(<Accordian title={dataArray[item].title} data={dataArray[item].data}></Accordian>)
    console.log(item)
  }
  console.log(items);
  return items;
}

const styles = StyleSheet.create({
  titleText: {
    color: "grey",
    backgroundColor: "white",
    fontSize:30,
  },
});