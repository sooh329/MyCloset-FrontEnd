import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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


const App = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let icon;

            if (route.name === 'Main') {
              icon = focused ? (
                <WithLocalSvg asset={HomeIconActivated} width={36} height={36} />
              ) : (
                <WithLocalSvg asset={HomeIcon} width={24} height={24} />
              );
            } else if (route.name === 'Search') {
              icon = focused ? (
                <WithLocalSvg asset={SearchIconActivated} width={36} height={36} />
              ) : (
                <WithLocalSvg asset={SearchIcon} width={24} height={24} />
              );
            } else if (route.name === 'Closet') {
              icon = focused ? (
                <WithLocalSvg asset={ClosetIconActivated} width={36} height={36} />
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
            backgroundColor: '#224D60', // 배경색
            borderTopWidth: 0,
            elevation: 5, // 그림자 효과
          },
        })}>
        <Tab.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Closet" component={ClosetScreen} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;