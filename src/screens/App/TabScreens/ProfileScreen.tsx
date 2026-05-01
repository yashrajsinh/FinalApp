import React from 'react';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from '@/services/api/Firebase/firebaseConfig';
import { logOut } from '@/services/auth/FirebaseAuth';

import {
  Container,
  Card,
  ProfileImage,
  NameText,
  InfoText,
  InfoCard,
  InfoLabel,
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
        {/* PROFILE IMAGE */}
        <ProfileImage
          source={{
            uri: image,
          }}
        />

        {/* NAME */}
        <NameText>{user?.displayName || 'No name set'}</NameText>

        {/* INFO SECTION */}
        <InfoCard>
          <InfoLabel>UID</InfoLabel>
          <InfoText numberOfLines={1}>{user?.uid || '—'}</InfoText>
        </InfoCard>

        <InfoCard>
          <InfoLabel>Email Verified</InfoLabel>
          <InfoText>{user?.emailVerified ? 'Yes ✅' : 'No ❌'}</InfoText>
        </InfoCard>

        <Spacer />

        {/* LOGOUT BUTTON */}
        <LogoutButtonWrapper>
          <LogoutButton activeOpacity={0.8} onPress={handleLogout}>
            <LogoutText>Logout</LogoutText>
          </LogoutButton>
        </LogoutButtonWrapper>
      </Card>
    </Container>
  );
};

export default ProfileScreen;
