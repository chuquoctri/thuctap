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
// thông tin du lịch
const slides = [
  {
    id: '1',
    title: 'Bởi: Long Phu Tourist',
    description:
      'Địa chỉ: Đá Chồng, Thôn Cát Lợi, Xã Vĩnh Lương, TP. Nha Trang, T. Khánh Hòa',
    image: require('./assets/Nhaphu.jpg'),
  },
  {
    id: '2',
    title: 'Slide 2',
    description: 'Thông tin của Slide 2',
    image: require('./assets/daohoalan.jpg'),
  },
  {
    id: '3',
    title: 'Slide 3',
    description: 'Thông tin của Slide 3',
    image: require('./assets/tournhaphu.jpg'),
  },
  {
    id: '4',
    title: 'Slide 4',
    description: 'Thông tin của Slide 4',
    image: require('./assets/hoanghon.jpg'),
  },
];
// thông tin nhà hàng
const slides_nhahang = [
  {
    id: '1',
    title: 'NHÀ HÀNG- CAFE SÂN VƯỜN YASAKA',
    description: 'Thời lượng: 10p',
    image: require('./assets/nhahang.webp'),
  },
  {
    id: '2',
    title: 'NHÀ HÀNG- CAFE SÂN VƯỜN YASAKA',
    description: 'Thời lượng: 10p',
    image: require('./assets/nhahang.webp'),
  },
  {
    id: '3',
    title: 'NHÀ HÀNG- CAFE SÂN VƯỜN YASAKA',
    description: 'Thời lượng: 10p',
    image: require('./assets/nhahang.webp'),
  },
  {
    id: '4',
    title: 'NHÀ HÀNG- CAFE SÂN VƯỜN YASAKA',
    description: 'Thời lượng: 10p',
    image: require('./assets/nhahang.webp'),
  },
];
// thông tin đặc sản
const slides_dacsan = [
  {
    id: '1',
    title: 'ĐÔNG TRÙNG HẠ THẢO TƯƠI',
    description: 'Thời lượng: 10p',
    image: require('./assets/dacsan.jpg'),
  },
  {
    id: '2',
    title: 'ĐÔNG TRÙNG HẠ THẢO TƯƠI',
    description: 'Thời lượng: 10p',
    image: require('./assets/dacsan.jpg'),
  },
  {
    id: '3',
    title: 'ĐÔNG TRÙNG HẠ THẢO TƯƠI',
    description: 'Thời lượng: 10p',
    image: require('./assets/dacsan.jpg'),
  },
  {
    id: '4',
    title: 'ĐÔNG TRÙNG HẠ THẢO TƯƠI',
    description: 'Thời lượng: 10p',
    image: require('./assets/dacsan.jpg'),
  },
];
// thông tin spa
const slides_spa = [
  {
    id: '1',
    title: 'TẮM BÙN KHOÁNG THÁP BÀ NHA TRANG',
    description: 'Thời lượng: 10p',
    image: require('./assets/spa.webp'),
  },
  {
    id: '2',
    title: 'TẮM BÙN KHOÁNG THÁP BÀ NHA TRANG',
    description: 'Thời lượng: 10p',
    image: require('./assets/spa.webp'),
  },
  {
    id: '3',
    title: 'TẮM BÙN KHOÁNG THÁP BÀ NHA TRANG',
    description: 'Thời lượng: 10p',
    image: require('./assets/spa.webp'),
  },
  {
    id: '4',
    title: 'TẮM BÙN KHOÁNG THÁP BÀ NHA TRANG',
    description: 'Thời lượng: 10p',
    image: require('./assets/spa.webp'),
  },
];
const App = () => {
  const [selectedSlide, setSelectedSlide] = useState(slides[0]);
  const [currentSlides, setCurrentSlides] = useState(slides);

  const handleSlidePress = item => {
    setSelectedSlide(item); // Cập nhật slide được chọn
  };

  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => handleSlidePress(item)}>
      <Image source={item.image} style={styles.slideImage} />
    </TouchableOpacity>
  );

  const handleVODPress = () => {
    setCurrentSlides(slides); // Hiển thị danh sách slides khi chọn mục VOD
    setSelectedSlide(slides[0]); // Chọn slide đầu tiên của slides
    console.log('VOD selected');
  };

  const handleDuLichPress = () => {
    setCurrentSlides(slides); // Hiển thị danh sách slides khi chọn mục Du lịch
    setSelectedSlide(slides[0]); // Chọn slide đầu tiên của slides
    console.log('Du lịch selected');
  };

  const handleNhaHangPress = () => {
    setCurrentSlides(slides_nhahang); // Hiển thị danh sách slides khách sạn khi chọn mục Khách sạn
    setSelectedSlide(slides_nhahang[0]); // Chọn slide đầu tiên của slides_khachsan
    console.log('Nhà hàng selected');
  };

  const handleDacSanPress = () => {
    setCurrentSlides(slides_dacsan); // Hiển thị danh sách slides khi chọn mục Nhà Hàng
    setSelectedSlide(slides_dacsan[0]); // Chọn slide đầu tiên của slides
    console.log('Đặc sản selected');
  };

  const handleSpaPress = () => {
    setCurrentSlides(slides_spa); // Hiển thị danh sách slides khi chọn mục Đặc sắc
    setSelectedSlide(slides_spa[0]); // Chọn slide đầu tiên của slides
    console.log('Spa selected');
  };

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        {/* Menu dọc */}
        <TouchableOpacity onPress={handleVODPress}>
          <Text style={styles.menuText}>VOD</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDuLichPress}>
          <Text style={styles.menuText}>Du lịch</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNhaHangPress}>
          <Text style={styles.menuText}>Nhà hàng</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDacSanPress}>
          <Text style={styles.menuText}>Đặc sản</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSpaPress}>
          <Text style={styles.menuText}>Spa</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.back_info}>
          <View style={styles.info}>
            <Text style={styles.infoText}>{selectedSlide.title}</Text>
            <Text style={styles.infoText_des}>{selectedSlide.description}</Text>
          </View>
          <View style={styles.background}>
            <Image
              source={selectedSlide.image} // Sử dụng hình ảnh của slide được chọn
              style={styles.Image}
            />
          </View>
        </View>
        <FlatList
          data={currentSlides} // Sử dụng dữ liệu từ currentSlides (slides hoặc slides_khachsan)
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
  menu: {
    width: width * 0.25,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  menuText: {
    fontSize: 27,
    padding: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
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
