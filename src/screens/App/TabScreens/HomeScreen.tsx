import { View, Text, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
//API Service
import { getMovies } from '@/services/api/movies/MoviesService';
//Card View
import CardComponent from '@/components/CardComponent/CardComponent';
//navigation
import { useNavigation } from '@react-navigation/native';
//redux dispatch
import { useDispatch } from 'react-redux';
import { setImage } from '@/store/slices/imageSlice';
//Random Image
import ImagePicker from '@/assets/data/ImagePicker';
type Props = {};

type Nav = {
  navigate: (screen: string) => void;
};

const HomeScreen = (props: Props) => {
  const [data, setData] = useState([]);
  const navigation = useNavigation<Nav>();
  const dispatch = useDispatch();
  //get a random image
  const picker = new ImagePicker();
  //call API
  useEffect(() => {
    const loadMovies = async () => {
      const data = await getMovies();
      setData(data);
      console.log('Data', data);
      dispatch(setImage(picker.getImage()));
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
