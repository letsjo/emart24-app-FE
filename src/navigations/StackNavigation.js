import React from 'react'
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { Text } from 'react-native';
import Home from '../screens/Home';

const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator><Stack.Screen name="Home" component={Home} /></Stack.Navigator>
  )
}

export default StackNavigation