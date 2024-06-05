import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Colors } from 'squashapps-react-native-uikit';
import Home from '../../module/Home';
import { RootStackParamList } from '../BottomNavigation/types';
import Header from '../../components/Header';

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor: Colors.WHITE },
            }}
            initialRouteName='HomeScreen'>
            <Stack.Screen name='HomeScreen' component={Home}
            />
        </Stack.Navigator>
    );
};

export default HomeStack;
