import {
  View,
  Text,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from 'react-native';
import React from 'react';
import FontAwesome6, {
  FontAwesome6SolidIconName,
} from '@react-native-vector-icons/fontawesome6';

type ButtonPropT = {
  title: string;
  iconName: FontAwesome6SolidIconName;
  style?: ViewStyle;
  textStyle?: TextStyle;
};

export default function Button({
  title,
  iconName,
  style,
  textStyle,
}: ButtonPropT) {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View
        style={[
          {
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center',
            backgroundColor: '#000000ff',
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 10,
          },
          style,
        ]}
      >
        <Text
          style={[{
            fontSize: 16,
            color: 'white',
          }, textStyle]}
        >
          {title}
        </Text>
        <FontAwesome6
          color={'#fff'}
          size={14}
          name={iconName}
          iconStyle={'solid'}
        />
      </View>
    </TouchableOpacity>
  );
}
