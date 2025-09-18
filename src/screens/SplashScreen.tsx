import { View, Image } from 'react-native';
import React, { useCallback, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../lib/RootStackParamList';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Splash'>;

export default function SplashScreen({ navigation }: HomeScreenProps) {

  useEffect(() => {
    const timeout = setTimeout(()=>{
      navigation.replace("Home")
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
        source={require('../assets/D1.png')}
        style={{
          height: 250,
          width: 250,
        }}
      />
    </View>
  );
}
