import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//screens
import HomeScreen from '@/screens/App/TabScreens/HomeScreen';
import MovieDetailsScreen from '@/screens/App/TabScreens/MovieDetailsScreen';

export type HomeStackParamList = {
  HomeMain: undefined;
  MovieDetails: { item: any };
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeMain" component={HomeScreen} />
      <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} />
    </Stack.Navigator>
  );
}
