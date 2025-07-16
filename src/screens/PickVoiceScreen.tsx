import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Container from '../components/Container';
import { useNavigation, useNavigationState } from '@react-navigation/native';

const PickVoiceScreen = () => {
  const navigation = useNavigation();

  const routes = useNavigationState(state => state.routes);
  const isFromSettingsStack = routes.some(route =>
    ['Settings'].includes(route.name)
  );

  
  const dismissBtn = () => {
    if (isFromSettingsStack) {
      navigation.goBack(); 
    } else {
      //@ts-ignore
      navigation.navigate('Main');
    }
  };
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Container screenTitle="Pick Voice" />
      <TouchableOpacity
        onPress={dismissBtn}
        className="bg-red-500 mt-4 rounded-xl px-6 py-4"
      >
        <Text className="text-white text-lg font-semibold text-center">
          Dismiss
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PickVoiceScreen;
