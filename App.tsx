import React from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import styled from 'styled-components/native';

//drawer nav
import DrawerNavigator from '@/navigation/App/DrawerNav/DrawerNavigator';
//RN Splash
import { useEffect } from 'react';
import RNBootSplash from 'react-native-bootsplash';

function App() {
  useEffect(() => {
    RNBootSplash.hide({ fade: true });
  }, []);
  return (
    <NavigationContainer>
      <Container>
        <DrawerNavigator />
      </Container>
    </NavigationContainer>
  );
}

export default App;

const Container = styled(SafeAreaProvider)`
  flex: 1;
`;
