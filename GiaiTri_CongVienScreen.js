import React, {useState} from "react";
import{View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions, SectionList,} from 'react-native';

const {height: windowHeight} = Dimensions.get('window');

const dishes = [
  {
    name: ' Công viên nước Golden Peak Park',
    image: require('./assets/congvien_1.jpg'),
    info: 'Thong tin cong vien nuoc',
    hours: 'Giờ mở cửa: 6:00 - 22:00',
    address: 'Địa chỉ: Số 1, Đường ABC',
  },
  {
    name: ' Công viên phao nổi SeaLife Nha Trang',
    image: require('./assets/congvien_2.jpg'),
    info: 'Th tin Công viên phao nổi SeaLife Nha Trang ',
    hours: 'Giờ mở cửa: 6:00 - 22:00',
    address: 'Địa chỉ: Số 1, Đường ABC',
  },
  {
    name: 'Khu du lịch Waterland Suối Thạch Lâm',
    image: require('./assets/congvien_3.jpg'),
    info: 'Thông tin Khu du lịch Waterland Suối Thạch Lâm',
    hours: 'Giờ mở cửa: 6:00 - 22:00',
    address: 'Địa chỉ: Số 1, Đường ABC',
  },
  {
    name: 'Công viên nước Nha Trang',
    image: require('./assets/congvien_4.jpg'),
    info: 'Thông tin công viên nước Nha Trang',
    hours: 'Giờ mở cửa: 6:00 - 22:00',
    address: 'Địa chỉ: Số 1, Đường ABC',
  },
];

const GiaiTri_CongVien=()=>{
    const [selectedDish, setSelectedDish]= useState(dishes[0]);
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.pageTitle}>Công viên</Text>
                <View style={styles.whiteLine}></View>
            </View>
            <View style={styles.body}>
                <View style={styles.menu}>
                    <ScrollView>
                        {dishes.map((dish, index)=>(
                            <TouchableOpacity 
                            key={index}
                            onPress={()=>setSelectedDish(dish)}
                            style={styles.menuItemContainer}>
                                <Text style={[
                                    styles.menuItem,
                                    selectedDish.name===dish.name && styles.selectedMenuItem,
                                ]}>
                                    {dish.name}
                                </Text>
                                {selectedDish.name === dish.name && (
                                    <Text style={styles.menuArrow}>▶</Text>
                                )}
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
                <View style={styles.imageContainer}>
                    <Image 
                        source={selectedDish.image}
                        style={[styles.image, {height:windowHeight}]}
                        resizeMode="cover"
                    />
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.dishName}>{selectedDish.name}</Text>
                    <Text style={styles.dishInfo}>{selectedDish.info}</Text>
                    <View style={styles.yellowLine}></View>
                    <Text style={styles.hours}>{selectedDish.hours}</Text>
                    <Text style={styles.address}>{selectedDish.address}</Text>
                </View>
            </View>
        </View>
    );
};

const styles=StyleSheet.create({

});