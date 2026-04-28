import React, { useState } from 'react';
import { Image, StatusBar } from 'react-native';

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
  ForgotPassword,
  ForgotText,
} from '@/components/styles/loginStyles';

const LogInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#020617" />

      <Content>
        <Card>
          {/* Logo */}
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

          {/* Titles */}
          <Title>Welcome to Gotham</Title>
          <Subtitle>Sign in to continue</Subtitle>

          {/* Inputs */}
          <Input placeholder="Email" value={email} onChangeText={setEmail} />
          <Input
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          {/* Forgot Password */}
          <ForgotPassword>
            <ForgotText>Forgot Password?</ForgotText>
          </ForgotPassword>

          {/* Buttons */}
          <PrimaryButton text="Login" onPress={() => console.log('Login')} />
          <SecondaryButton
            text="Sign Up"
            onPress={() => console.log('Signup')}
          />
        </Card>
      </Content>
    </Container>
  );
};

export default LogInScreen;
