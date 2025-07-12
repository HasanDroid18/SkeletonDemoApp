import { View, TouchableOpacity, Text, } from 'react-native';
import React from 'react';
import Container from '../components/Container';
import { useNavigation } from '@react-navigation/native';

const MainScreen = () => {
  const navigation = useNavigation();

  const voicebotBtn = () => {
    //@ts-ignore
    navigation.navigate('Voicebot');
  };

  return (
    <View className="flex-1 bg-white">
      

      <View className="flex-1 items-center justify-center">
        <Container screenTitle="Main Screen" />

        <TouchableOpacity
          onPress={voicebotBtn}
          className="bg-blue-500 mt-4 rounded-xl px-6 py-4"
        >
          <Text className="text-white text-lg font-semibold text-center">
            Launch Voicebot screen
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainScreen;
