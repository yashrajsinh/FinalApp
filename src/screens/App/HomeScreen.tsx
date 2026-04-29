import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
//API Service
import { getMovies } from '@/services/movies/MoviesService';
type Props = {};

const HomeScreen = (props: Props) => {
  useEffect(() => {
    const loadMovies = async () => {
      const data = await getMovies();
      console.log('Data', data);
    };
    loadMovies();
  }, []);
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
