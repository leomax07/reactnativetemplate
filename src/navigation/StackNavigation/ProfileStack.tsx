import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Colors} from 'squashapps-react-native-uikit';
import Profile from '../../module/Profile';
import { RootStackParamList } from '../BottomNavigation/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: Colors.WHITE},
      }}
      initialRouteName='ProfileScreen'>
      <Stack.Screen name='ProfileScreen' component={Profile} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
