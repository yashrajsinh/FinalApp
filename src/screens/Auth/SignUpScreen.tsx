import { Image } from 'react-native';
import React, { useState } from 'react';
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
} from '@/components/styles/loginStyles';

//navigation
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type AuthStackParamList = {
  Login: undefined;
  SignUp: undefined;
};
type Nav = NativeStackNavigationProp<AuthStackParamList>;

type Props = {};

const SignUpScreen = (props: Props) => {
  const navigation = useNavigation<Nav>();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <Content>
        <Card>
          {/* 🦇 Logo */}
          <Image
            source={require('@/assets/logo.png')}
            style={{
              width: 130,
              height: 130,
              alignSelf: 'center',
              marginBottom: 16,
              resizeMode: 'contain',
              opacity: 0.95,
            }}
          />

          {/* 📝 Titles */}
          <Title>Create Account</Title>
          <Subtitle>Join Gotham today</Subtitle>

          {/* ✏️ Inputs */}
          <Input placeholder="Full Name" value={name} onChangeText={setName} />

          <Input placeholder="Email" value={email} onChangeText={setEmail} />

          <Input
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          {/* 🔘 Actions */}
          <PrimaryButton text="Sign Up" onPress={() => console.log('Signup')} />

          <SecondaryButton
            text="Back to Login"
            onPress={() => navigation.goBack()}
          />

          {/* optional hint */}
          <FooterText>By signing up you accept Gotham’s terms</FooterText>
        </Card>
      </Content>
    </Container>
  );
};

export default SignUpScreen;
