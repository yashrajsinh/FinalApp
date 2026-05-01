import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import SearchScreen from '@/screens/App/TabScreens/SearchScreen';
import ProfileScreen from '@/screens/App/TabScreens/ProfileScreen';
//stack
import HomeStack from '@/screens/App/TabStack/HomeStack';
//tab image
import { useSelector } from 'react-redux';
import { Image } from 'react-native';
const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const image = useSelector((state: any) => state.userProfile.imageUrl);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarIcon: ({ focused, color }) => {
          let iconName = '';

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'Profile') {
            return (
              <Image
                source={{ uri: image }}
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 12,
                  borderWidth: focused ? 2 : 0,
                  borderColor: '#EAB308',
                }}
              />
            );
          }

          return <Ionicons name={iconName} size={22} color={color} />;
        },

        tabBarActiveTintColor: '#EAB308',
        tabBarInactiveTintColor: '#9CA3AF',
        tabBarStyle: {
          position: 'absolute',
          elevation: 7,
          marginLeft: 40,
          marginRight: 40,
          bottom: 15,
          backgroundColor: '#2C3947',
          borderRadius: 20,
          height: 60,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 5 },
          shadowOpacity: 0.5,
          shadowRadius: 5,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
