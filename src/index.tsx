import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Main } from './navigation/Main';
import { QueryClient, QueryClientProvider } from 'react-query'


export default function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        <StatusBar style="auto" />
        <NavigationContainer>
          <Main />
        </NavigationContainer>
      </PaperProvider>
    </QueryClientProvider>
  );
}
