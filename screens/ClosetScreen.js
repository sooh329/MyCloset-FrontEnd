import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const ClosetScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
      <Text style={styles.mycloset}>My Closet</Text>
      </View>

      <View style={styles.container2}>

        <View style={styles.tag}>
          <Image source={require('../assets/icon.png')}
                 style={styles.tagImg}/>

          <Text style={styles.tagText}>여름 상의</Text>
        </View>

        <View style={styles.tag}>
          <Image source={require('../assets/icon.png')}
                 style={styles.tagImg}/>

          <Text style={styles.tagText}>여름 상의</Text>
        </View>

        <View style={styles.tag}>
          <Image source={require('../assets/icon.png')}
                 style={styles.tagImg}/>

          <Text style={styles.tagText}>여름 상의</Text>
        </View>

        <View style={styles.tag}>
          <Image source={require('../assets/icon.png')}
                 style={styles.tagImg}/>

          <Text style={styles.tagText}>여름 상의</Text>
        </View>

      </View>

      <ScrollView>
        <View style={{flexDirection:"row"}}>
            <Image source={require('../assets/icon.png')}
                   style={{width:155, height:200, marginTop:20, marginRight:20}}/>

            <Image source={require('../assets/icon.png')}
                   style={{width:155, height:200, marginTop:20}}/>
        </View>

        <View style={{flexDirection:"row"}}>
            <Image source={require('../assets/icon.png')}
                   style={{width:155, height:200, marginTop:20, marginRight:20}}/>

            <Image source={require('../assets/icon.png')}
                   style={{width:155, height:200, marginTop:20}}/>
        </View>

        <View style={{flexDirection:"row"}}>
            <Image source={require('../assets/icon.png')}
                   style={{width:155, height:200, marginTop:20, marginRight:20}}/>

            <Image source={require('../assets/icon.png')}
                   style={{width:155, height:200, marginTop:20}}/>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingHorizontal: 20
  },
  container1:{
    marginTop:70,
  },
  container2:{
    marginTop:20,
    flexDirection:"row"
  },
  mycloset:{
    fontSize:20
  },
  tag:{
    
  },
  tagImg:{
    width:70,
    height:70,
    marginRight:15,
    borderRadius:10
  },
  tagText:{
    width:70,
    marginVertical:5,
    backgroundColor:"skyblue",
    paddingLeft:8,
    paddingBottom:2
  }
})

export default ClosetScreen;
