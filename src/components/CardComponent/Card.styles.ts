import styled from 'styled-components/native';

/* 🎯 COLORS (reuse same theme) */
const colors = {
  primary: '#EAB308',
  primarySoft: 'rgba(234,179,8,0.08)',

  background: '#0B1220', // deepest
  surface: '#0F172A', // screen bg (lighter than before)
  card: '#111827', // updated card (lighter & balanced)

  text: '#E5E7EB',
  subtext: '#9CA3AF',

  border: 'rgba(255,255,255,0.06)',
};

/* 🪟 CARD WRAPPER */
export const Wrapper = styled.TouchableOpacity`
  flex-direction: row;
  background-color: ${colors.card};
  border-radius: 16px;
  margin-bottom: 14px;
  margin-horizontal: 16px;
  active-opacity: 0.85;
  border: 2px solid ${colors.border};

  overflow: hidden;

  shadow-color: #000;
  shadow-opacity: 0.25;
  shadow-radius: 12px;
  elevation: 4;
`;
/* 🎬 POSTER */
export const Poster = styled.Image`
  width: 110px;
  height: 150px;

  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;

  resize-mode: cover;
`;
export const PosterWrapper = styled.View`
  background-color: #0b1220;
  overflow: hidden;
`;
export const PosterOverlay = styled.View`
  position: absolute;
  width: 110px;
  height: 150px;
  background-color: rgba(0, 0, 0, 0.08);
`;
/* 📦 CONTENT */
export const Info = styled.View`
  flex: 1;
  padding: 12px;
  justify-content: space-between;
`;

/* 🔝 TOP */
export const Top = styled.View``;

export const Name = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: ${colors.text};
`;

export const Genres = styled.Text`
  font-size: 12px;
  color: ${colors.subtext};
  margin-top: 4px;
`;

/* 🔽 BOTTOM */
export const Bottom = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Year = styled.Text`
  font-size: 12px;
  color: ${colors.subtext};
`;

/* ⭐ RATING */
export const RatingBadge = styled.View`
  background-color: ${colors.primarySoft};
  border: 1px solid ${colors.primary};
  padding: 4px 8px;
  border-radius: 8px;
`;

export const RatingText = styled.Text`
  font-size: 12px;
  font-weight: 600;
  color: ${colors.primary};
`;
