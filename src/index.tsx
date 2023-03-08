/* eslint-disable react/jsx-filename-extension */
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as React from 'react';
import { View, LogBox, StatusBar } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';
import GalioApp from '../routes';

LogBox.ignoreAllLogs(true);
StatusBar.setTranslucent(true);
StatusBar.setHidden(true);

export default function App() {
  const queryClient = new QueryClient();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <View style={{ flex: 1 }}>
          <GalioApp />
        </View>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
