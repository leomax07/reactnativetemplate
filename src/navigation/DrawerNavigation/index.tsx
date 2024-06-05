import React, { useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Notifications from '../../module/Notification';
import CustomDrawerContent from './CustomDrawerContent';
import AppLayout from '../AppLayout';


const Drawer = createDrawerNavigator();

const Drawernavigation = () => {

    return (
        <Drawer.Navigator initialRouteName="AppLayout" drawerContent={(props) => <CustomDrawerContent {...props} />}>
            <Drawer.Screen
                name="Home"
                component={AppLayout}
                options={{ drawerLabel: 'Home' }}
            />
            <Drawer.Screen
                name="Notifications"
                component={Notifications}
                options={{ drawerLabel: 'Notification' }}
            />
        </Drawer.Navigator>
    );
}

export default Drawernavigation;
