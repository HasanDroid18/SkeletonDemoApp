import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Container from '../components/Container';

const SettingsScreen = () => {
  const navigation = useNavigation();

  const navigateToPickVoice = () => {
    //@ts-ignore
    navigation.navigate('PickVoice');
  };
  const navigateToSetCompanyID = () => {
    //@ts-ignore
    navigation.navigate('SetCompanyID');
  };

  return (
    <View className="flex-1 bg-white justify-center items-center">
      <Container screenTitle="Settings" />
      <TouchableOpacity
        className="bg-blue-500 mt-5 px-6 py-3 rounded-lg"
        onPress={navigateToSetCompanyID}
      >
        <Text className="text-white text-bold">Set Company ID</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="bg-blue-500 mt-4 px-6 py-3 rounded-lg mb-4"
        onPress={navigateToPickVoice}
      >
        <Text className="text-white text-bold text-2xl">Pick Voice</Text>
      </TouchableOpacity>

    </View>
  );
};

export default SettingsScreen;
