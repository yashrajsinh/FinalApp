import React from 'react';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from '@/services/api/Firebase/firebaseConfig';
import { logOut } from '@/services/auth/FirebaseAuth';

import {
  Container,
  Header,
  HeaderTitle,
  HeaderSub,
  Card,
  ProfileImage,
  NameText,
  InfoCard,
  InfoLabel,
  InfoText,
  Spacer,
  LogoutButton,
  LogoutText,
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
      {/* 🔥 HEADER */}
      <Header>
        <HeaderTitle>Profile</HeaderTitle>
        <HeaderSub>Manage your account</HeaderSub>
      </Header>

      {/* 🧾 CARD */}
      <Card>
        <ProfileImage source={{ uri: image }} />

        <NameText>{user?.displayName || 'No name set'}</NameText>

        <InfoCard>
          <InfoLabel>User ID</InfoLabel>
          <InfoText numberOfLines={1}>{user?.uid || '—'}</InfoText>
        </InfoCard>

        <InfoCard>
          <InfoLabel>Email Verified</InfoLabel>
          <InfoText>
            {user?.emailVerified ? 'Verified ✅' : 'Not Verified ❌'}
          </InfoText>
        </InfoCard>

        <Spacer />

        <LogoutButton activeOpacity={0.85} onPress={handleLogout}>
          <LogoutText>Logout</LogoutText>
        </LogoutButton>
      </Card>
    </Container>
  );
};

export default ProfileScreen;
