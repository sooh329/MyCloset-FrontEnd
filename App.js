import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { WithLocalSvg } from 'react-native-svg/css';
import HomeIcon from './assets/navigationIcon/Main.svg';
import HomeIconActivated from './assets/navigationIcon/MainActivated.svg';
import SearchIcon from './assets/navigationIcon/Search.svg';
import SearchIconActivated from './assets/navigationIcon/SearchActivated.svg';
import ClosetIcon from './assets/navigationIcon/Closet.svg';
import ClosetIconActivated from './assets/navigationIcon/ClosetActivated.svg';
import MainScreen from './screens/MainScreen';
import SearchScreen from './screens/SearchScreen';
import ClosetScreen from './screens/ClosetScreen';
import SearchResultScreen from './screens/SearchResultScreen';
import LoadingScreen from './screens/LoadingScreen';


const App = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  const SearchStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="SearchScreen" component={SearchScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SearchResultScreen" component={SearchResultScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    );
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 3초 후 로딩 완료
    setTimeout(() => {
      setIsLoading(false);
    }, 4500);
  }, []);

  if (isLoading) {
    return <LoadingScreen />; // 로딩 중일 때
  }


  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let icon;

            if (route.name === 'Main') {
              icon = focused ? (
                <WithLocalSvg asset={HomeIconActivated} width={40} height={40} />
              ) : (
                <WithLocalSvg asset={HomeIcon} width={24} height={24} />
              );
            } else if (route.name === 'Search') {
              icon = focused ? (
                <WithLocalSvg asset={SearchIconActivated} width={40} height={40} />
              ) : (
                <WithLocalSvg asset={SearchIcon} width={24} height={24} />
              );
            } else if (route.name === 'Closet') {
              icon = focused ? (
                <WithLocalSvg asset={ClosetIconActivated} width={40} height={40} />
              ) : (
                <WithLocalSvg asset={ClosetIcon} width={24} height={24} />
              );
            }

            return icon;
          },
          tabBarLabel: () => null,
          tabBarActiveTintColor: '#D3DEEC', // 활성화된 아이콘 색상
          tabBarInactiveTintColor: 'gray', // 비활성화된 아이콘 색상
          tabBarStyle: {
            height: 60,
            backgroundColor: '#224D60', // 배경색
            borderTopWidth: 0,
            elevation: 5, // 그림자 효과
          },
        })}>
        <Tab.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Search" component={SearchStack} options={{ headerShown: false }} />
        <Tab.Screen name="Closet" component={ClosetScreen} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;