import styled from 'styled-components/native';

type ItemProps = {
  active?: boolean;
};

/* 🎯 UPDATED THEME COLORS */
const colors = {
  primary: '#EAB308',
  primarySoft: 'rgba(234,179,8,0.08)',

  background: '#020617',
  card: '#0B1220',

  text: '#E5E7EB',
  subtext: '#9CA3AF',

  border: 'rgba(255,255,255,0.06)',
};

/* 📦 CONTAINER */
export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
`;

/* 🖼 HEADER (Updated for dark mode aesthetics) */
export const HeaderImage = styled.Image`
  width: 100%;
  height: 220px;
  opacity: 0.9; /* Slight dimming to blend better with dark theme */
`;

/* 📦 ITEM WRAPPER */
export const ItemWrapper = styled.TouchableOpacity<ItemProps>`
  flex-direction: row;
  align-items: center;
  padding: 14px 16px;
  margin: 0px 12px 8px;
  border-radius: 12px;

  /* Switch between deep card color and the soft yellow glow */
  background-color: ${({ active }) =>
    active ? colors.primarySoft : colors.card};

  /* Border highlights when active using the primary gold */
  border: 1px solid
    ${({ active }) => (active ? 'rgba(234,179,8,0.3)' : colors.border)};

  /* Dark mode shadows need to be subtler but deeper */
  shadow-color: #000;
  shadow-opacity: 0.4;
  shadow-radius: 8px;
  elevation: 4;
`;

/* 📝 LABEL */
export const ItemLabel = styled.Text<ItemProps>`
  margin-left: 12px;
  font-size: 14px;
  font-weight: 600;

  /* Gold text when active, light gray when inactive */
  color: ${({ active }) => (active ? colors.primary : colors.text)};
`;
