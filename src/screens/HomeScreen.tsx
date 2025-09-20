import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useAuth } from '../hooks/auth';
import { displayName } from "../../app.json"
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../lib/RootStackParamList';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: HomeScreenProps) {

  const { user } = useAuth();

  return (
    <View
      style={{
        backgroundColor: '#FAFAF9',
        height: '100%',
        paddingVertical: 10,
      }}
    >
      <View style={{
        paddingVertical: 5,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
        <Text style={{
          fontSize: 24,
          fontWeight: '800'
        }}>{displayName}</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("UniversityPicker")} activeOpacity={0.5} style={{
          flexDirection: 'row',
          alignItems: 'center',
          columnGap: 5
        }}>
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
          }}>
            Select University
          </Text>
          <FontAwesome6 name='chevron-down' iconStyle='solid' size={20}/> 
        </TouchableOpacity>
      </View>
    </View>
  );
}
