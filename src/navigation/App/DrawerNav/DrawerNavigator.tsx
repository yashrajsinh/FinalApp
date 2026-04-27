import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';

import { TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import PortfolioScreen from '@/screens/App/DrawersScreen/PortfolioScreen';
import AboutUsScreen from '@/screens/App/DrawersScreen/AboutUsScreen';
import RateUsScreen from '@/screens/App/DrawersScreen/RateUsScreen';
import TabNavigator from '../TabNav/TabNavigator';

// Styles
import {
  Container,
  HeaderImage,
  ItemWrapper,
  ItemLabel,
} from '@/styles/drawer.style';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props: DrawerContentComponentProps) {
  const { state, navigation } = props;

  const focusedRoute = state.routeNames[state.index];

  const renderItem = (label: string, icon: string, routeName: string) => {
    const active = focusedRoute === routeName;

    return (
      <ItemWrapper
        active={active}
        onPress={() => navigation.navigate(routeName as never)}
      >
        <Ionicons
          name={icon}
          size={22}
          color={active ? '#4F46E5' : '#64748B'}
        />
        <ItemLabel active={active}>{label}</ItemLabel>
      </ItemWrapper>
    );
  };

  return (
    <Container>
      <HeaderImage
        source={{
          uri: 'https://wallpapercave.com/wp/wp2043918.jpg',
        }}
        resizeMode="cover"
      />

      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ paddingTop: 5 }}
        showsVerticalScrollIndicator={false}
      >
        {renderItem('Home', 'grid-outline', 'Home')}
        {renderItem('Portfolio', 'briefcase-outline', 'Portfolio')}
        {renderItem('About', 'information-circle-outline', 'About')}
        {renderItem('Rate Us', 'star-outline', 'Rate')}
      </DrawerContentScrollView>
    </Container>
  );
}

/* ---------------- MAIN NAVIGATOR ---------------- */

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={({ navigation }) => ({
        headerShown: true,
        drawerType: 'front',

        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.toggleDrawer()}
            style={{
              marginLeft: 15,
              backgroundColor: '#f1f5f9',
              padding: 8,
              borderRadius: 12,
            }}
          >
            <Ionicons name="menu" size={24} color="#0f172a" />
          </TouchableOpacity>
        ),

        headerTitleStyle: {
          fontWeight: '800',
          color: '#0f172a',
        },

        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: '#fff',
        },
      })}
    >
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Portfolio" component={PortfolioScreen} />
      <Drawer.Screen name="About" component={AboutUsScreen} />
      <Drawer.Screen name="Rate" component={RateUsScreen} />
    </Drawer.Navigator>
  );
}
