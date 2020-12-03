import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useLinkProps } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from "react-native-vector-icons/Ionicons";
import RenderText from './RenderText'
import ContentScreen from './screens/ContentScreen'
import EventScreen from './screens/EventScreen'
import Accordian from './Accordian'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const dataArray = [
  {title:"What is this", data:"I am a basket full of nuts"},
  {title:"What is my purpose", data:"Squirrels hide their stash in me"},
  {title:"When do they do this", data:"Right before winter where they then forget where it is."}
];

export default function App() {
  function HomeScreen({navigation}){
    return(
      <View>
        {renderAccordian()}
      </View>
      
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

  /*const HomeStack = createStackNavigator();
  function HomeStackScreen() {
 return (
   <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomeScreen} />             
    <HomeStack.Screen name="Details" component={DetailScreen} />
   </HomeStack.Navigator>
  );
}*/

  function DetailScreen(){
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Detail</Text>
    </View>
    );
  }

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tab.Navigator screenOptions={({route}) => ({
        tabBarIcon:({focused,color,size}) =>{
          let iconName;
          if(route.name === 'Home'){
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          } else if (route.name === 'Event'){
            iconName = focused ? 'ios-list-box' : 'ios-list';
          } else if(route.name === 'Content'){
            iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />
        },
        })}
          tabBarOptions={{activeTintColor:'#FA2849', inactiveTintColor:'gray',}}
        >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Event" component={EventScreen} />
        <Tab.Screen name="Content" component={ContentScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
