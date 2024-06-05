import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../BottomNavigation/types';
import BottomNavigation from '../BottomNavigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainNavigator = () => {
    return (
            <Stack.Navigator initialRouteName="BottomTab">
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="BottomTab"
                    component={BottomNavigation}
                />
            </Stack.Navigator>
    )
}

export default MainNavigator

