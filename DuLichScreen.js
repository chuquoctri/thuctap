import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const DuLichScreen = () => {
  const navigation = useNavigation();
  const [selectedLocationIndex, setSelectedLocationIndex] = useState(null);

  const location = [
    {name: 'Tour du ngoạn Vịnh Nha Phú', image: require('./assets/dulich_1.jpg')},
    {name: 'Vương quốc Đảo Khỉ', image: require('./assets/dulich_2.jpg')},
    {name: 'Tour Úc từ Nha Trang', image: require('./assets/dulich_3.jpg')},
    {name: 'Thác Tà Gù', image: require('./assets/dulich_4.webp')},
    {name: 'Tháp bà Ponagar', image: require('./assets/dulich_5.jpg')},
    {name: 'Kong Forest', image: require('./assets/dulich_6.jpg')},
  ];

  const handleLocationPress = index => {
    setSelectedLocationIndex(index);
    navigation.navigate('Detail', location[index]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>DU LỊCH</Text>
        <View style={styles.divider}></View>
      </View>
      <ScrollView
        contentContainerStyle={styles.slideshow}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {location.map((location, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.slide,
              selectedLocationIndex == index && styles.selected,
            ]}
            onPress={() => handleLocationPress(index)}>
            <Image source={location.image} style={styles.image} />
            <Text style={styles.imageText}>{location.name}</Text>
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
    width: 250,
    height: 400,
    borderRadius: 5,
  },
  imageText: {
    textAlign: 'center',
    width: 250,
    height: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    fontSize: 23,
    fontStyle: 'normal',
    position: 'absolute',
    top: 350,
  },
});

export default DuLichScreen;
