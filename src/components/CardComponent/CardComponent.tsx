import React from 'react';
import {
  Wrapper,
  Poster,
  Info,
  Top,
  Name,
  Genres,
  Bottom,
  Year,
  RatingBadge,
  RatingText,
} from './Card.styles';

type Props = {
  item: any;
  onPress: (item: any) => void;
};

const CardComponent = ({ item, onPress }: Props) => {
  const show = item.show;

  return (
    <Wrapper activeOpacity={0.85} onPress={() => onPress(item)}>
      <Poster source={{ uri: show.image?.medium }} />

      <Info>
        <Top>
          <Name numberOfLines={1}>{show.name}</Name>
          <Genres numberOfLines={1}>{show.genres.join(' • ')}</Genres>
        </Top>

        <Bottom>
          <Year>{show.premiered?.split('-')[0]}</Year>

          <RatingBadge>
            <RatingText>⭐ {show.rating?.average ?? 'N/A'}</RatingText>
          </RatingBadge>
        </Bottom>
      </Info>
    </Wrapper>
  );
};

export default CardComponent;
