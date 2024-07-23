import { View, Text, Image, StyleSheet, } from "react-native";

const DuLich_ThapBaScreen =()=>{
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.pageTitle}>Tháp Bà Ponagar</Text>
          <View style={styles.whiteLine}></View>
        </View>
        <View style={styles.body}>
          <View style={styles.imageContainer}>
            <Image
              source={require('./assets/dulich_5.jpg')}
              style={styles.image}
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.info}>
              Tháp bà Ponagar được xem là công trình kiến trúc nổi bật của người
              Chăm Pa từ thời xa xưa. Du khách sẽ thấy rõ ngay từ nhiều thế kỷ
              trước, kỹ thuật xây dựng của người Chăm Pa đã rất phát triển với
              từng chi tiết trong tháp đều được thiết kế vô cùng độc đáo và tinh
              xảo. Bằng phương pháp xây dựng bí mật, tháp bà Ponagar dù trải qua
              hàng thế kỷ vẫn có thể đứng vững cho đến ngày hôm nay. Đây thật sự
              là một bí ẩn vẫn chưa có lời giải. Tháp Ponagar không chỉ có giá
              trị về mặt văn hoá mà còn ẩn chứa nhiều giá trị vô giá về kiến
              trúc cho nhân loại sau này. Ngoài việc tham quan kiến trúc tháp bà
              Ponagar thì du khách còn có thể khám phá các lễ hội văn hoá đặc
              sắc của nơi đây. Đừng bỏ qua lễ hội tháp bà Ponagar từ ngày
              20-23/3 Âm lịch hàng năm nhé. Đây là lễ hội nhằm thể hiện sự biết
              ơn, lòng tôn kính đến vị thần Ponagar - người đã mang đến cuộc
              sống ấm no cho người Chăm Pa.
            </Text>
            <View style={styles.yellowLine}></View>
            <Text style={styles.address}>Địa chỉ: Nha Trang - Khánh Hòa</Text>
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
    height:'15%',
    flexDirection:'row',
  },
  pageTitle: {
    width:'50%',
    marginLeft:25,
    marginTop:15,
    color:'white',
    fontSize:30,
  },
  whiteLine: {
    width:500,
    height:2,
    marginTop:45,
    marginLeft:-22,
    backgroundColor:'white',
  },
  body: {
    flexDirection:'row',
  },
  imageContainer: {
    width:'45%',
    height:'90%',
    marginLeft:25,
  },
  image: {
    width:'100%',
    height:'100%'
  },
  infoContainer: {
    height:'90%',
    width:'50%'
  },
  info: {
    color:'white',
    fontSize:18,
    marginLeft:25,
    height:'90%'
  },
  yellowLine: {
    marginLeft:25,
    height:2,
    backgroundColor:'yellow',
    width:500
  },
  address: {
    marginLeft:25,
    marginTop:15,
    fontSize:13,
    color:'white'
  },
});
export default DuLich_ThapBaScreen;