import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './lib/RootStackParamList';
import HomeScreen from './screens/HomeScreen';
import SplashScreen from './screens/SplashScreen';

export default function App() {
  const RootStack = createNativeStackNavigator<RootStackParamList>();

  return (
    <RootStack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}
    >
      <React.Fragment>
        <RootStack.Screen name="Splash" component={SplashScreen} />
        <RootStack.Screen name="Home" component={HomeScreen} />
      </React.Fragment>
    </RootStack.Navigator>
  );
}
