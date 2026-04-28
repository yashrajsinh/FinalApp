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

// Central config
const drawerItems = [
  { label: 'Home', icon: 'grid-outline', route: 'Home' },
  { label: 'Portfolio', icon: 'briefcase-outline', route: 'Portfolio' },
  { label: 'About', icon: 'information-circle-outline', route: 'About' },
  { label: 'Rate Us', icon: 'star-outline', route: 'Rate' },
];

function CustomDrawerContent({
  state,
  navigation,
}: DrawerContentComponentProps) {
  const focusedRoute = state.routeNames[state.index];

  return (
    <Container>
      <HeaderImage
        source={{
          uri: 'https://images.alphacoders.com/241/thumb-1920-241901.jpg',
        }}
        resizeMode="cover"
      />

      <DrawerContentScrollView
        contentContainerStyle={{ paddingTop: 0 }}
        showsVerticalScrollIndicator={false}
      >
        {drawerItems.map(item => {
          const active = focusedRoute === item.route;

          return (
            <ItemWrapper
              key={item.route}
              active={active}
              onPress={() => navigation.navigate(item.route as never)}
            >
              <Ionicons
                name={item.icon}
                size={22}
                color={active ? '#4F46E5' : '#64748B'}
              />
              <ItemLabel active={active}>{item.label}</ItemLabel>
            </ItemWrapper>
          );
        })}
      </DrawerContentScrollView>
    </Container>
  );
}

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={({ navigation }) => ({
        headerShown: true,
        drawerType: 'front',

        headerLeft: () => (
          <TouchableOpacity
            onPress={navigation.toggleDrawer}
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
      {drawerItems.map(item => (
        <Drawer.Screen
          key={item.route}
          name={item.route}
          component={
            item.route === 'Home'
              ? TabNavigator
              : item.route === 'Portfolio'
              ? PortfolioScreen
              : item.route === 'About'
              ? AboutUsScreen
              : RateUsScreen
          }
        />
      ))}
    </Drawer.Navigator>
  );
}
