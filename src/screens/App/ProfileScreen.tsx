import { View, Text } from 'react-native';
import React from 'react';
//FB auth to logout
import { logOut } from '@/services/Auth/Auth';
//buttons
import PrimaryButton from '@/components/Buttons/PrimaryButton';
type Props = {};

const ProfileScreen = (props: Props) => {
  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log('Logout error:', error);
    }
  };
  return (
    <View style={{ padding: 20 }}>
      <PrimaryButton text="Logout" onPress={handleLogout} />
      <PrimaryButton
        text="Test Button"
        onPress={() => console.log('clicked')}
      />
    </View>
  );
};

export default ProfileScreen;
