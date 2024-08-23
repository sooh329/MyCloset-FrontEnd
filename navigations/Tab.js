import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Main, Search, Closet } from '../screens/TabScreen';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Main' component={Main} />
            <Tab.Screen name='Search' component={Search} />
            <Tab.Screen name='Closet' component={Closet} />
        </Tab.Navigator>
    );
};

export default TabNavigation;
