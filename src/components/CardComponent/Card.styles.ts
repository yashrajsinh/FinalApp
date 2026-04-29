import styled from 'styled-components/native';

/* 🎨 THEME */
const colors = {
  primary: '#EAB308',
  primarySoft: 'rgba(234,179,8,0.08)',

  background: '#0B1220',
  card: '#111827',

  text: '#E5E7EB',
  subtext: '#9CA3AF',

  border: 'rgba(255,255,255,0.06)',
};

/* 🪟 CARD */
export const Wrapper = styled.TouchableOpacity`
  flex-direction: row;
  background-color: ${colors.card};
  border-radius: 18px;
  margin: 10px 16px;

  border: 1px solid ${colors.border};

  overflow: hidden;

  shadow-color: #000;
  shadow-opacity: 0.18;
  shadow-radius: 10px;
  elevation: 3;
`;

/* 🎬 POSTER (clean + sharp) */
export const Poster = styled.Image`
  width: 110px;
  height: 150px;
  resize-mode: cover;
`;

/* 📦 CONTENT */
export const Info = styled.View`
  flex: 1;
  padding: 12px;
  justify-content: space-between;
`;

/* 🔝 TITLE AREA */
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

/* 🔽 FOOTER */
export const Bottom = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Year = styled.Text`
  font-size: 12px;
  color: ${colors.subtext};
`;

/* ⭐ BADGE */
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
