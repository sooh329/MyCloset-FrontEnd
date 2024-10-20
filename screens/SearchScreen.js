import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function App() {
  const [text,setText]=useState("");
  const onChangeText = (event) => setText(event);

  const [search,setSearch] = useState({});

  const STORAGE_KEY = "@search";

  const saveSearchText = async (toSave) => {
    const s = JSON.stringify(toSave);
    await AsyncStorage.setItem(STORAGE_KEY,s);
  }

  const loadSearchText = async() => {
    const s = await AsyncStorage.getItem(STORAGE_KEY);
    await setSearch(JSON.parse(s));
  }

  useEffect(()=>{
    loadSearchText();
  },[]);
 
  const addSearchText = async() => {
    if(text===""){
      return;
    }
    const newSearchText = Object.assign({}, search, {[Date.now()]: {text}});
    setSearch(newSearchText);
    setText("");
    await saveSearchText(newSearchText);
  }
  
  
  const deleteSearchText = async(key) => {
    Alert.alert("Delete this SearchText","Are you sure?",[
      {text:"Cancel"},
      {
        text:"I'm sure",
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
  
  return (
    <View style={styles.container}>
      <View style={styles.container1}>

        <Text style={styles.shopSearch}>#샵 검색</Text>

        <ScrollView horizontal style={styles.tagArea1} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity>
            <Text style={styles.shopText}>#스커트</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.shopText}>#티셔츠</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.shopText}>#귀걸이</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.shopText}>#캘빈클라인</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.shopText}>#인형</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.shopText}>#가방</Text>
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
        onPress={addSearchText}>
        <FontAwesome name="search" size={24} color="white"/>
        </TouchableOpacity>

        <TextInput placeholderTextColor="white" onChangeText={onChangeText}
        style={styles.search} placeholder={'검색어를 입력해주세요'}
        value={text} onSubmitEditing={addSearchText}/>

        <TouchableOpacity style={styles.searchCancel}>
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
            <TouchableOpacity onLongPress={() => deleteSearchText(key)}>
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
    paddingRight:50,
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
