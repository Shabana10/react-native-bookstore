// In App.js in a new project

import * as React from 'react';

import { View, Text } from 'react-native';
import Login from '../screens/Login'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen  options={{ title: 'Overview',headerShown:false }} 
        name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;