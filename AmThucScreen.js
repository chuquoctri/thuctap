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

const AmThucScreen = () => {
  const navigation = useNavigation();
  const [selectedLocationIndex, setSelectedLocationIndex] = useState(null);

  const location = [
    {name: 'Ăn gì ở đâu', image: require('./assets/amthuc_1.jpg')},
    {name: 'Cà phê', image: require('./assets/amthuc_2.webp')},
    {name: 'Nhà hàng', image: require('./assets/amthuc_3.jpg')},
    {name: 'Đặc sản', image: require('./assets/amthuc_4.jpg')},
  ];

  const handleLocationPress = index => {
    setSelectedLocationIndex(index);
    if (index === 0) {
      navigation.navigate('Detail', {location: location[index]});
    } else if (index === 1) {
      navigation.navigate('AmThuc_CaPheScreen', {location: location[index]});
    } 
    else if (index === 2) {
      navigation.navigate('AmThuc_NhaHangScreen', {location: location[index]});
    } else if (index === 3) {
      navigation.navigate('AmThuc_DacSanScreen', {location: location[index]});
    } else {
      // Handle navigation for other items if needed
      console.log('Navigate to detailed screen of:', location[index].name);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>ẨM THỰC</Text>
        <View style={styles.divider}></View>
      </View>
      <ScrollView
        contentContainerStyle={styles.slideshow}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {location.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.slide,
              selectedLocationIndex === index && styles.selected,
            ]}
            onPress={() => handleLocationPress(index)}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.imageText}>{item.name}</Text>
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
    fontSize: 33,
    fontStyle: 'normal',
    position: 'absolute',
    top: 350,
  },
});

export default AmThucScreen;
