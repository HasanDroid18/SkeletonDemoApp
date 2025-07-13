import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingsScreen from '../screens/SettingsScreen';
import PickVoiceScreen from '../screens/PickVoiceScreen';
import SetCompanyIDScreen from '../screens/SetCompanyIDScreen';
import EnterCompanyIDScreen from '../screens/EnterCompanyIDScreen';

const Stack = createNativeStackNavigator();

const SettingsNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Settings">
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ headerTitle: 'Back'}}
      />
      <Stack.Screen
        name="PickVoice"
        component={PickVoiceScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SetCompanyID"
        component={SetCompanyIDScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EnterCompanyID"
        component={EnterCompanyIDScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default SettingsNavigation;
