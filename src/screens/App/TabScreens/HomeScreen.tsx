import { View, Text, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
//API Service
import { getMovies } from '@/services/movies/MoviesService';
//Card View
import CardComponent from '@/components/CardComponent/CardComponent';
//navigation
import { useNavigation } from '@react-navigation/native';
type Props = {};

type Nav = {
  navigate: (screen: string) => void;
};

const HomeScreen = (props: Props) => {
  const [data, setData] = useState([]);
  const navigation = useNavigation<Nav>();
  //call API
  useEffect(() => {
    const loadMovies = async () => {
      const data = await getMovies();
      setData(data);
      console.log('Data', data);
    };
    loadMovies();
  }, []);

  return (
    <View style={{ padding: 10, backgroundColor: '#1F2937' }}>
      <FlatList
        data={data}
        keyExtractor={(item: any) => item.show.id.toString()}
        renderItem={({ item }) => (
          <CardComponent
            item={item}
            onPress={() => navigation.navigate('MovieDetails', { item })}
          />
        )}
      />
    </View>
  );
};

export default HomeScreen;
