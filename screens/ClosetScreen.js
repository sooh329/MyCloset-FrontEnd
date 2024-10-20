import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const ClosetScreen = () => {
  const [result,setResult]=useState('summer');

  const handleCategory = (category) =>{
    setResult(category);
  }

  const renderScrollViewContent = (category) => {
    switch (result){
      case "summer":
        return(
          <View>
          <View style={{flexDirection:"row"}}>
            
              <ImageBackground source={require('../assets/closetImg/summershirt.jpg')}
                     style={styles.viewImg}>

                <TouchableOpacity style={styles.btn}>
                  {/*<MaterialCommunityIcons name="cart-minus" size={24} color="white"
                                      style={styles.btnImg}/>
                                      */}
                  
                </TouchableOpacity>
              </ImageBackground>
            

              <ImageBackground source={require('../assets/closetImg/summershirt.jpg')}
                     style={styles.viewImg}>

                <TouchableOpacity style={styles.btn}>
                  <MaterialCommunityIcons name="cart-minus" size={24} color="white"
                                      style={styles.btnImg}/>
                </TouchableOpacity>
              </ImageBackground>

          </View>

          <View style={{flexDirection:"row"}}>
            <ImageBackground source={require('../assets/closetImg/summershirt.jpg')}
                       style={styles.viewImg}>

                  <TouchableOpacity style={styles.btn}>
                    <MaterialCommunityIcons name="cart-minus" size={24} color="white"
                                        style={styles.btnImg}/>
                  </TouchableOpacity>
            </ImageBackground>

              <ImageBackground source={require('../assets/closetImg/summershirt.jpg')}
                     style={styles.viewImg}>

                <TouchableOpacity style={styles.btn}>
                  <MaterialCommunityIcons name="cart-minus" size={24} color="white"
                                      style={styles.btnImg}/>
                </TouchableOpacity>
              </ImageBackground>
          </View>

          <View style={{flexDirection:"row"}}>
            <ImageBackground source={require('../assets/closetImg/summershirt.jpg')}
                       style={styles.viewImg}>

                  <TouchableOpacity style={styles.btn}>
                    <MaterialCommunityIcons name="cart-minus" size={24} color="white"
                                        style={styles.btnImg}/>
                  </TouchableOpacity>
            </ImageBackground>

            <ImageBackground source={require('../assets/closetImg/summershirt.jpg')}
                     style={styles.viewImg}>

                <TouchableOpacity style={styles.btn}>
                  <MaterialCommunityIcons name="cart-minus" size={24} color="white"
                                      style={styles.btnImg}/>
                </TouchableOpacity>
            </ImageBackground>
          </View>

          <View style={{paddingBottom:20}}></View>
          </View>
        );

        case "exercise":
        return(
          <View>
          <View style={{flexDirection:"row"}}>
            
              <ImageBackground source={require('../assets/closetImg/exercise.jpg')}
                     style={styles.viewImg}>

                <TouchableOpacity style={styles.btn}>
                  <MaterialCommunityIcons name="cart-minus" size={24} color="white"
                                      style={styles.btnImg}/>
                </TouchableOpacity>
              </ImageBackground>
            

              <ImageBackground source={require('../assets/closetImg/exercise.jpg')}
                     style={styles.viewImg}>

                <TouchableOpacity style={styles.btn}>
                  <MaterialCommunityIcons name="cart-minus" size={24} color="white"
                                      style={styles.btnImg}/>
                </TouchableOpacity>
              </ImageBackground>

          </View>

          <View style={{flexDirection:"row"}}>
            <ImageBackground source={require('../assets/closetImg/exercise.jpg')}
                       style={styles.viewImg}>

                  <TouchableOpacity style={styles.btn}>
                    <MaterialCommunityIcons name="cart-minus" size={24} color="white"
                                        style={styles.btnImg}/>
                  </TouchableOpacity>
            </ImageBackground>

              <ImageBackground source={require('../assets/closetImg/exercise.jpg')}
                     style={styles.viewImg}>

                <TouchableOpacity style={styles.btn}>
                  <MaterialCommunityIcons name="cart-minus" size={24} color="white"
                                      style={styles.btnImg}/>
                </TouchableOpacity>
              </ImageBackground>
          </View>

          <View style={{flexDirection:"row"}}>
            <ImageBackground source={require('../assets/closetImg/exercise.jpg')}
                       style={styles.viewImg}>

                  <TouchableOpacity style={styles.btn}>
                    <MaterialCommunityIcons name="cart-minus" size={24} color="white"
                                        style={styles.btnImg}/>
                  </TouchableOpacity>
            </ImageBackground>

            <ImageBackground source={require('../assets/closetImg/exercise.jpg')}
                     style={styles.viewImg}>

                <TouchableOpacity style={styles.btn}>
                  <MaterialCommunityIcons name="cart-minus" size={24} color="white"
                                      style={styles.btnImg}/>
                </TouchableOpacity>
            </ImageBackground>
          </View>

          <View style={{paddingBottom:20}}></View>
          </View>
        );

        case "closet1":
        return(
          <View>
          <View style={{flexDirection:"row"}}>
            
              <ImageBackground source={require('../assets/closetImg/exercise.jpg')}
                     style={styles.viewImg}>

                <TouchableOpacity style={styles.btn}>
                  {/*<MaterialCommunityIcons name="cart-minus" size={24} color="white"
                                      style={styles.btnImg}/>
                                      */}

                </TouchableOpacity>
              </ImageBackground>
            

              <ImageBackground source={require('../assets/closetImg/exercise.jpg')}
                     style={styles.viewImg}>

                <TouchableOpacity style={styles.btn}>
                  <MaterialCommunityIcons name="cart-minus" size={24} color="white"
                                      style={styles.btnImg}/>
                </TouchableOpacity>
              </ImageBackground>

          </View>

          <View style={{flexDirection:"row"}}>
            <ImageBackground source={require('../assets/closetImg/exercise.jpg')}
                       style={styles.viewImg}>

                  <TouchableOpacity style={styles.btn}>
                    <MaterialCommunityIcons name="cart-minus" size={24} color="white"
                                        style={styles.btnImg}/>
                  </TouchableOpacity>
            </ImageBackground>

              <ImageBackground source={require('../assets/closetImg/exercise.jpg')}
                     style={styles.viewImg}>

                <TouchableOpacity style={styles.btn}>
                  <MaterialCommunityIcons name="cart-minus" size={24} color="white"
                                      style={styles.btnImg}/>
                </TouchableOpacity>
              </ImageBackground>
          </View>

          <View style={{flexDirection:"row"}}>
            <ImageBackground source={require('../assets/closetImg/exercise.jpg')}
                       style={styles.viewImg}>

                  <TouchableOpacity style={styles.btn}>
                    <MaterialCommunityIcons name="cart-minus" size={24} color="white"
                                        style={styles.btnImg}/>
                  </TouchableOpacity>
            </ImageBackground>

            <ImageBackground source={require('../assets/closetImg/exercise.jpg')}
                     style={styles.viewImg}>

                <TouchableOpacity style={styles.btn}>
                  <MaterialCommunityIcons name="cart-minus" size={24} color="white"
                                      style={styles.btnImg}/>
                </TouchableOpacity>
            </ImageBackground>
          </View>

          <View style={{paddingBottom:20}}></View>
          </View>
        );

        case "closet2":
        return(
          <View>
          <View style={{flexDirection:"row"}}>
            
              <ImageBackground source={require('../assets/closetImg/exercise.jpg')}
                     style={styles.viewImg}>

                <TouchableOpacity style={styles.btn}>
                  <MaterialCommunityIcons name="cart-minus" size={24} color="white"
                                      style={styles.btnImg}/>
                </TouchableOpacity>
              </ImageBackground>
            

              <ImageBackground source={require('../assets/closetImg/exercise.jpg')}
                     style={styles.viewImg}>

                <TouchableOpacity style={styles.btn}>
                  <MaterialCommunityIcons name="cart-minus" size={24} color="white"
                                      style={styles.btnImg}/>
                </TouchableOpacity>
              </ImageBackground>

          </View>

          <View style={{flexDirection:"row"}}>
            <ImageBackground source={require('../assets/closetImg/exercise.jpg')}
                       style={styles.viewImg}>

                  <TouchableOpacity style={styles.btn}>
                    <MaterialCommunityIcons name="cart-minus" size={24} color="white"
                                        style={styles.btnImg}/>
                  </TouchableOpacity>
            </ImageBackground>

              <ImageBackground source={require('../assets/closetImg/exercise.jpg')}
                     style={styles.viewImg}>

                <TouchableOpacity style={styles.btn}>
                  <MaterialCommunityIcons name="cart-minus" size={24} color="white"
                                      style={styles.btnImg}/>
                </TouchableOpacity>
              </ImageBackground>
          </View>

          <View style={{flexDirection:"row"}}>
            <ImageBackground source={require('../assets/closetImg/exercise.jpg')}
                       style={styles.viewImg}>

                  <TouchableOpacity style={styles.btn}>
                    <MaterialCommunityIcons name="cart-minus" size={24} color="white"
                                        style={styles.btnImg}/>
                  </TouchableOpacity>
            </ImageBackground>

            <ImageBackground source={require('../assets/closetImg/exercise.jpg')}
                     style={styles.viewImg}>

                <TouchableOpacity style={styles.btn}>
                  <MaterialCommunityIcons name="cart-minus" size={24} color="white"
                                      style={styles.btnImg}/>
                </TouchableOpacity>
            </ImageBackground>
          </View>

          <View style={{paddingBottom:20}}></View>
          </View>
        );

        default:
          return null;
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
      <Text style={styles.mycloset}>My Closet</Text>
      </View>

      <View style={styles.container2}>



        
        <TouchableOpacity onPress={() => handleCategory('summer')}>
        <View style={{...styles.tag, backgroundColor: result === 'summer' ? 'white' : "#EEECEC"}}>
          <Image source={require('../assets/closetImg/summershirt.jpg')}
                 style={styles.tagImg}/>

          <View style={styles.tag2}>
            <Text style={styles.tagText}>여름상의</Text>
          </View>
          </View>
        </TouchableOpacity>





        
        <TouchableOpacity onPress={() => handleCategory('exercise')}>
        <View style={{...styles.tag, backgroundColor: result === 'exercise' ? 'white' : "#EEECEC"}}>
          <Image source={require('../assets/closetImg/exercise.jpg')}
                 style={styles.tagImg}/>

          <View style={styles.tag2}>
          <Text style={styles.tagText}>운동!!!</Text>
          </View>
          </View>
        </TouchableOpacity>






        
        <TouchableOpacity onPress={() => handleCategory('closet1')}>
        <View style={{...styles.tag, backgroundColor: result === 'closet1' ? 'white' : "#EEECEC"}}>
          <Image source={require('../assets/closetImg/closet1.jpg')}
                 style={styles.tagImg}/>

          <View style={styles.tag2}>
            <Text style={styles.tagText}>내 클로젯</Text>
          </View>
          </View>
        </TouchableOpacity>







        
        <TouchableOpacity onPress={() => handleCategory('closet2')}>
        <View style={{...styles.tag, backgroundColor: result === 'closet2' ? 'white' : "#EEECEC"}}>
          <Image source={require('../assets/closetImg/closet2.jpg')}
                 style={styles.tagImg}/>

          <View style={styles.tag2}>
            <Text style={styles.tagText}>내 클로젯2</Text>
          </View>
          </View>
        </TouchableOpacity>
        

      </View>



      <ScrollView showsVerticalScrollIndicator={false} style={styles.container3}>
        {renderScrollViewContent()}
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:"#EEECEC",
  },
  container1:{
    marginTop:50,
    paddingHorizontal: 20,
  },
  container2:{
    marginTop:20,
    flexDirection:"row",
  },
  container3:{
    backgroundColor:"white",
    paddingTop:20
  },
  mycloset:{
    fontSize:20
  },
  tag2:{
    flexDirection: 'row',
    justifyContent: 'space-evenly', // 태그 간 동일한 간격 유지
    alignItems: 'center',
    
  },
  tagImg:{
    width:70,
    height:70,
    marginTop:10,
    marginHorizontal:10,
    borderRadius:10
  },
  tagText:{
    marginVertical:5,
    marginHorizontal:10,
    
  },
  tag:{
    borderTopLeftRadius:20,
    borderTopRightRadius:20
  },
  viewImg:{
    width:155,
    height:200,
    marginBottom:20,
    marginLeft:17,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  btn:{
    backgroundColor:"rgba(34,77,96,0.7)",
    margin:8,
    padding:10,
    borderRadius:10,
    width:10,
    height:10
  },
})

export default ClosetScreen;
