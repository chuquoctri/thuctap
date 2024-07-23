import{StyleSheet, View, Text, Image} from 'react-native';
const DuLich_KongForestScreen=()=>{
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.pageTitle}> Kong Forest</Text>
          <View style={styles.whiteLine}></View>
        </View>
        <View style={styles.body}>
          <View style={styles.imageContainer}>
            <Image
              source={require('./assets/dulich_6.jpg')}
              style={styles.image}
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.info}>
              {' '}
              Kong Forest Nha Trang được chứng nhận là công viên du lịch thám
              hiểm trong rừng lớn nhất Việt Nam. Vì vậy, đây là điểm đến lý
              tưởng cho những ai thích mạo hiểm, khám phá. Sở dĩ Kong Forest
              được ví như là một “khu rừng nhiệt đới” thu nhỏ bởi vì nơi đây sở
              hữu thiên nhiên rừng nhiệt đới, những dòng suối trong lành, tạo
              cảm giác thư giãn, thoải mái cho du khách khi ghé thăm. Ngoài ra,
              đây cũng là công viên Nha Trang tọa lạc ở độ cao 1.578m so với mực
              nước biển, nằm ngay trên ngọn núi Hòn Bà, vì vậy, không khí ở đây
              rất trong lành, mát mẻ. Từ trên cao, bạn sẽ chiêm ngưỡng được vẻ
              đẹp toàn cảnh, những tảng mây bồng bềnh, khung cảnh đẹp tựa tranh
              vẽ làm “say lòng” người. Kong Forest Nha Trang còn khiến cho du
              khách mê mẩn bởi thảm thực vật đa dạng. Khi đặt chân đến đây, bạn
              sẽ thích thú với vẻ đẹp của cây cối, hoa cỏ, mùi hương của thiên
              nhiên, đất trời…
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
    marginTop: 20,
    marginLeft: 25,
    height: '15%',
    flexDirection: 'row',
  },
  pageTitle: {
    color: 'white',
    fontSize: 30,
    width: '45%',
  },
  whiteLine: {
    marginTop: 30,
    marginLeft: 45,
    height: 2,
    width: 530,
    backgroundColor: 'white',
  },
  body: {
    flexDirection: 'row',
  },
  imageContainer: {
    width: '45%',
  },
  image: {
    width: '100%',
    height: '88%',
    marginLeft: 25,
  },
  infoContainer: {
    marginLeft: 60,
    width: '50%',
    height: '88%',
  },
  info: {
    color: 'white',
    fontSize: 18,
    height: '90%',
  },
  yellowLine: {
    height: 2,
    backgroundColor: 'yellow',
    width: 500,
  },
  address: {
    color: 'white',
    marginTop: 15,
    fontSize: 15,
  },
});
export default DuLich_KongForestScreen;