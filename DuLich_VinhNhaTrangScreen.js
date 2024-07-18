import {StyleSheet, View, Text, Image} from 'react-native';

const DuLich_VinhNhaTrangScreen =()=>{
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.pageTitle}>Tour du ngoạn vịnh Nha Phú</Text>
          <View style={styles.whiteLine}></View>
        </View>
        <View style={styles.body}>
          <View style={styles.imageContainer}>
            <Image
              source={require('./assets/dulich_1.jpg')}
              style={styles.image}
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.info}>
              Đảo Hoa Lan sẽ là nơi đầu tiên trong chuyến du ngoạn này nhé! Đảo
              Hoa Lan nằm trên dãy núi Hòn Hèo cách thành phố Nha Trang khoảng
              18km về phía Bắc. Là nơi trải mình qua cả ba hình thể: núi cao,
              đồng bằng và biển cả. Khi đến Khu du lịch Đảo Hoa Lan bạn sẽ được
              hít vào mình một không khí trong lành của rừng cây, của thác nước,
              và của cả gió biển. Vẻ đẹp hoang sơ và khí trời mà tạo hóa đã ban
              tặng cho nơi đây luôn làm cho du khách cảm thấy thật hạnh phúc khi
              được nhìn, được ngắm, được hít thở khi đến tham quan. Đến đây, bạn
              sẽ được đi dưới những hàng cây xanh mát và lan rừng khoe sắc 2 bên
              đường với bước đi nhẹ nhàng sẽ làm bạn quên đi những bộn bề của
              đời thường Chẳng những vậy, đến Đảo Hoa Lan ngoài cảnh sắc thiên
              nhiên, bạn còn có cơ hội được xem chương trình xiếc đặc sắc của
              các chú gấu, voi dễ thương nhưng cũng rất tinh nghịch. Hay đến khu
              vườn đà điểu, ngắm nhìn những anh chành, cô nàng chân dài; cho
              những chú hươu sao ăn, vuốt ve, chụp ảnh. Rồi vui vẻ, hồi hợp với
              trò cưỡi đà điểu; chơi những trò chơi trên biển như môtô nước, dù
              bay, chèo thuyền kayak, hay thả mình trên những con sóng của bãi
              biển An Bình,…
            </Text>
            <View style={styles.yellwLine}></View>
            <Text style={styles.address}>
              Địa chỉ: Nha Trang - Khánh Hòa
            </Text>
          </View>
        </View>
      </View>
    );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111418',
  },
  header: {
    height: '15%',
    flexDirection: 'row',
  },
  pageTitle:{
    color:'white',
    width:'50%',
    fontSize:25,
    fontStyle:'bold',
    marginTop:20,
    marginLeft:30,
  },
  whiteLine: {
    height: 2,
    width: 600,
    backgroundColor: 'white',
    marginTop: 45,
    marginLeft:-20
  },
  body:{
    flexDirection:'row'
  },
  imageContainer:{
    width:'45%',
    marginLeft:30,
  },
  image:{
    width:'100%',
    height:'90%'
  },
  infoContainer:{
    width:'45%',
    height:'90%',
    marginLeft:25
  },
  info:{
    color:'white',
    fontSize:15,
    marginTop:-5,
    height:'90%'
  },
  yellwLine:{
    backgroundColor:'yellow',
    width:500,
    height:2
  },
  address:{
    color:'white',
    fontSize:13,
    marginTop:10,
  }
});

export default DuLich_VinhNhaTrangScreen;