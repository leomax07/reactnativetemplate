import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Colors } from 'squashapps-react-native-uikit';
import { RootStackParamList } from '../BottomNavigation/types';
import Header from '../../components/Header';
import Notifications from '../../module/Notification';

const Stack = createNativeStackNavigator<RootStackParamList>();

const NotificationStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor: Colors.WHITE },
            }}
            initialRouteName='NotificationScreen'>
            <Stack.Screen name='NotificationScreen' component={Notifications}
            />
        </Stack.Navigator>
    );
};

export default NotificationStack;
