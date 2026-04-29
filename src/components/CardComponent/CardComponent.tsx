import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';

type Props = {
  item: any;
  onPress: (item: any) => void;
};

const CardComponent = (props: Props) => {
  const show = props.item.show;
  return (
    <TouchableOpacity
      onPress={() => props.onPress(props.item)}
      style={{
        flexDirection: 'row',
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#eee',
        borderRadius: 8,
      }}
    >
      <Image
        source={{ uri: show.image?.medium }}
        style={{ width: 80, height: 100, borderRadius: 6 }}
      />

      <View style={{ marginLeft: 10, flex: 1 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{show.name}</Text>

        <Text>{show.genres.join(', ')}</Text>

        <Text>⭐ {show.rating?.average}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardComponent;
