import { StyleSheet, View, Text, Image } from "react-native";

const DuLich_DaoKhiScreen =()=>{
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.pageTitle}>Vương quốc đảo khỉ</Text>
          <View style={styles.whiteLine}></View>
        </View>
        <View style={styles.dody}>
          <View style={styles.imageContainer}>
            <Image
              source={require('./assets/dulich_2.jpg')}
              style={styles.image}
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.info}>
              Đảo Khỉ Nha Trang vốn có tên gọi là Hòn Lao. Vào năm 1975, các
              chuyên gia Liên Xô mang khỉ đến Hòn Lao để nuôi và nghiên cứu khoa
              học. Sau đó, chúng tự sản sinh và phát triển. Từ đó, đảo có nhiều
              khỉ sinh sống nên người địa phương gọi là đảo Khỉ. Hiện nay, khu
              du lịch đảo Khỉ Nha Trang có hơn 1.200 con khỉ sống theo bầy đàn.
              Đảo Khỉ có nhiều loài khỉ khác nhau như khỉ mặt đỏ, khỉ lông
              xám,... được nuôi thả trong các cánh rừng nguyên sinh. Đảo Khỉ Nha
              Trang Khánh Hòa là nơi nuôi dưỡng và chăm sóc khỉ với mục đích bảo
              tồn và phục vụ nhu cầu tìm hiểu, tham quan của du khách. Khi đến
              đây, bạn tha hồ được xem, tìm hiểu và vui đùa cùng những chú khỉ
              tinh nghịch, đáng yêu. Khỉ được nuôi thả trong trong rừng nguyên
              sinh tự nhiên nên khá nghịch ngợm nhưng cũng rất thân thiện với
              con người. Hòn đảo rất thích hợp để những người yêu thiên nhiên,
              động vật, các gia đình có con nhỏ đến tìm hiểu, khám phá, vui
              chơi.
            </Text>
            <View style={styles.yellowLine}></View>
            <Text style={styles.address}>Dia chi:</Text>
          </View>
        </View>
      </View>
    );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#111418',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    height: '15%',
  },
  pageTitle: {
    width: '40%',
    color: 'white',
    fontSize: 30,
    fontStyle: 'bold',
    marginTop: 15,
    marginLeft: 25,
  },
  whiteLine: {
    height: 2,
    width: 550,
    backgroundColor: 'white',
    marginTop: 45,
    marginLeft: 30,
  },
  dody:{
    flexDirection:'row'
  },
  imageContainer: {
    width: '40%',
  },
  image: {
    width: '100%',
    height: '90%',
    marginLeft: 25,
  },
  infoContainer: {
    width: '55%',
    height: '90%',
    marginLeft: 25,
  },
  info: {
    color: 'white',
    fontSize: 15,
    marginTop: -5,
    height: '90%',
    marginLeft:28,
  },
  yellowLine:{
    height:2,
    width:500,
    backgroundColor:'yellow',
    marginLeft:28,
  },
  address:{
    fontSize:15,
    color:'white',
    marginTop:10,
    marginLeft:28,
  }
});
export default DuLich_DaoKhiScreen;