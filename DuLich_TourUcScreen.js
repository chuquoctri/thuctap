import { StyleSheet, View, Text, Image } from "react-native";
const DuLich_TourUcScreen =()=>{
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.pageTitle}>Tour du lịch Úc từ Nha Trang</Text>
          <View style={styles.whiteLine}></View>
        </View>
        <View style={styles.body}>
          <View style={styles.imageContainer}>
            <Image
              source={require('./assets/dulich_3.jpg')}
              style={styles.image}
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.info}>
              Đoàn kết thúc ngày tham quan đầu tiên với điểm tham quan thú vị
              Chợ cá – Sydney Fish Market, là chợ cá lớn nhất Nam Bán cầu, có
              sàn đấu giá hải sản của các mối bán buôn thu hút khách đến xem mỗi
              tuần.Ăn tối tự túc tại chợ cá với những món ăn Hải sản đã được chế
              biến sẵn rất hấp dẫn. Sau đó xe đón đoàn về lại khách sạn và tự do
              nghỉ ngơi Sau giờ ăn trưa, xe sẽ đưa đoàn tiếp tục tham quan khu
              phố China Town – nằm ở phía nam trung tâm Sydney, Úc. Nó nằm giữa
              Ga Trung tâm và Cảng Darling. Nó là một phần của khu vực chính
              quyền địa phương của thành phố Sydney và là khu phố Tàu lớn nhất
              của Úc. Đoàn tiếp tục tham quan Haymarket hay còn gọi là Market
              City – khu chợ trong phố người Hoa rất nhộn nhịp và độc đáo.
            </Text>
            <View style={styles.yellowLine}></View>
            <Text style={styles.address}>Dia chi</Text>
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
    marginLeft: 25,
  },
  pageTitle: {
    color: 'white',
    fontSize: 30,
    marginTop: 15,
    width:'45%'
  },
  whiteLine: {
    height: 2,
    width: 550,
    backgroundColor: 'white',
    marginTop: 45,
  },
  body: {
    flexDirection: 'row',
  },
  imageContainer:{
    marginLeft:25,
    width:'40%'
  },
  image:{
    width:'100%',
    height:'90%'
  },    
  infoContainer:{
    width:'50%'
  },
  info:{
    color:'white',
    fontSize:18,
    marginLeft:38,
    height:'80%'
  },
  yellowLine:{
    height:2,
    width:550,
    backgroundColor:'yellow',
    marginLeft:38,
  },
  address:{
    marginLeft:38,
    color:'white',
    fontSize:13,
    marginTop:15,
  }

});
export default DuLich_TourUcScreen;