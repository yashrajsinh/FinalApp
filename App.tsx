import React from 'react';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import styled from 'styled-components/native';
//tab bar
import TabNavigation from '@/navigation/App/TabNavigation';

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Container>
          <TabNavigation />
        </Container>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;

const Container = styled(SafeAreaView)`
  flex: 1;
`;
