import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Container from '../components/Container';
import { useNavigation } from '@react-navigation/native';

const SetCompanyIDScreen = () => {
    const navigation = useNavigation();

    const navigateToEnterCompanyID = () => {
        //@ts-ignore
        navigation.navigate('EnterCompanyID');
    };
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Container screenTitle="Set Company ID" />
      <TouchableOpacity
        onPress={navigateToEnterCompanyID}
        className="bg-blue-500 mt-4 px-6 py-3 rounded-lg"
      >
        <Text className="text-white">Enter Company ID</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SetCompanyIDScreen;
