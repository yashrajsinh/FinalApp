import React from 'react';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from '@/services/Firebase/firebaseConfig';
import { logOut } from '@/services/Auth/Auth';

import {
  Container,
  Card,
  ProfileImage,
  NameText,
  InfoText,
  Spacer,
  LogoutButton,
  LogoutText,
  LogoutButtonWrapper,
} from '@/styles/profileScreen.style';

const ProfileScreen = () => {
  const [user, setUser] = React.useState<any>(null);

  const image = useSelector((state: any) => state.userProfile.imageUrl);

  React.useEffect(() => {
    const unsub = onAuthStateChanged(auth, setUser);
    return unsub;
  }, []);

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log('Logout error:', error);
    }
  };

  return (
    <Container>
      <Card>
        {/* BIG PROFILE IMAGE */}
        <ProfileImage
          source={{
            uri: image,
          }}
        />

        {/* NAME */}
        <NameText>{user?.displayName || 'No name set'}</NameText>

        <InfoText>UID: {user?.uid}</InfoText>
        <InfoText>
          Email Verified: {user?.emailVerified ? 'Yes' : 'No'}
        </InfoText>

        <Spacer />

        {/* BIG LOGOUT BUTTON */}
        <LogoutButtonWrapper>
          <LogoutButton onPress={handleLogout}>
            <LogoutText>Logout</LogoutText>
          </LogoutButton>
        </LogoutButtonWrapper>
      </Card>
    </Container>
  );
};

export default ProfileScreen;
