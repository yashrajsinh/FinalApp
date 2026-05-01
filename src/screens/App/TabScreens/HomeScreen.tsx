import { View, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';

// API
import { getMovies } from '@/services/api/movies/MoviesService';

// Components
import CardComponent from '@/components/CardComponent/CardComponent';

// Navigation
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Redux
import { useDispatch } from 'react-redux';
import { setImage } from '@/store/slices/imageSlice';

// Utils
import ImagePicker from '@/assets/data/ImagePicker';

type MovieItem = {
  show: {
    id: number;
    name: string;
    image?: {
      medium: string;
    };
  };
};

type RootStackParamList = {
  Home: undefined;
  MovieDetails: { item: MovieItem };
};

type Nav = NativeStackNavigationProp<RootStackParamList>;

const HomeScreen = () => {
  const [data, setData] = useState<MovieItem[]>([]);
  const navigation = useNavigation<Nav>();
  const dispatch = useDispatch();

  const picker = new ImagePicker();

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const res = await getMovies();
        setData(res);

        dispatch(setImage(picker.getImage()));
      } catch (error) {
        console.log('API Error:', error);
      }
    };

    loadMovies();
  }, []);

  return (
    <View style={{ flex: 1, padding: 10, backgroundColor: '#1F2937' }}>
      <FlatList
        data={data}
        keyExtractor={item => item.show.id.toString()}
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
