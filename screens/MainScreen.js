import React, { useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native';
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

  //상품 목록 추후 백에서 get
  const [goods, setGoods] = useState([
    { name: '여성 스커트 1', tags: '하의', image: require('../assets/favicon.png'), shop: '에이블리', price: '35000', isCloset: false },
    { name: '여성 셔츠 1', tags: '상의', image: require('../assets/dddfffsfiojdsiofjdis.png'), shop: '지그재그', price: '35000', isCloset: false },
    { name: '여성 바지 1', tags: '하의', image: require('../assets/favicon.png'), shop: '무신사', price: '35000', isCloset: true },
    { name: '여성 스커트 2', tags: '하의', image: require('../assets/favicon.png'), shop: '에이블리', price: '35000', isCloset: false },
    { name: '여성 반팔 1', tags: '상의', image: require('../assets/dddfffsfiojdsiofjdis.png'), shop: '에이블리', price: '35000', isCloset: true },
    { name: '여성 가디건 1', tags: '상의', image: require('../assets/dddfffsfiojdsiofjdis.png'), shop: '지그재그', price: '35000', isCloset: true },
    { name: '여성 바지 2', tags: '하의', image: require('../assets/favicon.png'), shop: '무신사', price: '35000', isCloset: false },
    { name: '여성 바지 3', tags: '하의', image: require('../assets/favicon.png'), shop: '무신사', price: '35000', isCloset: false },
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

  const handleCloset = (index) => {
    setGoods((prevGoods) => {
      const newGoods = [...prevGoods];
      newGoods[index].isCloset = !newGoods[index].isCloset; // isCloset 상태 반전
      return newGoods;
    });
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
              <View key={index} style={styles.item} onPress={() => handleImagePress(item)}>
                <Image source={item.image} style={styles.image} />
                <View style={{width: '90%'}}>
                  <View style={{flexDirection:'row', width: '100%', justifyContent:'space-between', marginTop: 3}}>
                    <Text style={styles.itemPrice}>{item.price}원</Text>
                    <Text style={styles.itemShop}>{item.shop}</Text>
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
    flex: 1, // 이미지를 부모 뷰의 크기에 맞춤
    width: '100%', // 부모의 너비를 따라가도록 설정
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