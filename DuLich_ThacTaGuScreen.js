import { StyleSheet, View, Text, Image } from "react-native";

const DuLich_ThacTaGuScreen =()=>{
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.pageTitle}>Thác Tà Gù</Text>
          <View style={styles.whiteLine}></View>
        </View>
        <View style={styles.body}>
          <View style={styles.imageContainer}>
            <Image
              source={require('./assets/dulich_4.webp')}
              style={styles.image}
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.info}>
              Thác Tà Gụ Nha Trang nằm ở đỉnh của Hòn Bà. Nơi đây có vị trí khá
              cao nên thường xảy ra mưa. Nhờ vậy mà thác Tà Gụ chưa bao giờ cạn.
              Từ độ cao 40m, thác đổ nước trắng xoá ầm ầm xuống mặt hồ, tạo nên
              những làn khói trắng giống như mây mù. Bạn sẽ phải choáng ngợp
              trước cảnh thiên nhiên hùng vĩ của thác nước, núi rừng nơi đây,
              chốn hội tụ nhiều tinh túy của đại ngàn. Vẻ đẹp của thác Tà Gụ Nha
              Trang thật đặc biệt, lúc thì e ấp, dịu dàng như một nàng thơ, lúc
              lại dồn dập, sôi nổi. Đứng ở đỉnh thác, phóng tầm mắt ra xa, bạn
              sẽ được chiêm ngưỡng cảnh núi rừng xanh ngát, nhấp nhô trùng điệp,
              hoà quyện với mây trời. Ở dưới chân thác, cảnh vật sẽ trở nên thơ
              mộng, hữu tình hơn. Bạn có thể thoải mái check-in với những góc
              máy cực đẹp. Nước ở đây cũng rất trong xanh, thích hợp để ngâm
              mình, tắm mát.
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
    marginLeft:45,
    height: 2,
    width: 530,
    backgroundColor: 'white',
  },
  body: {
    flexDirection:'row'
  },
  imageContainer: {
    width:'45%'
  },
  image: {
    width:'100%',
    height:'88%',
    marginLeft:25,
  },
  infoContainer: {
    marginLeft:60,
    width:'50%',
    height:'88%'
  },
  info: {
    color:'white',
    fontSize:18,
    height:'90%'

  },
  yellowLine: {
    height:2,
    backgroundColor:'yellow',
    width:500
  },
  address: {
    color:'white',
    marginTop:15,
    fontSize:15,
  },
});

export default DuLich_ThacTaGuScreen;