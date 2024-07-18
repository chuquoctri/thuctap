import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  View,
  ImageBackground,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  Text,
} from 'react-native';

const App = () => {
  const navigation = useNavigation(); // Sử dụng useNavigation để truy cập đối tượng navigation
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [selectedButton, setSelectedButton] = useState(null); // State để lưu index của button được chọn

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('vi-VN', {
        hour: '2-digit',
        minute: '2-digit',
      });
      const dateString = now.toLocaleDateString('vi-VN');
      setCurrentTime(timeString);
      setCurrentDate(dateString);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('./assets/Home_left.png')}
        style={styles.backgroundImage}>
        <View style={styles.content}>
          <View style={styles.leftContainer}>
            <Image
              source={require('./assets/Home_left.png')}
              style={styles.leftImage}
            />
          </View>
          <View style={styles.buttonContainer}>
            {/* Sử dụng View để bao các button trong cùng một hàng */}
            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={[
                  styles.button,
                  selectedButton === 0 && styles.selectedButton,
                ]}
                onPress={() => setSelectedButton(0)}>
                <Image
                  source={require('./assets/tv-show.png')}
                  style={styles.iconImage}
                />
                <Text style={styles.buttonText}>Television</Text>
                <Text style={styles.buttonText_2}>Kênh truyền hình uy tín</Text>
                <Text style={styles.buttonText_2}>trong nước và quốc tế</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.button,
                  selectedButton === 1 && styles.selectedButton,
                ]}
                onPress={() => {
                  setSelectedButton(1);
                  navigation.navigate('VOD'); // Chuyển trang sang VODScreen
                }}>
                <Image
                  source={require('./assets/video.png')}
                  style={styles.iconImage}
                />
                <Text style={styles.buttonText}>VOD</Text>
                <Text style={styles.buttonText_2}>Video theo yêu cầu cho</Text>
                <Text style={styles.buttonText_2}>giải trí cá nhân bạn</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={[
                  styles.button,
                  selectedButton === 2 && styles.selectedButton,
                ]}
                onPress={() => {
                  setSelectedButton(2);
                  navigation.navigate('AmThucScreen');
                }}>
                <Image
                  source={require('./assets/culinary.png')}
                  style={styles.iconImage}
                />
                <Text style={styles.buttonText}>Ẩm thực</Text>
                <Text style={styles.buttonText_2}>Khám phá ẩm thực vùng</Text>
                <Text style={styles.buttonText_2}>miền tỉnh Khánh Hòa</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.button,
                  selectedButton === 3 && styles.selectedButton,
                ]}
                onPress={() => {
                  setSelectedButton(3);
                  navigation.navigate('GiaiTriScreen');
                }}>
                <Image
                  source={require('./assets/confetti.png')}
                  style={styles.iconImage}
                />
                <Text style={styles.buttonText}>Giải trí</Text>
                <Text style={styles.buttonText_2}>
                  Khám phá điểm giải trí vui
                </Text>
                <Text style={styles.buttonText_2}>vẻ tại nơi đây</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={[
                  styles.button,
                  selectedButton === 4 && styles.selectedButton,
                ]}
                onPress={() => {
                  setSelectedButton(4);
                  navigation.navigate('DuLichScreen');
                }}>
                <Image
                  source={require('./assets/location.png')}
                  style={styles.iconImage}
                />
                <Text style={styles.buttonText}>Du lịch</Text>
                <Text style={styles.buttonText_2}>
                  Kế hoạch du lịch với nhiều
                </Text>
                <Text style={styles.buttonText_2}>điểm đến thú vị</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.button,
                  selectedButton === 5 && styles.selectedButton,
                ]}
                onPress={() => {
                  setSelectedButton(5);
                  navigation.navigate('ThuVienScreen');
                }}>
                <Image
                  source={require('./assets/gallery.png')}
                  style={styles.iconImage}
                />
                <Text style={styles.buttonText}>Thư viện</Text>
                <Text style={styles.buttonText_2}>Hình ảnh đẹp xung quanh</Text>
                <Text style={styles.buttonText_2}>Khánh Hòa</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                style={[
                  styles.buttonfreestyle,
                  selectedButton === 7 && styles.selectedButton,
                ]}
                onPress={() => setSelectedButton(7)}>
                <View style={styles.textButtonNNT}>
                  <View style={styles.textButtonNN}>
                    <Image
                      source={require('./assets/internet.png')}
                      style={styles.iconImage}
                    />
                    <Text style={styles.buttonTextNN}>Ngôn ngữ</Text>
                  </View>
                  <View>
                    <Text style={styles.textButtonNNTime}>{currentTime}</Text>
                    <Text style={styles.textButtonNNDay}>{currentDate}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: width,
    height: height,
    resizeMode: 'cover',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
  },
  leftContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftImage: {
    width: '80%',
    height: '150%',
    resizeMode: 'contain',
    marginLeft: -50,
  },
  iconImage: {
    width: 50,
    height: 50,
    marginTop: -5,
    tintColor: 'white',
  },
  buttonContainer: {
    marginTop: 10,
    flex: 1,
    justifyContent: 'center',
    marginLeft: -40,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  buttonfreestyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 10,
    marginLeft: 20,
    width: 463, // Tùy chỉnh chiều rộng của nút
    borderRadius: 15,
  },
  button: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Màu đen với độ mờ 0.5
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 15,
    marginBottom: 10,
    width: 200,
    height: 125, // Tùy chỉnh chiều rộng của nút
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonTextNN: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 5,
  },
  textButtonNNTime: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 130,
    marginTop: 5,
  },
  textButtonNNDay: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 120,
  },
  buttonText_2: {
    color: 'white',
    fontSize: 13,
  },
  textButtonNN: {
    flexDirection: 'row',
    marginTop: 10,
    marginRight: 60,
  },
  textButtonNNT: {
    flexDirection: 'row',
  },
  selectedButton: {
    borderColor: 'yellow',
    borderWidth: 2,
  },
});

export default App;
