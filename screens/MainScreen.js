import React, { useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, SafeAreaView, Linking } from 'react-native';
import {WithLocalSvg} from 'react-native-svg/css';
import * as Font from "expo-font";
import MyPage from '../assets/MyPage.svg';
import SearchIcon from '../assets/SearchIcon.svg';
import MyClosetLogo from '../assets/MyClosetLogo.svg';
import PlusCloset from '../assets/PlusCloset.svg';
import MinusCloset from '../assets/MinusCloset.svg';
import { useNavigation } from '@react-navigation/native';

const MainScreen = () => {

  const navigation = useNavigation(); 

  const [goods, setGoods] = useState([
    { name: '미니멀 리브드 어반 스타일 골지 투웨이 크롭자켓 더블 지퍼', tags: '상의', image: require('../assets/sweathiver.png'), supplier: '하이버', price: '49800', isCloset: '클로젯1', link:'https://www.hiver.co.kr/products/158470990' },
    { name: '힙덮는 오버핏, 프린팅 박시 긴팔티셔츠 (4color)', tags: '상의', image: require('../assets/shirtably.png'), supplier: '에이블리', price: '15500', isCloset: '클로젯1', link:'https://m.a-bly.com/goods/14112963' },
    { name: '자수포인트 오버핏 소매 트랙 기모 후드 [빅사이즈/통통제작]', tags: '상의', image: require('../assets/hoodieably.png'), supplier: '에이블리', price: '20800', isCloset: '클로젯1', link:'https://m.a-bly.com/goods/29173579' },
    { name: '[핏보장] 아센 비조 사이드 스냅 롱 와이드 팬츠 (5color)', tags: '하의', image: require('../assets/pantsably.png'), supplier: '에이블리', price: '15200', isCloset: '클로젯1', link:'https://m.a-bly.com/goods/32460358' },
    { name: '[남여공용] 이지핏 와이드 트레이닝 바지 무지 허리밴딩 쭈리 팬츠', tags: '하의', image: require('../assets/pantszig.png'), supplier: '지그재그', price: '9900', isCloset: '클로젯1', link:'https://zigzag.kr/catalog/products/147796894' },
    { name: '브러쉬 워싱 세미와이드 데님팬츠 2컬러', tags: '하의', image: require('../assets/pantshiver.png'), supplier: '하이버', price: '32900', isCloset: '클로젯2', link:'https://www.hiver.co.kr/products/159620864' },
    { name: '슬레이크 후드 올리브 HHHD3397', tags: '상의', image: require('../assets/hoodie2.png'), supplier: '무신사', price: '42900', isCloset: '클로젯2', link:'https://www.musinsa.com/products/2106705' },
    { name: '캘리 스톤 피그먼트 워싱팬츠 4종 브라운 ISLP6225', tags: '하의', image: require('../assets/pants.png'), supplier: '무신사', price: '49800', isCloset: '가을&겨울', link:'https://www.musinsa.com/products/3617168' },
    { name: '체크 울캐시미어 머플러 - 3color', tags: '악세서리', image: require('../assets/muffler.png'), supplier: '무신사', price: '79500', isCloset: '가을&겨울', link:'https://www.musinsa.com/products/3605632' },
    { name: 'Focus 피그먼트 후드티', tags: '상의', image: require('../assets/hoodie.png'), supplier: '무신사', price: '48200', isCloset: '가을&겨울', link:'https://www.musinsa.com/products/4439440' },
  ]);
  

  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'GothicA1-R': require('../assets/fonts/GothicA1-Regular.ttf'),
      'GothicA1-M': require('../assets/fonts/GothicA1-Medium.ttf'),
      'GothicA1-B': require('../assets/fonts/GothicA1-Bold.ttf'),
      'GothicA1-SB': require('../assets/fonts/GothicA1-SemiBold.ttf'),
      'GothicA1-T': require('../assets/fonts/GothicA1-Thin.ttf'),
      'GothicA1-EB': require('../assets/fonts/GothicA1-ExtraBold.ttf'),
      'GothicA1-L': require('../assets/fonts/GothicA1-Light.ttf'),
      'GothicA1-BL': require('../assets/fonts/GothicA1-Black.ttf'),
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

/*  const handleCloset = (index) => {
    setGoods((prevGoods) => {
      const newGoods = [...prevGoods];
      newGoods[index].isCloset = !newGoods[index].isCloset; // isCloset 상태 반전
      return newGoods;
    });
  }; */

  const handleImagePress = (link) => {
    Linking.openURL(link);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#EEECEC', alignItems: 'center' }}>
      <View style={styles.container}>
        <View style={styles.mainTop}>
          <View style={styles.search}>
            <WithLocalSvg asset={SearchIcon} width={20} height={20} style={{ paddingHorizontal: 25 }} />
            <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
              <Text>나의 옷장 아이템 검색하기</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <WithLocalSvg asset={MyPage} width={40} height={40} />
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
          <View style={[styles.mainText]}>
            <WithLocalSvg asset={MyClosetLogo} style={styles.mainMycloset}/>
            <Text style={styles.mainSmallText}>회원님을 위한</Text>
            <Text style={styles.mainSmallText}>추천 아이템입니다</Text>
          </View>
          <View style={styles.line} />

          <View style={styles.goodsContainer}>
            {goods.map((item, index) => (
              <View key={index} style={styles.item} >
                <TouchableOpacity onPress={() => handleImagePress(item.link)} >
                  <Image source={item.image} style={styles.image} />
                </TouchableOpacity>
                <View style={{width: '90%'}}>
                  <View style={{flexDirection:'row', width: '100%', justifyContent:'space-between', marginTop: 3}}>
                    <Text style={styles.itemPrice}>{item.price}원</Text>
                    <Text style={styles.itemShop}>{item.supplier}</Text>
                  </View>
                  <Text style={styles.itemName} numberOfLines={1} ellipsizeMode="tail">{item.name}</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => handleCloset(index)}>
                  <WithLocalSvg
                    asset={item.isCloset ? MinusCloset : PlusCloset}
                    width={40}
                    height={40}
                  />
                </TouchableOpacity>
              </View>
            ))}
          </View>
          
        </ScrollView>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
  },
  mainTop: {
    marginTop: 50,
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  search: {
    flex: 1,
    marginRight: 10,
    flexDirection: 'row',
    borderWidth: 1.5,
    borderColor: '#737070',
    borderRadius: 15,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  
  mainText: {
    alignItems: 'center',
    marginVertical: 20,
  },
  mainMycloset: {
    marginBottom: 30,
  },
  mainSmallText: {
    fontFamily: 'GothicA1-L',
    fontSize: 16,
  },

  line: {
    height: 0.5,
    backgroundColor: 'black',
    flex : 1,
    marginBottom: 20,
  },

  goodsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  item: {
    width: '45%',
    marginBottom: 30,
    position: 'relative',
    alignItems: 'center'
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
    position: 'absolute', // 절대 위치
    bottom: 50,
    right: 10,
    padding: 7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(34, 77, 96, 0.7)',
    borderRadius: 10,
  },
})

export default MainScreen;