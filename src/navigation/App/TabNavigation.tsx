import { View, Text } from 'react-native';
import React from 'react';

//screens
import HomeScreen from '@/screens/App/HomeScreen';
import ProfileScreen from '@/screens/App/ProfileScreen';
import SearchScreen from '@/screens/App/SearchScreen';
//bottom tab
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

type Props = {};

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default TabNavigation;
