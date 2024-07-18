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
    name: 'Cà phê Robusta',
    image: require('./assets/caphe_1.jpg'),
    info: 'Khi "nhập cư" vào thành phố biển Nha Trang xinh đẹp,món Bún Bò nức tiếng xứ Huế đã có ít nhiều biến tấuđể hợp khẩu vị với người dân địa phương hơn nhưngvẫn giữ được chất Huế thân thuộc.Gọi Bún Bò là món ăn dễ tính cũng đúng vì có thể dùngkèm với các loại rau thơm, xà lách và cũng có thể ănvới các loại rau xắt ghém như bắp chuối, giá cọng nhỏ.Nhưng nói Bún Bò là món ăn khó tính cũng không saivì để lột tả đúng hương thơm đậm đà của xứ Huế, đòihỏi người đầu bếp phải thật "kỳ công" vào nồi nước dùng. Nước sốt chấm thịt có thể là chén nước mắm xắt ớt và cũng có thể là chén tương ớt trộn sa tế sả. Ghé Yasaka Saigon Nhatrang, bạn sẽ được thưởng thức một tô bún với nước lèo ngon ngọt đậm vị xương cũng sợi bún to, dùng kèm với các loại thịt nạm, chả thơm ngon và những cọng rau xanh tươi rói.',
    hours: 'Giờ mở cửa: 6:00 - 22:00',
    address: 'Địa chỉ: Số 1, Đường ABC',
  },
  {
    name: 'Cà phê Chồn',
    image: require('./assets/caphe_2.jpg'),
    info: 'Khi "nhập cư" vào thành phố biển Nha Trang xinh đẹp,món Bún Bò nức tiếng xứ Huế đã có ít nhiều biến tấuđể hợp khẩu vị với người dân địa phương hơn nhưngvẫn giữ được chất Huế thân thuộc.Gọi Bún Bò là món ăn dễ tính cũng đúng vì có thể dùngkèm với các loại rau thơm, xà lách và cũng có thể ănvới các loại rau xắt ghém như bắp chuối, giá cọng nhỏ.Nhưng nói Bún Bò là món ăn khó tính cũng không saivì để lột tả đúng hương thơm đậm đà của xứ Huế, đòihỏi người đầu bếp phải thật "kỳ công" vào nồi nước dùng. Nước sốt chấm thịt có thể là chén nước mắm xắt ớt và cũng có thể là chén tương ớt trộn sa tế sả. Ghé Yasaka Saigon Nhatrang, bạn sẽ được thưởng thức một tô bún với nước lèo ngon ngọt đậm vị xương cũng sợi bún to, dùng kèm với các loại thịt nạm, chả thơm ngon và những cọng rau xanh tươi rói.',
    hours: 'Giờ mở cửa: 6:00 - 22:00',
    address: 'Địa chỉ: Số 2, Đường ABC',
  },
  {
    name: 'Cà phê Arabica',
    image: require('./assets/caphe_3.jpeg'),
    info: 'Khi "nhập cư" vào thành phố biển Nha Trang xinh đẹp,món Bún Bò nức tiếng xứ Huế đã có ít nhiều biến tấuđể hợp khẩu vị với người dân địa phương hơn nhưngvẫn giữ được chất Huế thân thuộc.Gọi Bún Bò là món ăn dễ tính cũng đúng vì có thể dùngkèm với các loại rau thơm, xà lách và cũng có thể ănvới các loại rau xắt ghém như bắp chuối, giá cọng nhỏ.Nhưng nói Bún Bò là món ăn khó tính cũng không saivì để lột tả đúng hương thơm đậm đà của xứ Huế, đòihỏi người đầu bếp phải thật "kỳ công" vào nồi nước dùng. Nước sốt chấm thịt có thể là chén nước mắm xắt ớt và cũng có thể là chén tương ớt trộn sa tế sả. Ghé Yasaka Saigon Nhatrang, bạn sẽ được thưởng thức một tô bún với nước lèo ngon ngọt đậm vị xương cũng sợi bún to, dùng kèm với các loại thịt nạm, chả thơm ngon và những cọng rau xanh tươi rói.',
    hours: 'Giờ mở cửa: 6:00 - 22:00',
    address: 'Địa chỉ: Số 2, Đường ABC',
  },
  {
    name: 'Cà phê Mít',
    image: require('./assets/caphe_4.jpg'),
    info: 'Khi "nhập cư" vào thành phố biển Nha Trang xinh đẹp,món Bún Bò nức tiếng xứ Huế đã có ít nhiều biến tấuđể hợp khẩu vị với người dân địa phương hơn nhưngvẫn giữ được chất Huế thân thuộc.Gọi Bún Bò là món ăn dễ tính cũng đúng vì có thể dùngkèm với các loại rau thơm, xà lách và cũng có thể ănvới các loại rau xắt ghém như bắp chuối, giá cọng nhỏ.Nhưng nói Bún Bò là món ăn khó tính cũng không saivì để lột tả đúng hương thơm đậm đà của xứ Huế, đòihỏi người đầu bếp phải thật "kỳ công" vào nồi nước dùng. Nước sốt chấm thịt có thể là chén nước mắm xắt ớt và cũng có thể là chén tương ớt trộn sa tế sả. Ghé Yasaka Saigon Nhatrang, bạn sẽ được thưởng thức một tô bún với nước lèo ngon ngọt đậm vị xương cũng sợi bún to, dùng kèm với các loại thịt nạm, chả thơm ngon và những cọng rau xanh tươi rói.',
    hours: 'Giờ mở cửa: 6:00 - 22:00',
    address: 'Địa chỉ: Số 2, Đường ABC',
  },
];

const AmThuc_CaPheScreen = () => {
  const [selectedDish, setSelectedDish] = useState(dishes[0]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.pageTitle}>Cà phê</Text>
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
                  <Text style={styles.menuArrow}> ▶</Text>
                )}
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={selectedDish.image}
            style={[styles.image, {height: windowHeight}]} // Đặt chiều cao cho ảnh bằng chiều cao của màn hình
            resizeMode="cover" // hoặc "stretch" tùy vào yêu cầu của bạn
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
    width: '20%',
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

export default AmThuc_CaPheScreen;
