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
import DetailScreen from './AmThuc_AnGiScreen';
import AmThuc_CaPheScreen from './AmThuc_CaPheScreen';
import AmThuc_NhaHangScreen from './AmThuc_NhaHangScreen';


import DuLichScreen from './DuLichScreen';
import ThuVienScreen from './ThuVienScreen';
import AmThuc_DacSanScreen from './AmThuc_DacSanScreen';


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
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="AmThuc_CaPheScreen" component={AmThuc_CaPheScreen} />
        <Stack.Screen name='AmThuc_NhaHangScreen' component={AmThuc_NhaHangScreen}/>
        <Stack.Screen name='AmThuc_DacSanScreen' component={AmThuc_DacSanScreen}/>

        <Stack.Screen name="DuLichScreen" component={DuLichScreen} />
        <Stack.Screen name="ThuVienScreen" component={ThuVienScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

AppRegistry.registerComponent(appName, () => MainApp);
