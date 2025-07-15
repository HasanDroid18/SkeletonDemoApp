import './src/global.css';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/screens/SplashScreen';
import OnboardingNavigator from './src/navigation/OnboardingNavigator';
import MainScreen from './src/screens/MainScreen';
import VoicebotScreen from './src/screens/VoicebotScreen';
import SettingsNavigation from './src/navigation/SettingsNavigation';
import SetCompanyIDScreen from './src/screens/SetCompanyIDScreen';

const Stack = createNativeStackNavigator();

const config = {
  screens: {
    SetCompanyIDScreen: 'set-company-id',
  },
};

const App = () => {
  return (
    <NavigationContainer linking={{ prefixes: ['myapp://app'], config }}>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Onboarding"
          component={OnboardingNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{
            headerShown: false,
            presentation: 'transparentModal',
            animation: 'slide_from_bottom',
          }}
        />
        <Stack.Screen
          name="Voicebot"
          component={VoicebotScreen}
          options={{
            headerShown: false,
            presentation: 'modal',
            animation: 'slide_from_bottom',
          }}
        />
        <Stack.Screen
          name="SettingStack"
          component={SettingsNavigation}
          options={{
            headerShown: false,
            presentation: 'modal',
            animation: 'slide_from_bottom',
          }}
        />
        <Stack.Screen
          name="SetCompanyID"
          component={SetCompanyIDScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
