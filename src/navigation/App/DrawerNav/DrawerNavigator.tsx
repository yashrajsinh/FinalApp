import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TouchableOpacity, Text } from 'react-native';

// Screens
import PortfolioScreen from '@/screens/App/DrawersScreen/PortfolioScreen';
import AboutUsScreen from '@/screens/App/DrawersScreen/AboutUsScreen';
import RateUsScreen from '@/screens/App/DrawersScreen/RateUsScreen';
import TabNavigator from '../TabNav/TabNavigator';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        headerShown: true,
        drawerType: 'slide',

        // Hamburger menu
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.toggleDrawer()}
            style={{ marginLeft: 15 }}
          >
            <Text style={{ fontSize: 24 }}>☰</Text>
          </TouchableOpacity>
        ),
      })}
    >
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Portfolio" component={PortfolioScreen} />
      <Drawer.Screen name="About" component={AboutUsScreen} />
      <Drawer.Screen name="Rate" component={RateUsScreen} />
    </Drawer.Navigator>
  );
}
