import React from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import styled from 'styled-components/native';

//drawer nav (APP Nav)
import DrawerNavigator from '@/navigation/App/DrawerNav/DrawerNavigator';
//RN Splash
import { useEffect } from 'react';
import RNBootSplash from 'react-native-bootsplash';
//Log in (Auth Nav)
import AuthNavigator from '@/navigation/Auth/AuthNavigator';
function App() {
  //Splash Screen Effect
  useEffect(() => {
    RNBootSplash.hide({ fade: true });
  }, []);

  const isLoggedIn = false; // real Auth state
  return (
    <NavigationContainer>
      <Container>
        {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}
      </Container>
    </NavigationContainer>
  );
}

export default App;

const Container = styled(SafeAreaView)`
  flex: 1;
`;
