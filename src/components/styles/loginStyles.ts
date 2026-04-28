import styled from 'styled-components/native';

/* 🎯 COLORS */
const colors = {
  primary: '#EAB308',
  primarySoft: 'rgba(234,179,8,0.08)',

  background: '#020617',
  card: '#0B1220',

  text: '#E5E7EB',
  subtext: '#9CA3AF',

  border: 'rgba(255,255,255,0.06)',
  inputBg: '#020617',
};

/* 📦 ROOT (no SafeArea here anymore) */
export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
`;

/* 🧱 CONTENT WRAPPER (controls layout instead) */
export const Content = styled.View`
  flex: 1;
  justify-content: center;
  padding: 24px;
`;

/* 🪟 CARD */
export const Card = styled.View`
  background-color: ${colors.card};
  padding: 22px;
  border-radius: 18px;

  border: 1px solid ${colors.border};

  shadow-color: #000;
  shadow-opacity: 0.25;
  shadow-radius: 16px;
  elevation: 5;
`;

/* 📝 TEXT */
export const Title = styled.Text`
  font-size: 22px;
  font-weight: 700;
  color: ${colors.text};
  text-align: center;
  letter-spacing: 0.5px;
`;

export const Subtitle = styled.Text`
  font-size: 13px;
  color: ${colors.subtext};
  text-align: center;
  margin-bottom: 18px;
`;

/* ✏️ INPUT */
export const InputText = styled.TextInput.attrs({
  placeholderTextColor: '#64748B',
})`
  background-color: ${colors.inputBg};
  padding: 13px;
  border-radius: 10px;
  margin-bottom: 10px;
  font-size: 14px;
  color: ${colors.text};

  border: 1px solid ${colors.border};
`;

/* 🔘 PRIMARY BUTTON */
export const Button = styled.TouchableOpacity`
  background-color: ${colors.primary};
  padding: 13px;
  border-radius: 10px;
  align-items: center;
  margin-top: 8px;
`;

export const ButtonText = styled.Text`
  color: #020617;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.4px;
`;

/* 🔘 SECONDARY BUTTON */
export const AlternateButton = styled.TouchableOpacity`
  background-color: transparent;
  padding: 13px;
  border-radius: 10px;
  align-items: center;
  margin-top: 8px;

  border: 1px solid ${colors.border};
`;

export const AlternateText = styled.Text`
  color: ${colors.text};
  font-weight: 500;
  font-size: 14px;
`;

/* 🔗 FORGOT */
export const ForgotPassword = styled.TouchableOpacity`
  align-self: flex-end;
  margin-bottom: 8px;
`;

export const ForgotText = styled.Text`
  font-size: 12px;
  color: ${colors.primary};
`;

export const FooterText = styled.Text`
  font-size: 12px;
  color: #94a3b8;
  text-align: center;
  margin-top: 12px;
`;
