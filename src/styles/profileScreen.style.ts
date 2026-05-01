import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #0b1220;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.View`
  width: 92%;
  padding: 30px;
  background-color: #111827;
  border-radius: 28px;
  align-items: center;

  shadow-color: #000;
  shadow-opacity: 0.4;
  shadow-radius: 12px;
  elevation: 10;
`;

export const ProfileImage = styled.Image`
  width: 130px;
  height: 130px;
  border-radius: 65px;
  margin-bottom: 20px;
  border-width: 3px;
  border-color: #3b82f6;
`;

export const NameText = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 6px;
`;

export const InfoText = styled.Text`
  color: #9ca3af;
  font-size: 14px;
  margin-bottom: 4px;
`;

export const Spacer = styled.View`
  height: 20px;
`;

export const LogoutButtonWrapper = styled.View`
  width: 100%;
  margin-top: 25px;
`;

export const LogoutButton = styled.TouchableOpacity`
  background-color: #ef4444;
  padding: 14px;
  border-radius: 14px;
  width: 100%;
  align-items: center;
`;

export const LogoutText = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 16px;
`;
