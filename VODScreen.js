import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';

// Thông tin du lịch
const slides = [
  {
    id: '1',
    title: 'TOUR DU NGOẠN VỊNH NHA PHÚ',
    description:
      'Địa chỉ: Đá Chồng, Thôn Cát Lợi, Xã Vĩnh Lương, TP. Nha Trang, T. Khánh Hòa',
    image: require('./assets/Nhaphu.jpg'),
  },
  {
    id: '2',
    title: 'ĐẢO HOA LAN KỲ THÚ',
    description: 'Địa chỉ: Nha Trang - Khánh Hòa',
    image: require('./assets/daohoalan.jpg'),
  },
  {
    id: '3',
    title: 'ĐẢO KHỈ NHA TRANG',
    description: 'Địa chỉ: Nha Trang - Khánh Hòa',
    image: require('./assets/tournhaphu.jpg'),
  },
  {
    id: '4',
    title: 'HOÀNG HÔN NHA PHÚ',
    description: 'Địa chỉ: Nha Trang - Khánh Hòa',
    image: require('./assets/hoanghon.jpg'),
  },
];

// Thông tin nhà hàng
const slides_nhahang = [
  {
    id: '1',
    title: 'NHÀ HÀNG- CAFE SÂN VƯỜN YASAKA',
    description: 'Thời lượng: 10p',
    image: require('./assets/nhahang.webp'),
  },
];

// Thông tin đặc sản
const slides_dacsan = [
  {
    id: '1',
    title: 'ĐÔNG TRÙNG HẠ THẢO TƯƠI',
    description: 'Thời lượng: 10p',
    image: require('./assets/dacsan.jpg'),
  },
];

// Thông tin spa
const slides_spa = [
  {
    id: '1',
    title: 'TẮM BÙN KHOÁNG THÁP BÀ NHA TRANG',
    description: 'Thời lượng: 10p',
    image: require('./assets/spa.webp'),
  },
];

const App = () => {
  const [selectedSlide, setSelectedSlide] = useState(slides[0]);
  const [currentSlides, setCurrentSlides] = useState(slides);
  const [selectedMenu, setSelectedMenu] = useState('VOD');

  const handleSlidePress = item => {
    setSelectedSlide(item); // Cập nhật slide được chọn
  };

  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => handleSlidePress(item)}>
      <Image source={item.image} style={styles.slideImage} />
    </TouchableOpacity>
  );

  const handleMenuPress = (menu, slides) => {
    setCurrentSlides(slides); // Hiển thị danh sách slides khi chọn mục
    setSelectedSlide(slides[0]); // Chọn slide đầu tiên của slides
    setSelectedMenu(menu);
  };

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        {/* Menu dọc */}
        <View style={styles.pageTitle}>
          <Text style={styles.menuText}>VOD</Text>
        </View>
        <TouchableOpacity onPress={() => handleMenuPress('Du lịch', slides)}>
          <Text
            style={[
              styles.menuText,
              selectedMenu === 'Du lịch' && styles.selectedMenuText,
            ]}>
            Du lịch {selectedMenu === 'Du lịch' && '▶'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleMenuPress('Nhà hàng', slides_nhahang)}>
          <Text
            style={[
              styles.menuText,
              selectedMenu === 'Nhà hàng' && styles.selectedMenuText,
            ]}>
            Nhà hàng {selectedMenu === 'Nhà hàng' && '▶'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleMenuPress('Đặc sản', slides_dacsan)}>
          <Text
            style={[
              styles.menuText,
              selectedMenu === 'Đặc sản' && styles.selectedMenuText,
            ]}>
            Đặc sản {selectedMenu === 'Đặc sản' && '▶'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleMenuPress('Spa', slides_spa)}>
          <Text
            style={[
              styles.menuText,
              selectedMenu === 'Spa' && styles.selectedMenuText,
            ]}>
            Spa {selectedMenu === 'Spa' && '▶'}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.back_info}>
          <View style={styles.info}>
            <Text style={styles.infoText}>{selectedSlide.title}</Text>
            <Text style={styles.infoText_des}>{selectedSlide.description}</Text>
          </View>
          <View style={styles.background}>
            <Image source={selectedSlide.image} style={styles.Image} />
          </View>
        </View>
        <FlatList
          data={currentSlides}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal
          style={styles.slideshow}
          contentContainerStyle={styles.slideshowContainer}
        />
      </View>
    </View>
  );
};

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#111418',
  },
  pageTitle: {
    fontSize: 32,
    color: 'white',
  },
  menu: {
    width: width * 0.25,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  menuText: {
    fontSize: 25,
    padding: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  selectedMenuText: {
    color: 'yellow',
  },
  content: {
    flex: 1,
    flexDirection: 'column',
  },
  back_info: {
    flexDirection: 'row',
  },
  info: {
    height: 280,
    width: 210,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 20,
    color: 'white',
  },
  infoText_des: {
    marginTop: 10,
    fontSize: 12,
    color: 'white',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 20,
  },
  Image: {
    width: '90%',
    height: 300,
    marginLeft: 54,
  },
  slideshow: {
    height: height * 0.5,
  },
  slideshowContainer: {
    alignItems: 'center',
  },
  slideImage: {
    width: width * 0.18,
    height: height * 0.4,
    margin: 10,
    resizeMode: 'cover',
  },
});

export default App;
