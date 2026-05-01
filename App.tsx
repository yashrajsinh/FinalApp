import React, { useEffect, useState } from 'react';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import styled from 'styled-components/native';

import DrawerNavigator from '@/navigation/App/DrawerNav/DrawerNavigator';
import AuthNavigator from '@/navigation/Auth/AuthNavigator';

import RNBootSplash from 'react-native-bootsplash';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

import Toast from 'react-native-toast-message';

//redux provider
import { Provider } from 'react-redux';
import imageStore from '@/services/redux/Imagestore';
//random image

function App() {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [initializing, setInitializing] = useState(true);

  // Firebase auth listener
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(
      (user: FirebaseAuthTypes.User | null) => {
        setUser(user);
        setInitializing(false);
      },
    );
    return subscriber;
  }, []);

  useEffect(() => {
    if (!initializing) {
      RNBootSplash.hide({ fade: true });
    }
  }, [initializing]);

  // While checking auth → keep splash
  if (initializing) return null;

  return (
    <>
      <Provider store={imageStore}>
        <NavigationContainer>
          <Container>
            {user ? <DrawerNavigator /> : <AuthNavigator />}
          </Container>
        </NavigationContainer>
        <Toast position="bottom" />
      </Provider>
    </>
  );
}

export default App;

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: '#020617';
`;
