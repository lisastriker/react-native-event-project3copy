import { Children } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

export default function RenderText(props){
    return(
    <Text>{props.words}</Text>
    )
}