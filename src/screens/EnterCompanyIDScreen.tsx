import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation, useNavigationState } from '@react-navigation/native';
import Container from '../components/Container';

const EnterCompanyIDScreen = () => {
  const navigation = useNavigation();

  const routes = useNavigationState(state => state.routes);
  const isFromSettingsStack = routes.some(route =>
    ['Settings', 'SetCompanyID'].includes(route.name),
  );

  const continueBtn = () => {
   if (isFromSettingsStack) {
      navigation.reset({
        index: 0,
        //@ts-ignore
        routes: [{ name: 'Settings' }],
      });
    }else {
      //@ts-ignore
      navigation.navigate('PickVoice');
    }
  };
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Container screenTitle="Enter Your Company ID" />
      <TouchableOpacity
        onPress={continueBtn}
        className="bg-blue-500 mt-4 rounded-xl px-6 py-4"
      >
        <Text className="text-white text-lg font-semibold text-center">
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default EnterCompanyIDScreen;
