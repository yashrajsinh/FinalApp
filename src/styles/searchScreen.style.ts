import styled from 'styled-components/native';
const colors = {
  primary: '#EAB308',
  primarySoft: 'rgba(234,179,8,0.08)',

  background: '#1F2937',
  card: '#0B1220',

  text: '#E5E7EB',
  subtext: '#9CA3AF',

  border: 'rgba(255,255,255,0.06)',
  inputBg: '#020617',
};

/* 📦 ROOT */
export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
`;

/* 📄 CONTENT WRAPPER */
export const Content = styled.View`
  flex: 1;
  padding: 20px;
`;

/* 📝 TITLE */
export const Title = styled.Text`
  font-size: 22px;
  font-weight: 700;
  color: ${colors.text};
  margin-bottom: 4px;
`;

/* 🪶 SUBTITLE */
export const Subtitle = styled.Text`
  font-size: 13px;
  color: ${colors.subtext};
  margin-bottom: 16px;
`;

/* 🔍 SEARCH BAR (more depth + focus feel) */
export const SearchBar = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${colors.card};
  border-radius: 16px;
  padding: 12px 16px;
  border: 1px solid ${colors.border};

  margin-bottom: 18px;

  shadow-color: #000;
  shadow-opacity: 0.25;
  shadow-radius: 10px;
  elevation: 4;
`;

export const SearchInput = styled.TextInput.attrs({
  placeholderTextColor: '#64748B',
})`
  flex: 1;
  color: ${colors.text};
  font-size: 15px;
  letter-spacing: 0.3px;
`;

/* 🎬 RESULT ITEM (bigger, more modern card) */
export const ResultCard = styled.TouchableOpacity`
  flex-direction: row;
  background-color: ${colors.card};
  border-radius: 16px;
  padding: 12px;
  margin-bottom: 14px;

  border: 1px solid ${colors.border};

  shadow-color: #000;
  shadow-opacity: 0.2;
  shadow-radius: 10px;
  elevation: 3;
`;

/* 🎞 POSTER (slightly larger + better ratio) */
export const Poster = styled.Image`
  width: 70px;
  height: 100px;
  border-radius: 10px;
  margin-right: 14px;
  background-color: #020617;
`;

/* 📄 TEXT WRAPPER */
export const ResultInfo = styled.View`
  flex: 1;
  justify-content: center;
`;

/* 🎯 TITLE (strong hierarchy) */
export const ResultTitle = styled.Text`
  color: ${colors.text};
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.3px;
`;

/* 🪶 SUBTITLE */
export const ResultSubtitle = styled.Text`
  color: ${colors.subtext};
  font-size: 12px;
  margin-top: 6px;
`;

/* ⭐ EXTRA META (optional but 🔥) */
export const MetaRow = styled.View`
  flex-direction: row;
  margin-top: 6px;
`;

export const MetaText = styled.Text`
  color: ${colors.primary};
  font-size: 11px;
  margin-right: 10px;
`;
