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

const GiaiTriScreen = () => {
  const [selectedLocationIndex, setSelectedLocationIndex] = useState(null);
  const navigation = useNavigation();

  const locations = [
    {name: 'Công viên giải trí', image: require('./assets/giaitri_1.jpg')},
    {name: 'Sân khấu', image: require('./assets/giaitri_2.jpg')},
    {name: 'Câu lạc bộ thể thao', image: require('./assets/giaitri_3.jpg')},
    {name: 'Bar', image: require('./assets/giaitri_4.jpg')},
    {name: 'Mua sắm', image: require('./assets/giaitri_5.webp')},
  ];

  const handleLocationPress = index => {
    setSelectedLocationIndex(index);
    navigation.navigate('Detail', locations[index]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>GIẢI TRÍ</Text>
        <View style={styles.divider}></View>
      </View>
      <ScrollView
        contentContainerStyle={styles.slideshow}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {locations.map((location, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.slide,
              selectedLocationIndex === index && styles.selected,
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
    fontSize: 33,
    fontStyle: 'normal',
    position: 'absolute',
    top: 350,
  },
});

export default GiaiTriScreen;
