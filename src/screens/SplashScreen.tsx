import { View, Image } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Linking } from 'react-native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(async () => {
      const url = await Linking.getInitialURL();

      if (url?.includes('set-company-id')) {
        navigation.reset({
          index: 0,
          //@ts-ignore
          routes: [{ name: 'SetCompanyID' }],
        });
      } else {
        navigation.reset({
          index: 0,
          //@ts-ignore
          routes: [{ name: 'Onboarding' }],
        });
      }
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
