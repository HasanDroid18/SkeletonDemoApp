import { View,Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Container from '../components/Container';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  const getStartedBtn = () => {
    //@ts-ignore
    navigation.navigate('EnterCompanyID');
  };
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Container screenTitle="Welcome to the App!" />
      <TouchableOpacity
      onPress={getStartedBtn}
      className="bg-blue-500 mt-4 rounded-xl px-6 py-4"
    >
      <Text className="text-white text-lg font-semibold text-center">Get Started</Text>
    </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;
