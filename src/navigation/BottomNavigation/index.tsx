import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from './types';
import TabBarIcon from './TabBarIcon';
import HomeStack from '../StackNavigation/HomeStack';
import { Icons } from 'squashapps-react-native-uikit';
import ProfileStack from '../StackNavigation/ProfileStack';

const { SvgHome } = Icons;
const BottomNavigation = () => {
    const Tab = createBottomTabNavigator<RootTabParamList>();
    return (
        <Tab.Navigator initialRouteName="HomeTab">
            <Tab.Screen
                name="HomeTab"
                component={HomeStack}
                options={{
                    title: '',
                    tabBarIcon: ({ focused }: any) => (
                        <TabBarIcon
                            icon={
                                <SvgHome
                                    height={24}
                                    width={24}
                                    stroke={focused ? "#4f46e5" : "#fff"}
                                    strokeOne={focused ? "#fff" : "#4f46e5"}
                                    fill={focused ? "#4f46e5" : "#fff"}
                                />
                            }
                        />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="ProfileTab"
                component={ProfileStack}
                options={{
                    title: '',
                    tabBarIcon: ({ focused }: any) => (
                        <TabBarIcon
                            icon={
                                <View
                                    style={{
                                        borderColor: focused ? "#4f46e5" : "#fff",
                                        borderWidth: focused ? 3 : 0,
                                        borderRadius: 100,
                                    }}>
                                    <Image
                                        style={{
                                            width: focused ? 21 : 24,
                                            height: focused ? 21 : 24,
                                            borderRadius: 100,
                                        }}
                                        source={{ uri: 'https://i.ibb.co/fvG0NKw/Ellipse-11-6.png' }}
                                    />
                                </View>
                            }
                        />
                    ),
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomNavigation

const styles = StyleSheet.create({})