/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import VODScreen from './VODScreen';
import HomeScreen from './HomeScreen';

// Màn hình giải trí
import GiaiTriScreen from './GiaiTriScreen';
import GiaiTri_CongVienScreen from './GiaiTri_CongVienScreen';
import GiaiTri_SanKhauScreen from './GiaiTri_SanKhauScreen';
import GiaiTri_CauLacBoScreen from './GiaiTri_CauLacBoScreen';
import GiaiTri_BarScreen from './GiaiTri_BarScreen';
import GiaiTri_MuaSamScreen from './GiaiTri_MuaSam_Screen';

// Màn hình ẩm thực
import AmThucScreen from './AmThucScreen';
import DetailScreen from './AmThuc_AnGiScreen';
import AmThuc_CaPheScreen from './AmThuc_CaPheScreen';
import AmThuc_NhaHangScreen from './AmThuc_NhaHangScreen';
import AmThuc_DacSanScreen from './AmThuc_DacSanScreen';

// Màn hình du lịch
import DuLichScreen from './DuLichScreen';
import DuLich_VinhNhaTrangScreen from './DuLich_VinhNhaTrangScreen';
import DuLich_DaoKhiScreen from './DuLich_DaoKhiScreen';
import DuLich_TourUcScreen from './DuLich_TourUcScreen';
import DuLich_ThacTaGuScreen from './DuLich_ThacTaGuScreen';
import DuLich_ThapBaScreen from './DuLich_ThapBaScreen';
import DuLich_KongForestScreen from './DuLich_KongForestScreen';


//Màn hình Thư viện
import ThuVienScreen from './ThuVienScreen';
import ThuVien_DetailScreen from './ThuVien_KhoanhKhac';
import ThuVien_ThapChamScreen from './ThuVien_ThapChamScreen';
import ThuVien_LeHoiScreen from './ThuVien_LeHoiScreen';
import ThuVien_DaoTNScreen from './ThuVien_DaoTNScreen';

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
        <Stack.Screen name="GiaiTri_CongVienScreen" component={GiaiTri_CongVienScreen} />
        <Stack.Screen name="GiaiTri_SanKhauScreen" component={GiaiTri_SanKhauScreen} />
        <Stack.Screen name="GiaiTri_CauLacBoScreen" component={GiaiTri_CauLacBoScreen} />
        <Stack.Screen name="GiaiTri_BarScreen" component={GiaiTri_BarScreen} />
        <Stack.Screen name="GiaiTri_MuaSamScreen" component={GiaiTri_MuaSamScreen} />

        <Stack.Screen name="AmThucScreen" component={AmThucScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="AmThuc_CaPheScreen" component={AmThuc_CaPheScreen} />
        <Stack.Screen name="AmThuc_NhaHangScreen" component={AmThuc_NhaHangScreen} />
        <Stack.Screen name="AmThuc_DacSanScreen" component={AmThuc_DacSanScreen} />

        <Stack.Screen name="DuLichScreen" component={DuLichScreen} />
        <Stack.Screen name="DuLich_VinhNhaTrangScreen" component={DuLich_VinhNhaTrangScreen} />
        <Stack.Screen name="DuLich_DaoKhiScreen" component={DuLich_DaoKhiScreen} />
        <Stack.Screen name="DuLich_TourUcScreen" component={DuLich_TourUcScreen} />
        <Stack.Screen name="DuLich_ThacTaGuScreen" component={DuLich_ThacTaGuScreen} />
        <Stack.Screen name="DuLich_ThapBaScreen" component={DuLich_ThapBaScreen} />
        <Stack.Screen name="DuLich_KongForestScreen" component={DuLich_KongForestScreen} />
        
        <Stack.Screen name="ThuVienScreen" component={ThuVienScreen} />
        <Stack.Screen name="ThuVien_DetailScreen" component={ThuVien_DetailScreen} />
        <Stack.Screen name="ThuVien_ThapChamScreen" component={ThuVien_ThapChamScreen} />
        <Stack.Screen name="ThuVien_LeHoiScreen" component={ThuVien_LeHoiScreen} />
        <Stack.Screen name="ThuVien_DaoTNScreen" component={ThuVien_DaoTNScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

AppRegistry.registerComponent(appName, () => MainApp);
