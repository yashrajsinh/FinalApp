import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import TabNavigation from './TabNavigation';
import AboutUsScreen from '@/screens/App/DrawersScreen/AboutUsScreen';
import PortfolioScreen from '@/screens/App/DrawersScreen/PortfolioScreen';
import RateUsScreen from '@/screens/App/DrawersScreen/RateUsScreen';

export type DrawerParamList = {
  MainTabs: undefined;
  About: undefined;
  Portfolio: undefined;
  Rate: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator>
      {/* Tabs (MAIN APP) */}
      <Drawer.Screen
        name="MainTabs"
        component={TabNavigation}
        options={{ headerShown: false, title: 'Home' }}
      />

      {/* Drawer Screens */}
      <Drawer.Screen name="About" component={AboutUsScreen} />
      <Drawer.Screen name="Portfolio" component={PortfolioScreen} />
      <Drawer.Screen name="Rate" component={RateUsScreen} />
    </Drawer.Navigator>
  );
}
