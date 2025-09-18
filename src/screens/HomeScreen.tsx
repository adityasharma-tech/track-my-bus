import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { popularDestinationsList, upcomingEventsList } from '../lib/constants';
import Button from '../components/Button';

export default function HomeScreen() {
  const [isInputFocus, setIsInputFocus] = useState(false);

  return (
    <View
      style={{
        backgroundColor: '#FAFAF9',
        height: '100%',
        paddingVertical: 10,
      }}
    >
      <View
        style={{
          backgroundColor: '#ffffff',
          borderRadius: 100,
          borderWidth: 0.5,
          borderColor: '#E7E5E4',
          paddingHorizontal: 14,
          flexDirection: 'row',
          alignItems: 'center',
          columnGap: 10,
          marginHorizontal: 10,
        }}
      >
        <FontAwesome6
          color="#2b2b2bff"
          size={20}
          name="magnifying-glass"
          iconStyle="solid"
        />
        <TextInput
          cursorColor="#000"
          placeholderTextColor="#A6A09B"
          placeholder="Where your want to go?"
          onFocus={() => setIsInputFocus(true)}
          onBlur={() => setIsInputFocus(false)}
          style={{
            fontSize: 18,
            color: '#000',
          }}
        />
      </View>
      <View
        style={{
          paddingVertical: 14,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: '800',
            paddingStart: 10,
          }}
        >
          Upcoming events in Kerala
        </Text>
        <ScrollView
          style={{
            height: 300,
            paddingTop: 10,
            paddingBottom: 3,
          }}
          horizontal
        >
          {upcomingEventsList.map((event, idx) => (
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => console.log('It is pressable')}
            >
              <ImageBackground
                style={{
                  height: '100%',
                  width: 300,
                  borderRadius: 10,
                  borderWidth: 0.7,
                  borderColor: '#afafafff',
                  overflow: 'hidden',
                  position: 'relative',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  marginRight: 10,
                  padding: 10,
                  marginLeft: idx == 0 ? 10 : 0,
                }}
                imageStyle={{
                  objectFit: 'cover',
                  height: 300,
                }}
                key={event.slug}
                source={{
                  uri: event.bgImageUrl,
                }}
              >
                <View
                  style={{
                    position: 'absolute',
                    backgroundColor: '#00000065',
                    inset: 0,
                  }}
                />
                <Text
                  style={{
                    fontSize: 28,
                    color: '#ffffffff',
                    fontWeight: 'bold',
                  }}
                >
                  {event.time.getDate()} September
                </Text>
                <View>
                  <Text
                    style={{
                      fontSize: 28,
                      color: '#ffffffff',
                      fontWeight: '900',
                    }}
                  >
                    {event.title}
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            paddingHorizontal: 10,
            paddingVertical: 10,
          }}
        >
          <Button title="View more" iconName="chevron-right"></Button>
        </View>
        <View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '800',
              paddingStart: 10,
            }}
          >
            Popular destinations in Kerala
          </Text>
          <ScrollView
            style={{
              height: 140,
              paddingTop: 10,
              paddingBottom: 5,
            }}
            horizontal
          >
            {popularDestinationsList.map((event, idx) => (
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => console.log('It is pressable')}
              >
                <ImageBackground
                  style={{
                    height: '100%',
                    width: 200,
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: '#fff',
                    overflow: 'hidden',
                    position: 'relative',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    marginRight: 10,
                    padding: 10,
                    marginLeft: idx == 0 ? 10 : 0,
                  }}
                  imageStyle={{
                    objectFit: 'cover',
                    height: 140,
                  }}
                  key={event.slug}
                  source={{
                    uri: event.bgImageUrl,
                  }}
                >
                  <View
                    style={{
                      position: 'absolute',
                      backgroundColor: '#00000065',
                      inset: 0,
                    }}
                  />
                  <View />
                  <View>
                    <Text
                      style={{
                        fontSize: 18,
                        color: '#ffffffff',
                        fontWeight: '500',
                        maxWidth: '95%',
                      }}
                    >
                      {event.title}
                    </Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              paddingHorizontal: 10,
              paddingVertical: 10,
            }}
          >
            <Button title="View more" iconName="chevron-right"></Button>
          </View>
        </View>
      </View>
    </View>
  );
}
