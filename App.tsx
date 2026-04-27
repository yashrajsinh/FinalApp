import React from 'react';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import styled from 'styled-components/native';
//Drawer bar
import DrawerNavigation from '@/navigation/App/DrawerNavigation';

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Container>
          <DrawerNavigation />
        </Container>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;

const Container = styled(SafeAreaView)`
  flex: 1;
`;
