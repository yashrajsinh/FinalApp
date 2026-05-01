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
} from '@/styles/loginStyles';
//Toast
import Toast from 'react-native-toast-message';
//navigation
import { useNavigation } from '@react-navigation/native';
//API Service
import { logIn } from '@/services/api/FirebaseAuth/Auth';
type Nav = {
  navigate: (screen: string) => void;
};

const LogInScreen = () => {
  const navigation = useNavigation<Nav>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // func to handle sign up
  const handleLogIn = async () => {
    //local validations
    if (!email || !password) {
      showToast('error', 'Please fill all fields');
      return;
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      showToast('error', 'Invalid email format');
      return;
    }
    if (password.length < 6) {
      showToast('error', 'Password must be at least 6 characters');
      return;
    }
    try {
      await logIn(email, password);
      showToast('success', 'User exits in DB');
    } catch (error) {
      console.log('Log in Error', error);

      let message = 'Something went wrong';

      if (typeof error === 'object' && error !== null && 'code' in error) {
        const err = error as { code: string };

        if (err.code === 'auth/user-not-found') {
          message = 'User not found';
        } else if (err.code === 'auth/wrong-password') {
          message = 'Incorrect password';
        } else if (err.code === 'auth/invalid-email') {
          message = 'Invalid email address';
        }
      }
      showToast('error', message);
    }
  };
  //Toast func
  const showToast = (type: string, message: string) => {
    Toast.show({
      type: type,
      text2: message,
    });
  };

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
          <ForgotPassword onPress={() => navigation.navigate('Forgot')}>
            <ForgotText>Forgot Password?</ForgotText>
          </ForgotPassword>

          {/* Buttons */}
          <PrimaryButton text="Login" onPress={handleLogIn} />
          <SecondaryButton
            text="Sign Up"
            onPress={() => navigation.navigate('Register')}
          />
        </Card>
      </Content>
    </Container>
  );
};

export default LogInScreen;
