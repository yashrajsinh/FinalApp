import React, { useState } from 'react';
import { Image } from 'react-native';

// components
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import SecondaryButton from '@/components/Buttons/SecondaryButton';
import Input from '@/components/InputField/Input';

// styles
import {
  Container,
  Content,
  Card,
  Title,
  Subtitle,
  FooterText,
} from '@/styles/loginStyles';

// navigation
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type AuthStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Forgot: undefined;
};

type Nav = NativeStackNavigationProp<AuthStackParamList>;

const ForgotScreen = () => {
  const navigation = useNavigation<Nav>();
  const [email, setEmail] = useState('');

  return (
    <Container>
      <Content>
        <Card>
          {/* 🦇 Logo */}
          <Image
            source={require('@/assets/logo.png')}
            style={{
              width: 120,
              height: 120,
              alignSelf: 'center',
              marginBottom: 16,
              resizeMode: 'contain',
              opacity: 0.95,
            }}
          />

          {/* 📝 Titles */}
          <Title>Reset Password</Title>
          <Subtitle>Enter your email and we’ll send you a reset link</Subtitle>

          {/* ✏️ Input */}
          <Input
            placeholder="Email address"
            value={email}
            onChangeText={setEmail}
          />

          {/* 🔘 Actions */}
          <PrimaryButton
            text="Send Reset Link"
            onPress={() => console.log('Reset password')}
          />

          <SecondaryButton
            text="Back to Login"
            onPress={() => navigation.goBack()}
          />

          {/* 📄 Footer */}
          <FooterText>
            If the email exists, you’ll receive a reset link shortly
          </FooterText>
        </Card>
      </Content>
    </Container>
  );
};

export default ForgotScreen;
