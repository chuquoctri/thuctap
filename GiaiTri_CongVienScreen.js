import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';

const {height: windowHeight} = Dimensions.get('window');

const dishes = [
  {
    name: 'Công viên nước Golden Peak Park',
    image: require('./assets/congvien_1.jpg'),
    info: 'Thông tin công viên nước Golden Peak Park',
    hours: 'Giờ mở cửa: 6:00 - 22:00',
    address: 'Địa chỉ: Số 1, Đường ABC',
  },
  {
    name: 'Công viên phao nổi SeaLife Nha Trang',
    image: require('./assets/congvien_2.jpg'),
    info: 'Thông tin công viên phao nổi SeaLife Nha Trang',
    hours: 'Giờ mở cửa: 6:00 - 22:00',
    address: 'Địa chỉ: Số 1, Đường ABC',
  },
  {
    name: 'Khu du lịch Waterland Suối Thạch Lâm',
    image: require('./assets/congvien_3.jpg'),
    info: 'Thông tin khu du lịch Waterland Suối Thạch Lâm',
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

const GiaiTri_CongVienScreen = () => {
  const [selectedDish, setSelectedDish] = useState(dishes[0]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const scrollViewRef = useRef(null);

  const handleKeyPress = event => {
    if (Platform.OS === 'android') {
      switch (event.nativeEvent.keyCode) {
        case 19: // Arrow Up
          setSelectedIndex(prevIndex =>
            prevIndex > 0 ? prevIndex - 1 : dishes.length - 1,
          );
          break;
        case 20: // Arrow Down
          setSelectedIndex(prevIndex =>
            prevIndex < dishes.length - 1 ? prevIndex + 1 : 0,
          );
          break;
        case 66: // Enter/OK
          setSelectedDish(dishes[selectedIndex]);
          break;
        default:
          break;
      }
    }
  };

  React.useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        y: selectedIndex * 60, // Adjust the scroll amount as needed
        animated: true,
      });
    }
  }, [selectedIndex]);

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback>
        <View style={styles.header}>
          <Text style={styles.pageTitle}>Công viên</Text>
          <View style={styles.whiteLine}></View>
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.body}>
        <View style={styles.menu}>
          <ScrollView ref={scrollViewRef}>
            {dishes.map((dish, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setSelectedDish(dish)}
                onFocus={() => setSelectedIndex(index)}
                style={[
                  styles.menuItemContainer,
                  selectedIndex === index && styles.selectedMenuItemContainer,
                ]}
                accessible={true}
                accessibilityRole="button"
                accessibilityLabel={dish.name}>
                <Text
                  style={[
                    styles.menuItem,
                    selectedIndex === index && styles.selectedMenuItem,
                  ]}>
                  {dish.name}
                </Text>
                {selectedIndex === index && (
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
  selectedMenuItemContainer: {
    backgroundColor: '#333', // Màu nền khi được chọn
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
    height: '73%',
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

export default GiaiTri_CongVienScreen;
