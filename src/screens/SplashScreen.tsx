import { View, Image } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      //@ts-ignore
      navigation.navigate('Onboarding'); 
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Image source={require('../assets/images/Splash.png')} className="w-[150px] h-[150px]" />
    </View>
  );
};

export default SplashScreen;
