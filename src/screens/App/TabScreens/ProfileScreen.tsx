import { View, Image } from 'react-native';
import React from 'react';
//FB auth to logout
import { logOut } from '@/services/Auth/Auth';
//buttons
import PrimaryButton from '@/components/Buttons/PrimaryButton';
//redux image
import { useSelector } from 'react-redux';
type Props = {};

const ProfileScreen = (props: Props) => {
  const image = useSelector((state: any) => state.userProfile.imageUrl);
  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log('Logout error:', error);
    }
  };
  return (
    <View style={{ padding: 20 }}>
      {image && (
        <Image
          source={{ uri: image }}
          style={{ width: 100, height: 100, marginBottom: 20 }}
        />
      )}
      <PrimaryButton text="Logout" onPress={handleLogout} />
      <PrimaryButton
        text="Test Button"
        onPress={() => console.log('clicked')}
      />
    </View>
  );
};

export default ProfileScreen;
