import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Container from '../components/Container';

const VoicebotScreen = () => {
  const navigation = useNavigation();

  const handleDismiss = () => {
    navigation.goBack();
  };

  return (
    <View className="flex-1 bg-white justify-center items-center">
        <Container screenTitle="Voicebot Screen" />
      <TouchableOpacity
        onPress={handleDismiss}
        className="bg-blue-500 mt-4 px-6 py-3 rounded-full"
      >
        <Text className="text-white text-lg">Dismiss</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VoicebotScreen;
