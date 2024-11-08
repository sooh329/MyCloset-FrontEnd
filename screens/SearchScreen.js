import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useEffect, useState, useRef } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function SearchScreen({ navigation }) {
  const [text,setText]=useState("");
  const onChangeText = (inputText) => setText(inputText);

  const [search,setSearch] = useState({});

  const autoKeyBoardUp = useRef(null);

  const STORAGE_KEY = "@search";

  const saveSearchText = async (toSave) => {
    const s = JSON.stringify(toSave);
    await AsyncStorage.setItem(STORAGE_KEY,s);
  }

  const loadSearchText = async() => {
    const s = await AsyncStorage.getItem(STORAGE_KEY);
    setSearch(JSON.parse(s));
  }

  useEffect(() => {
    loadSearchText();

    // 화면에 들어오면 키보드를 자동으로 띄움
    const focusTimeout = setTimeout(() => {
      autoKeyBoardUp.current?.focus();
    }, 500);

    return () => clearTimeout(focusTimeout); // 타임아웃 정리
  }, []);
 
  const addSearchText = async (searchWord) => {
    if (!searchWord.trim()) {
      alert("검색어를 입력해주세요!");
      return;
    }

    // 최근 검색어 설정
    const newSearchText = { ...search }; //기존 최근검색어 배열 복사
    // 중복 검색어가 있는지 확인하고, 있는 경우 기존 검색어 삭제
    const existingKey = Object.keys(search).find(key => search[key].text === searchWord);
    if (existingKey) delete newSearchText[existingKey];
    newSearchText[Date.now()] = { text: searchWord }; //현재 검색한 새로운 단어를 저장
    setSearch(newSearchText);
    await saveSearchText(newSearchText); // AsyncStorage에 수정된 검색어 배열 저장
    setText(""); // 검색 후 입력창 텍스트 초기화

    // 검색 결과 페이지로 이동
    navigation.navigate('SearchResultScreen', { searchWord }); 
  };
  
  
  const deleteSearchText = async(key) => {
    Alert.alert("최근 검색어 삭제", "삭제하시겠습니까?",[
      {text:"취소"},
      {
        text:"삭제",
        style:"destructive",
        onPress:()=>{
          const newSearchText = {...search};
          delete newSearchText[key];
          setSearch(newSearchText);
          saveSearchText(newSearchText);
        }
      }
    ])
  }

  const handleSearch = async (keyword) => {
    // "샵"이 포함된 경우 "샵" 제거 후 검색어로 설정
    const filteredKeyword = keyword.replace('#', '').trim();
    // 최근 검색어에 저장하고 검색 결과 화면으로 이동
    await addSearchText(filteredKeyword);
    navigation.navigate('SearchResultScreen', { searchWord: filteredKeyword });
  };
  
  const resetText = () => {
    setText("");
  }

  return (
    <View style={styles.container}>
      <View style={styles.container1}>

        <Text style={styles.shopSearch}>#샵 검색</Text>

        <ScrollView horizontal style={styles.tagArea1} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity>
            <Text style={styles.shopText} onPress={() => handleSearch('#스커트')}>#스커트</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.shopText} onPress={() => handleSearch('#티셔츠')}>#티셔츠</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.shopText} onPress={() => handleSearch('#귀걸이')}>#귀걸이</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.shopText} onPress={() => handleSearch('#목도리')}>#목도리</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.shopText} onPress={() => handleSearch('#인형')}>#인형</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.shopText} onPress={() => handleSearch('#가방')}>#가방</Text>
          </TouchableOpacity>
        </ScrollView>
        {/* tagArea1 */}

        {/*
        <View style={styles.tagArea2}>
          <TouchableOpacity>
            <Text style={styles.shopText}>#캘빈클라인</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.shopText}>#인형</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.shopText}>#가방</Text>
          </TouchableOpacity>
        </View>
        */}
      </View>
      {/* container1 */}

      <View style={styles.searchBar}>
        <TouchableOpacity style={styles.searchIcon}
        onPress={() => addSearchText(text)}>
        <FontAwesome name="search" size={24} color="white"/>
        </TouchableOpacity>

        <TextInput placeholderTextColor="white" onChangeText={onChangeText}
        style={styles.search} placeholder={'검색어를 입력해주세요'}
        value={text} onSubmitEditing={() => addSearchText(text)}
        ref={autoKeyBoardUp}/>

        <TouchableOpacity style={styles.searchCancel} onPress={resetText}>
          <AntDesign name="closecircle" size={24} color="white"/>
        </TouchableOpacity>

      </View>
      {/* searchBar */}

      {/*
      <View style={styles.container2}>
        <Text style={styles.hotfashion}>HOT 유행</Text>

        <View style={styles.tagArea3}>
          <TouchableOpacity>
            <Text style={styles.shopText}>#자라</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.shopText}>#크록스</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.shopText}>#이너웨이</Text>
          </TouchableOpacity>
        </View>
        
      </View>
      
      */}
      <View style={styles.container3}>
        <Text style={styles.shopSearch}>최근 검색어</Text>

        <ScrollView style={styles.container3} horizontal showsHorizontalScrollIndicator={false}>{
          Object.keys(search).map(key=><View key={key}>
            <TouchableOpacity key={key} onPress={() => handleSearch(search[key].text)} onLongPress={() => deleteSearchText(key)}>
              <Text style={styles.shopText}>{search[key].text}</Text>
            </TouchableOpacity>
          </View>)
          }</ScrollView>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal:20,
    backgroundColor:"#EEECEC"
  },
  container1:{
    marginTop:50
  },
  shopSearch:{
    fontSize:20
  },
  tagArea1:{
    marginTop:25,
    flexDirection:"row"
  },
  tagArea2:{
    marginTop:15,
    flexDirection:"row"
  },
  shopText:{
    fontSize:14,
    marginRight:20,
    backgroundColor:"skyblue",
    paddingVertical:8,
    paddingHorizontal:10,
    borderRadius:20,
    backgroundColor:"white",
    borderWidth:1
  },
  searchBar:{
    marginTop:55,
    flexDirection:"row",
    backgroundColor:"#224D60",
    borderRadius:10
  },
  search:{
    marginRight:10,
    flex: 1,
    color:'white',
  },
  searchIcon:{
    marginRight:10,
    padding:20,
  },
  searchCancel:{
    padding:20,
  },
  container2:{
    marginTop:20
  },
  hotfashion:{
    fontSize:20
  },
  tagArea3:{
    marginTop:15,
    flexDirection:"row"
  },
  container3:{
    marginTop:25
  }
});
