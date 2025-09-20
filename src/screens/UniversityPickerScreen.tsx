import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { displayName } from '../../app.json';
import React, { useCallback } from 'react';
import { RootStackParamList } from '../lib/RootStackParamList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { universities } from '../lib/constants';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import Button from '../components/Button';

type UniversityPickerScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'UniversityPicker'
>;

export default function UniversityPickerScreen({
  navigation,
  route,
}: UniversityPickerScreenProps) {
  const handleSelectUniversity = useCallback((uid: string) => {
    if (route.params.select) navigation.goBack();
  }, []);

  return (
    <View
      style={{
        height: '100%',
      }}
    >
      <View
        style={{
          paddingVertical: 10,
          paddingHorizontal: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: '800',
          }}
        >
          {displayName}
        </Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          paddingHorizontal: 10,
        }}
      >
        {universities.map((u, idx) => (
          <TouchableOpacity
            onPress={() => handleSelectUniversity(u.uid)}
            activeOpacity={route.params.select ? 0.6 : 0}
            style={{
              // borderWidth: 2,
              borderColor: '#000',
              backgroundColor: 'white',
              paddingVertical: 10,
              borderRadius: 10,
              position: 'relative',
              paddingHorizontal: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
            key={u.uid}
          >
            <View>
              <Text
                style={{
                  fontWeight: 'medium',
                  fontSize: 20,
                }}
              >
                {u.name}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  columnGap: 5,
                }}
              >
                <FontAwesome6 name="location-dot" iconStyle="solid" />
                <Text>{u.distance} KM Away</Text>
              </View>
            </View>
            <Button
              textStyle={{
                fontSize: 14,
              }}
              style={{
                paddingHorizontal: 14,
                paddingVertical: 8,
              }}
              iconName="chevron-right"
              title="View Routine"
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
