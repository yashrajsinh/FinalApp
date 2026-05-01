import { View, Text } from 'react-native';
import React from 'react';
//stack nav for auth
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//styles
import { Container } from '@/navigation/Auth/AuthNavigator.styles';
//screens
import LogInScreen from '@/screens/Auth/LogInScreen';
import SignUpScreen from '@/screens/Auth/SignUpScreen';
import ForgotScreen from '@/screens/Auth/ForgotScreen';

type Props = {};
//types for screens
type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  Forgot: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();
const AuthNavigator = (props: Props) => {
  return (
    <Container>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LogInScreen} />
        <Stack.Screen name="Register" component={SignUpScreen} />
        <Stack.Screen name="Forgot" component={ForgotScreen} />
      </Stack.Navigator>
    </Container>
  );
};

export default AuthNavigator;
