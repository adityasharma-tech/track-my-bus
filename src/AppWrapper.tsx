import React from 'react';
import App from './App';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import { RootStackParamList } from './lib/RootStackParamList';
import { StatusBar, useColorScheme } from 'react-native';
import { AuthProvider } from './hooks/auth';

export default function AppWrapper() {
  let navigationRef =
    React.useRef<NavigationContainerRef<RootStackParamList> | null>(null);

  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar
        backgroundColor={isDarkMode ? '#fff' : '#000'}
        barStyle={isDarkMode ? 'dark-content' : 'light-content'}
      />
      <AuthProvider>
        <App />
      </AuthProvider>
    </NavigationContainer>
  );
}
