import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

const ThuVien_DetailScreen = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [prevButtonPressed, setPrevButtonPressed] = useState(false);
  const [nextButtonPressed, setNextButtonPressed] = useState(false);

  const images = [
    {name: 'Khoảnh khắc vàng 1', source: require('./assets/khoanhkhac_1.jpg')},
    {name: 'Khoảnh khắc vàng 2', source: require('./assets/khoanhkhac_2.jpg')},
    {name: 'Khoảnh khắc vàng 3', source: require('./assets/khoanhkhac_4.webp')},
    // Add more images as needed
  ];

  const goToPreviousImage = () => {
    setCurrentImageIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
    setPrevButtonPressed(true);
    setTimeout(() => setPrevButtonPressed(false), 100);
  };

  const goToNextImage = () => {
    setCurrentImageIndex(prevIndex =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
    setNextButtonPressed(true);
    setTimeout(() => setNextButtonPressed(false), 100);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.imageName}>{images[currentImageIndex].name}</Text>
        <View style={styles.separator}></View>
      </View>
      <Image
        source={images[currentImageIndex].source}
        style={styles.image}
        resizeMode="cover"
      />
      <TouchableOpacity
        style={[
          styles.navButton,
          styles.leftButton,
          prevButtonPressed && styles.prevButtonPressed,
        ]}
        onPress={goToPreviousImage}>
        <Text
          style={[styles.buttonText, prevButtonPressed && {color: '#FFD700'}]}>
          {'<'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.navButton,
          styles.rightButton,
          nextButtonPressed && styles.nextButtonPressed,
        ]}
        onPress={goToNextImage}>
        <Text
          style={[styles.buttonText, nextButtonPressed && {color: '#FFD700'}]}>
          {'>'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111418',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '10%', // Chiếm 10% chiều cao của màn hình
    zIndex: 1, // Để header hiển thị trước hình ảnh
  },
  imageName: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
    marginLeft: 26,
  },
  separator: {
    marginLeft: 175,
    marginTop: 23,
    width: 600,
    height: 2,
    backgroundColor: 'white',
  },
  image: {
    width: '90%', // Chiếm toàn bộ chiều rộng màn hình
    height: '80%', // Chiếm 80% chiều cao của màn hình
    marginTop: 30,
  },
  navButton: {
    position: 'absolute',
    top: '40%', // Đặt ở giữa đường dọc của màn hình
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  leftButton: {
    left: -10, // Đặt ở bên trái màn hình
  },
  rightButton: {
    right: -10, // Đặt ở bên phải màn hình
  },
 
  buttonText: {
    fontSize: 60,
    color: 'white',
  },
});

export default ThuVien_DetailScreen;
