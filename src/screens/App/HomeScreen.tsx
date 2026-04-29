import { View, Text, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
//API Service
import { getMovies } from '@/services/movies/MoviesService';
//Card View
import CardComponent from '@/components/CardComponent/CardComponent';
type Props = {};

const HomeScreen = (props: Props) => {
  const [data, setData] = useState([]);
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
    <View style={{ padding: 10 }}>
      <FlatList
        data={data}
        keyExtractor={(item: any) => item.show.id.toString()}
        renderItem={({ item }) => (
          <CardComponent
            item={item}
            onPress={() => console.log('Pressed ' + item)}
          />
        )}
      />
    </View>
  );
};

export default HomeScreen;
