import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import VODScreen from './VODScreen';
import GiaiTriScreen from './GiaiTriScreen';
import DetailScreen from './DetailScreen';

const Stack = createStackNavigator();

const MainApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="VOD" component={VODScreen} />
        <Stack.Screen name="GiaiTriScreen" component={GiaiTriScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainApp;
