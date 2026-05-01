import styled from 'styled-components/native';

/* 🎯 COLORS */
const colors = {
  background: '#020617',
  card: '#0B1220',

  text: '#E5E7EB',
  subtext: '#94A3B8',

  border: 'rgba(255,255,255,0.06)',
  primary: '#38BDF8',
  danger: '#EF4444',
};

/* 📦 ROOT */
export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
  padding: 16px;
`;

/* 🔥 HEADER */
export const Header = styled.View`
  margin-top: 40px;
  margin-bottom: 20px;
`;

export const HeaderTitle = styled.Text`
  font-size: 24px;
  font-weight: 700;
  color: ${colors.text};
`;

export const HeaderSub = styled.Text`
  font-size: 13px;
  color: ${colors.subtext};
  margin-top: 4px;
`;

/* 🧾 CARD */
export const Card = styled.View`
  width: 100%;
  background-color: ${colors.card};
  border-radius: 20px;
  padding: 18px;
  align-items: center;

  border: 1px solid ${colors.border};

  shadow-color: #000;
  shadow-opacity: 0.25;
  shadow-radius: 12px;
  elevation: 6;
`;

/* 👤 IMAGE */
export const ProfileImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-bottom: 14px;

  border: 2px solid ${colors.primary};
`;

/* 📝 NAME */
export const NameText = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: ${colors.text};
  margin-bottom: 16px;
`;

/* 📄 INFO CARD */
export const InfoCard = styled.View`
  width: 100%;
  background-color: #020617;
  border-radius: 12px;
  padding: 12px;
  margin-bottom: 10px;

  border: 1px solid ${colors.border};
`;

export const InfoLabel = styled.Text`
  font-size: 11px;
  color: ${colors.subtext};
  text-transform: uppercase;
  letter-spacing: 0.6px;
`;

export const InfoText = styled.Text`
  font-size: 14px;
  color: ${colors.text};
  margin-top: 4px;
`;

/* 📏 SPACING */
export const Spacer = styled.View`
  height: 20px;
`;

/* 🔴 LOGOUT */
export const LogoutButton = styled.TouchableOpacity`
  width: 100%;
  background-color: ${colors.danger};
  padding: 14px;
  border-radius: 12px;
  align-items: center;
`;

export const LogoutText = styled.Text`
  color: white;
  font-size: 15px;
  font-weight: 600;
`;
