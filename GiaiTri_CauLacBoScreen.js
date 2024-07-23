import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const {height: windowHeight} = Dimensions.get('window');

const dishes = [
  {
    name: ' Nha Trang Sport Unite',
    image: require('./assets/clb_1.jpg'),
    info: 'Thong tin cong vien nuoc',
    hours: 'Giờ mở cửa: 6:00 - 22:00',
    address: 'Địa chỉ: Số 1, Đường ABC',
  },
  {
    name: ' NT Fitness Gym',
    image: require('./assets/clb_2.jpg'),
    info: 'Th tin Công viên phao nổi SeaLife Nha Trang ',
    hours: 'Giờ mở cửa: 6:00 - 22:00',
    address: 'Địa chỉ: Số 1, Đường ABC',
  },
  {
    name: 'Olympic Nha Trang Gym & Fitness',
    image: require('./assets/clb_3.jpg'),
    info: 'Thông tin Khu du lịch Waterland Suối Thạch Lâm',
    hours: 'Giờ mở cửa: 6:00 - 22:00',
    address: 'Địa chỉ: Số 1, Đường ABC',
  },
  {
    name: 'Venus Yoga & Fitness Center',
    image: require('./assets/clb_4.jpg'),
    info: 'Thông tin công viên nước Nha Trang',
    hours: 'Giờ mở cửa: 6:00 - 22:00',
    address: 'Địa chỉ: Số 1, Đường ABC',
  },
];

const GiaiTri_CauLacBoScreen = () => {
  const [selectedDish, setSelectedDish] = useState(dishes[0]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.pageTitle}>Câu lạc bộ</Text>
        <View style={styles.whiteLine}></View>
      </View>
      <View style={styles.body}>
        <View style={styles.menu}>
          <ScrollView>
            {dishes.map((dish, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setSelectedDish(dish)}
                style={styles.menuItemContainer}>
                <Text
                  style={[
                    styles.menuItem,
                    selectedDish.name === dish.name && styles.selectedMenuItem,
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
            style={[styles.image, {height: windowHeight}]}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111418',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pageTitle: {
    fontSize: 32,
    color: 'white',
  },
  whiteLine: {
    flex: 1,
    height: 1.5,
    backgroundColor: 'white',
    marginLeft: 23,
    marginTop: 15,
  },
  body: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
  },
  menu: {
    width: '21%',
  },
  menuItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  menuItem: {
    color: 'white',
    fontSize: 17,
  },
  selectedMenuItem: {
    color: 'yellow',
  },
  menuArrow: {
    color: 'yellow',
    fontSize: 17,
  },
  imageContainer: {
    width: '40%',
  },
  image: {
    width: '100%',
    height: '50%',
    resizeMode: 'cover',
  },
  infoContainer: {
    width: '40%',
    paddingLeft: 10,
  },
  dishName: {
    color: 'white',
    fontSize: 20,
    marginBottom: 10,
  },
  dishInfo: {
    color: 'white',
    marginBottom: 10,
    height:'73%'
  },
  yellowLine: {
    height: 1,
    backgroundColor: 'yellow',
    marginVertical: 10,
  },
  hours: {
    color: 'white',
    marginBottom: 5,
  },
  address: {
    color: 'white',
  },
});

export default GiaiTri_CauLacBoScreen;
