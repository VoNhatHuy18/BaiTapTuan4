import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const DATA = [
  {
    id: '1',
    title: 'Ca nấu lẩu, nấu mì',
    image: require('./assets/ca_nau_lau.png'),
    nameShop: 'Shop Devang',
  },
  {
    id: '2',
    title: '1kg khô gà bơ tỏi',
    image: require('./assets/ga_bo_toi.png'),
    nameShop: 'Shop LTD Food',
  },
  {
    id: '3',
    title: 'Xe cần cẩu đa năng',
    image: require('./assets/xa_can_cau.png'),
    nameShop: 'Shop Thế giới đồ chơi',
  },
  {
    id: '4',
    title: 'Đồ chơi dạng mô hình',
    image: require('./assets/do_choi_dang_mo_hinh.png'),
    nameShop: 'Shop Thế giới đồ chơi',
  },
  {
    id: '5',
    title: 'Lãnh đạo giản đơn',
    image: require('./assets/lanh_dao_gian_don.png'),
    nameShop: 'Shop Minh Long Book',
  },
];

const Item = ({ title, image, nameShop }) => (
  <View style={styles.item}>
    <Image source={image} style={styles.image} />
    <View style={styles.textContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.shopName}>{nameShop}</Text>
    </View>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Chat</Text>
    </TouchableOpacity>
  </View>
);

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerComponent}>
        <View style={styles.header}>
          <Icon name="arrow-left" size={25} />
          <Text style={styles.headerText}>Chat</Text>
          <Icon name="shopping-cart" size={25} />
        </View>
        <Text style={styles.textHeader}>
          Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!
        </Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item
            title={item.title}
            image={item.image}
            nameShop={item.nameShop}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
  },
  item: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  textContainer: {
    paddingLeft: 10,
    flex: 1,
  },
  title: {
    fontSize: 15,
  },
  shopName: {
    fontSize: 13,
    color: '#555',
  },
  image: {
    width: 100,
    height: 100,
  },
  button: {
    height: 30,
    width: 60,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },
  buttonText: {
    color: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#1BA9FF',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1, 
  },
  headerComponent: {
    paddingBottom: 15,
  },
  textHeader:{
    padding: 15,
    flex:1
  },
});
export default App;
