import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';

const MovieDetailsScreen = ({ route }: any) => {
  const { item } = route.params;
  const show = item.show;

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HERO */}
        <Hero>
          <HeroImage source={{ uri: show.image?.original }} />
          <Overlay />

          <HeroContent>
            <Title>{show.name}</Title>
            <Genres>{show.genres.join(' • ')}</Genres>
            <Year>{show.premiered?.split('-')[0]}</Year>
          </HeroContent>
        </Hero>

        {/* DETAILS */}
        <Content>
          <RatingBadge>
            <RatingText>⭐ {show.rating?.average ?? 'N/A'}</RatingText>
          </RatingBadge>

          <Description>
            {show.summary?.replace(/<[^>]*>/g, '') ||
              'No description available.'}
          </Description>
        </Content>
      </ScrollView>
    </Container>
  );
};

export default MovieDetailsScreen;

/* ================= STYLES ================= */

const Container = styled.View`
  flex: 1;
  background-color: #020617;
`;

const Hero = styled.View`
  height: 420px;
  width: 100%;
  margin-top: 2px; /*  small spacing so header doesn’t overlap */
`;

const HeroImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const Overlay = styled.View`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.45);
`;

const HeroContent = styled.View`
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
`;

const Title = styled.Text`
  color: white;
  font-size: 28px;
  font-weight: 700;
`;

const Genres = styled.Text`
  color: #d1d5db;
  margin-top: 6px;
`;

const Year = styled.Text`
  color: #9ca3af;
  margin-top: 4px;
`;

const Content = styled.View`
  padding: 20px;
`;

const RatingBadge = styled.View`
  background-color: #2c3947;
  align-self: flex-start;
  padding: 6px 10px;
  border-radius: 10px;
  margin-bottom: 15px;
`;

const RatingText = styled.Text`
  color: #eab308;
  font-weight: 600;
`;

const Description = styled.Text`
  color: #d1d5db;
  line-height: 20px;
`;
