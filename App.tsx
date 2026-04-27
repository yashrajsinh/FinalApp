import React from 'react';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import styled from 'styled-components/native';

//drawer nav
import DrawerNavigator from '@/navigation/App/DrawerNav/DrawerNavigator';
function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Container>
          <DrawerNavigator />
        </Container>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;

const Container = styled(SafeAreaView)`
  flex: 1;
`;
