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
  MenuWrapper,
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
          uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4032ada5-0df4-44b0-a784-0894dabce3b3/dbl19es-2c1e8a65-7004-4999-a065-9e6ebc144676.jpg/v1/fill/w_1024,h_640,q_75,strp/the_kustom_shop___beautiful_nature_background_by_thekustomshop_dbl19es-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjQwIiwicGF0aCI6Ii9mLzQwMzJhZGE1LTBkZjQtNDRiMC1hNzg0LTA4OTRkYWJjZTNiMy9kYmwxOWVzLTJjMWU4YTY1LTcwMDQtNDk5OS1hMDY1LTllNmViYzE0NDY3Ni5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Ou28Wt4l2mG7_zMF_by0Yhxf5gsIocVNTRJSujs6jig',
        }}
        resizeMode="cover"
      />

      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ paddingTop: 0 }}
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
