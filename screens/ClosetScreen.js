import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { WithLocalSvg } from 'react-native-svg/css';
import MyClosetLogo from '../assets/MyClosetLogo.svg';
import PlusCloset from '../assets/PlusCloset.svg';
import MinusCloset from '../assets/MinusCloset.svg';
import Modal from 'react-native-modal';

const ClosetScreen = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'fallWinter', title: '가을&겨울' },
    { key: 'closet1', title: '클로젯1' },
    { key: 'closet2', title: '클로젯2' },
    { key: 'closet3', title: '클로젯3' },
  ]);

  const [goods, setGoods] = useState([
    { id: 1, name: '미니멀 리브드 어반 스타일 골지 투웨이 크롭자켓 더블 지퍼', tags: '상의', image: require('../assets/sweathiver.png'), supplier: '하이버', price: '49800', isCloset: '클로젯1', link:'https://www.hiver.co.kr/products/158470990' },
    { id: 2, name: '힙덮는 오버핏, 프린팅 박시 긴팔티셔츠 (4color)', tags: '상의', image: require('../assets/shirtably.png'), supplier: '에이블리', price: '15500', isCloset: '클로젯1', link:'https://m.a-bly.com/goods/14112963' },
    { id: 3, name: '자수포인트 오버핏 소매 트랙 기모 후드 [빅사이즈/통통제작]', tags: '상의', image: require('../assets/hoodieably.png'), supplier: '에이블리', price: '20800', isCloset: '클로젯1', link:'https://m.a-bly.com/goods/29173579' },
    { id: 4, name: '[핏보장] 아센 비조 사이드 스냅 롱 와이드 팬츠 (5color)', tags: '하의', image: require('../assets/pantsably.png'), supplier: '에이블리', price: '15200', isCloset: '클로젯2', link:'https://m.a-bly.com/goods/32460358' },
    { id: 5, name: '[남여공용] 이지핏 와이드 트레이닝 바지 무지 허리밴딩 쭈리 팬츠', tags: '하의', image: require('../assets/pantszig.png'), supplier: '지그재그', price: '9900', isCloset: '클로젯2', link:'https://zigzag.kr/catalog/products/147796894' },
    { id: 6, name: '브러쉬 워싱 세미와이드 데님팬츠 2컬러', tags: '하의', image: require('../assets/pantshiver.png'), supplier: '하이버', price: '32900', isCloset: '클로젯1', link:'https://www.hiver.co.kr/products/159620864' },
    { id: 7, name: '슬레이크 후드 올리브 HHHD3397', tags: '상의', image: require('../assets/hoodie2.png'), supplier: '무신사', price: '42900', isCloset: '클로젯1', link:'https://www.musinsa.com/products/2106705' },
    { id: 8, name: '캘리 스톤 피그먼트 워싱팬츠 4종 브라운 ISLP6225', tags: '하의', image: require('../assets/pants.png'), supplier: '무신사', price: '49800', isCloset: '가을&겨울', link:'https://www.musinsa.com/products/3617168' },
    { id: 9, name: '체크 울캐시미어 머플러 - 3color', tags: '악세서리', image: require('../assets/muffler.png'), supplier: '무신사', price: '79500', isCloset: '가을&겨울', link:'https://www.musinsa.com/products/3605632' },
    { id: 10, name: 'Focus 피그먼트 후드티', tags: '상의', image: require('../assets/hoodie.png'), supplier: '무신사', price: '48200', isCloset: '가을&겨울', link:'https://www.musinsa.com/products/4439440' },
  ]);

  const [isModalVisible, setModalVisible] = useState(false); 
  const [selectedId, setSelectedId] = useState(null);

  // 카테고리로 필터링된 상품 리스트 렌더링
  const renderGoodsList = (category) => (
    <ScrollView contentContainerStyle={styles.goodsContainer}>
      {goods
        .filter(item => item.isCloset === category)
        .map((item, index) => (
          <View key={item.id} style={styles.item}>
            <Image source={item.image} style={styles.image} />
            <View style={{ width: '90%' }}>
              <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginTop: 3 }}>
                <Text style={styles.itemPrice}>{item.price}원</Text>
                <Text style={styles.itemShop}>{item.supplier}</Text>
              </View>
              <Text style={styles.itemName} numberOfLines={1} ellipsizeMode="tail">
                {item.name}
              </Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => handleCloset(item.id)}>
              <WithLocalSvg asset={item.isCloset === category ? MinusCloset : PlusCloset} width={40} height={40} />
            </TouchableOpacity>
          </View>
        ))}
    </ScrollView>
  );

  const handleCloset = (id) => {
    setSelectedId(id);
    setModalVisible(true);
  };

  const handleSaveCloset = (category) => {
    const updatedGoods = goods.map((item) =>
      item.id === selectedId ? { ...item, isCloset: category } : item
    );
    setGoods(updatedGoods);
    setModalVisible(false);
    setSelectedId(null);
  };

  const handleRemoveFromCloset = () => {
    const updatedGoods = goods.map((item) =>
      item.id === selectedId ? { ...item, isCloset: '' } : item
    );
    setGoods(updatedGoods);
    setModalVisible(false);
    setSelectedId(null);
  };

  const renderScene = SceneMap({
    fallWinter: () => renderGoodsList('가을&겨울'),
    closet1: () => renderGoodsList('클로젯1'),
    closet2: () => renderGoodsList('클로젯2'),
    closet3: () => renderGoodsList('클로젯3'),
  });

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <WithLocalSvg asset={MyClosetLogo} width={120} />
      </View>

      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: '100%' }}
      />

      {/* 모달 추가 */}
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>이동할 클로젯 선택</Text>
          <TouchableOpacity style={styles.modalButton} onPress={() => handleSaveCloset('가을&겨울')}>
            <Text style={styles.modalButtonText}>가을&겨울</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalButton} onPress={() => handleSaveCloset('클로젯1')}>
            <Text style={styles.modalButtonText}>클로젯1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalButton} onPress={() => handleSaveCloset('클로젯2')}>
            <Text style={styles.modalButtonText}>클로젯2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalButton} onPress={() => handleSaveCloset('클로젯3')}>
            <Text style={styles.modalButtonText}>클로젯3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalDeleteButton} onPress={handleRemoveFromCloset}>
              <Text style={styles.modalDeleteButtonText}>클로젯에서 삭제</Text>
            </TouchableOpacity>
          <TouchableOpacity style={styles.modalCancelButton} onPress={() => setModalVisible(false)}>
            <Text style={styles.modalButtonText}>취소</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEECEC',
  },
  container1: {
    marginTop: 50,
    paddingHorizontal: 20,
  },
  goodsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  item: {
    paddingTop: 20,
    width: '45%',
    marginBottom: 30,
    position: 'relative',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: 'black',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemShop: {
    fontSize: 12,
  },
  itemName: {
    fontSize: 16,
    width: '90%',
  },
  button: {
    position: 'absolute',
    bottom: 50,
    right: 20,
    padding: 7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(34, 77, 96, 0.7)',
    borderRadius: 10,
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#224D60',
    width: '100%',
    marginBottom: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
  },
  modalCloseButtonText: { fontSize: 16, color: '#fff' },
  modalDeleteButton: {
    marginVertical: 5,
    backgroundColor: '#CA4040',
    height: 35,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalDeleteButtonText: { fontSize: 16, color: '#fff' },
  modalCancelButton: {
    backgroundColor: '#646464',
    width: '100%',
    height: 35,
    marginHorizontal: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ClosetScreen;