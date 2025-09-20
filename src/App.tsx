import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './lib/RootStackParamList';
import HomeScreen from './screens/HomeScreen';
import SplashScreen from './screens/SplashScreen';
import AuthScreen from './screens/AuthScreen';
import UniversityPickerScreen from './screens/UniversityPickerScreen';

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
        <RootStack.Screen name="Auth" component={AuthScreen} />
        <RootStack.Screen
          name="UniversityPicker"
          component={UniversityPickerScreen}
          initialParams={{
            select: false,
          }}
        />
      </React.Fragment>
    </RootStack.Navigator>
  );
}
