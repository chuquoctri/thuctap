import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ThuVienScreen = () => {
  const navigation = useNavigation();
  const [selectedLocationIndex, setSelectedLocationIndex] = useState(null);

  const location = [
    { name: 'Khoảnh khắc vàng', image: require('./assets/thuvien_1.webp') },
    { name: 'Tháp Chàm Po Nagar', image: require('./assets/dulich_5.jpg') },
    { name: 'Lễ hội biển Nha Trang', image: require('./assets/thuvien_2.jpg') },
    { name: 'Đảo Trí Nguyên', image: require('./assets/thuvien_3.jpg') },
  ];

  const handleLocationPress = (index) => {
    setSelectedLocationIndex(index);
    // Chuyển hướng đến màn hình 'Detail' và truyền dữ liệu địa điểm
    navigation.navigate('Detail', location[index]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>THƯ VIỆN</Text>
        <View style={styles.divider}></View>
      </View>
      <ScrollView
        contentContainerStyle={styles.slideshow}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {location.map((loc, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.slide,
              selectedLocationIndex === index && styles.selected,
            ]}
            onPress={() => handleLocationPress(index)}
          >
            <Image source={loc.image} style={styles.image} />
            <Text style={styles.imageText}>{loc.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111418',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
  },
  divider: {
    height: 2,
    width: 600,
    backgroundColor: 'white',
    marginLeft: 250,
    marginTop: 10,
  },
  slideshow: {
    alignItems: 'center',
    marginTop: 20,
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  slide: {
    alignItems: 'center',
    marginRight: 10,
  },
  selected: {
    borderColor: 'gold',
    borderWidth: 3,
    borderRadius: 5,
  },
  image: {
    width: 300, // Điều chỉnh kích thước ảnh cho phù hợp với màn hình TV
    height: 500,
    borderRadius: 5,
  },
  imageText: {
    textAlign: 'center',
    width: 300,
    height: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    fontSize: 25,
    fontStyle: 'normal',
    position: 'absolute',
    top: 450, // Điều chỉnh vị trí văn bản để dễ đọc trên TV
  },
});

export default ThuVienScreen;
