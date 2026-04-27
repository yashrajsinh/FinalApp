import React from 'react';
//Tab Nav
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Screens
import HomeScreen from '@/screens/App/HomeScreen';
import SearchScreen from '@/screens/App/SearchScreen';
import ProfileScreen from '@/screens/App/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute', // make it float a bit
          elevation: 7,
          marginLeft: 40,
          marginRight: 40,
          bottom: 10,
          backgroundColor: '#F4F2EC',
          borderRadius: 20,
          height: 60,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 5 },
          shadowOpacity: 0.2,
          shadowRadius: 5,
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
