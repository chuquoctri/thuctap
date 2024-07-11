/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import VODScreen from './VODScreen';
import HomeScreen from './HomeScreen';
import GiaiTriScreen from './GiaiTriScreen';
import AmThucScreen from './AmThucScreen';
import DuLichScreen from './DuLichScreen';
import ThuVienScreen from './ThuVienScreen';
import DetailScreen from './DetailScreen';

const Stack = createStackNavigator();

const MainApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerShown: false, // Ẩn thanh tiêu đề cho tất cả các màn hình
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="VOD" component={VODScreen} />
        <Stack.Screen name="GiaiTriScreen" component={GiaiTriScreen} />
        <Stack.Screen name="AmThucScreen" component={AmThucScreen} />
        <Stack.Screen name="DuLichScreen" component={DuLichScreen} />
        <Stack.Screen name="ThuVienScreen" component={ThuVienScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

AppRegistry.registerComponent(appName, () => MainApp);
