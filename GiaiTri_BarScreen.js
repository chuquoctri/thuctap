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

const dishes = [
  {
    name: 'Skylight Nha Trang',
    image: require('./assets/bar_1.jpg'),
    info: 'thong tin',
    hours: 'Giờ mở cửa: 24/24',
    address: 'Địa chỉ: Nha Trang - Khánh Hòa',
  },
  {
    name: 'Kisho Club',
    image: require('./assets/bar_2.jpg'),
    info: 'thong tin',
    hours: 'Giờ mở cửa: 24/24',
    address: 'Địa chỉ: Nha Trang - Khánh Hòa',
  },
  {
    name: 'Havana Club Nha Trang',
    image: require('./assets/bar_3.jpg'),
    info: 'thong tin',
    hours: 'Giờ mở cửa: 24/24',
    address: 'Địa chỉ: Nha Trang - Khánh Hòa',
  },
  {
    name: 'Paradise Club Nha Trang',
    image: require('./assets/bar_4.jpg'),
    info: 'thong tin',
    hours: 'Giờ mở cửa: 24/24',
    address: 'Địa chỉ: Nha Trang - Khánh Hòa',
  },
];

const GiaiTri_BarScreen = ()=>{
    const [selectedDish, setSelectedDish] = useState(dishes[0]);
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.pageTitle}>Bar</Text>
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
                    style=
                    {[
                      styles.menuItem,
                      selectedDish.name === dish.name &&
                        styles.selectedMenuItem,
                    ]}
                    >{dish.name}
                  </Text>
                  {selectedDish.name === dish.name &&(
                    <Text style={styles.menuArrow}>▶</Text>
                  )}
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
          <View style={styles.imageContainer}>
              <Image source={selectedDish.image}
              style={styles.image}
              resizeMode='cover'/>
          </View>
          <View style={styles.infoContainer}>
              <Text style={styles.dishName}>{selectedDish.name} </Text>
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
    padding:10,
  },
  header:{
    flexDirection:'row',
    alignItems:'center'
  },
  pageTitle:{
    fontSize:32,
    color:'white',
    width:'40%'
  },
  whiteLine:{
    flex:1,
    height:1.5,
    backgroundColor:'white'
  },
  body:{
    flex:1,
    flexDirection:'row',
    marginTop:20,
  },
  menu:{
    width:'22%'
  },
  menuItemContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingVertical:20,
  },
  menuItem:{
    color:'white',
    fontSize:17,
  },
  selectedMenuItem:{
    color:'yellow'
  },
  menuArrow:{
    color:'yellow',
    fontSize:17,
  },
  imageContainer:{
    width:'40%'
  },
  image:{
    width:'100%',
    height:'100%',
    resizeMode:'cover',
    marginLeft:20,
  },
  infoContainer:{
    width:'40%',
    paddingLeft:40,
  },
  dishName:{
    color:'white',
    fontSize:20,
    marginBottom:10,
  },
  dishInfo:{
    color:'white',
    marginBottom:10,
    height:'73%'
  },
  yellowLine:{
    height:1,
    backgroundColor:'yellow',
    marginVertical:10,
  },
  hours:{
    color:'white',
    marginBottom:5,
  },
  address:{
    color:'white',
  }

});
export default GiaiTri_BarScreen;
