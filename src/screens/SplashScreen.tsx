import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import { RootStackParamList } from '../lib/RootStackParamList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useAuth } from '../hooks/auth';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Splash'>;

export default function SplashScreen({ navigation }: HomeScreenProps) {
  const auth = useAuth();

  useEffect(() => {
    const timeout = setTimeout(() => {
      auth.user ? navigation.replace('Home') : navigation.replace('Auth')
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <View
      style={{
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
      }}
    >
      <Image
        source={require('../assets/TrackMyBus.png')}
        style={{
          height: 250,
          width: 250,
          borderRadius: 100,
        }}
      />
    </View>
  );
}
