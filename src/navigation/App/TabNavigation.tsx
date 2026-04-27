import React from 'react';
//screens
import HomeScreen from '@/screens/App/HomeScreen';
import ProfileScreen from '@/screens/App/ProfileScreen';
import SearchScreen from '@/screens/App/SearchScreen';
//bottom tab
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//icons
import Icon from 'react-native-vector-icons/Ionicons';
type TabParamList = {
  Home: undefined;
  Search: undefined;
  Profile: undefined;
};
const Tab = createBottomTabNavigator<TabParamList>();

function TabNavigation() {
  const icons = {
    Home: 'home',
    Profile: 'person',
    Search: 'search',
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size, focused }) => {
          // handle active/inactive icons
          const iconName = focused
            ? icons[route.name]
            : `${icons[route.name]}-outline`;

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default TabNavigation;
