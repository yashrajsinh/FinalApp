import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #0f172a;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const Card = styled.View`
  width: 100%;
  background-color: #1e293b;
  border-radius: 24px;
  padding: 28px;
  align-items: center;

  shadow-color: #000;
  shadow-opacity: 0.3;
  shadow-radius: 12px;
  elevation: 10;
`;

export const ProfileImage = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  margin-bottom: 16px;
  border: 3px solid #38bdf8;
`;

export const NameText = styled.Text`
  font-size: 22px;
  font-weight: 700;
  color: #f1f5f9;
  margin-bottom: 20px;
`;

export const InfoCard = styled.View`
  width: 100%;
  background-color: #334155;
  border-radius: 14px;
  padding: 14px;
  margin-bottom: 10px;
`;

export const InfoLabel = styled.Text`
  font-size: 12px;
  color: #94a3b8;
`;

export const InfoText = styled.Text`
  font-size: 14px;
  color: #e2e8f0;
  margin-top: 4px;
`;

export const Spacer = styled.View`
  height: 20px;
`;

export const LogoutButtonWrapper = styled.View`
  width: 100%;
  margin-top: 10px;
`;

export const LogoutButton = styled.TouchableOpacity`
  background-color: #ef4444;
  padding: 14px;
  border-radius: 14px;
  align-items: center;
`;

export const LogoutText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 600;
`;
