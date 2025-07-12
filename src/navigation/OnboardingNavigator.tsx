import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import EnterCompanyIDScreen from '../screens/EnterCompanyIDScreen';
import PickVoiceScreen from '../screens/PickVoiceScreen';

const Stack = createNativeStackNavigator();

const OnboardingNavigator = () => {

  return (
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EnterCompanyID"
          component={EnterCompanyIDScreen}
        />
        <Stack.Screen
          name="PickVoice"
          component={PickVoiceScreen}
        />
      </Stack.Navigator>
  );
};

export default OnboardingNavigator