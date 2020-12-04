import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image, ScrollView } from 'react-native';
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
  Header,
} from "native-base";

import Accordian from '../Accordian'

const dataArray = [
  {title:"What is this book about?", data:"A magical land of elves, wizards and muggles."},
  {title:"What is Voldermort\'s purpose", data:"To be the greatest evil of all and to kill Harry Potter"},
  {title:"How does he do it?", data:"He splits his soul into 7 horucruxes to attempt to escape death, while he commits many attempts on Harry\'s life"}
];



function HomeScreen(){
    return(
      <ScrollView style={{ padding: 10 }}>
      <Card style={styles.card}>
        <CardItem>
          <Body>
            <Text style={styles.cardTitle}>Welcome</Text>
            <Text>
              Thanks for downloading our app! Here, you'll find all kinds of
              information about the Harry Potter Cast.
            </Text>
          </Body>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={{
              uri:
                "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/6h58ec8-1496676799.jpg",
            }}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </CardItem>
      </Card>
      {renderAccordian()}
    </ScrollView>
    );

}

const HomeStack = createStackNavigator();
  export default function HomeStackScreen() {
 return (
   <HomeStack.Navigator>
    <HomeStack.Screen name="Book Information" component={HomeScreen} />             
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