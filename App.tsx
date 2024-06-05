import React from 'react';
import 'react-native-gesture-handler';
import Drawernavigation from './src/navigation/DrawerNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppProvider from './src/utils/AppProvider';
;

const App = () => {
  return (
    <SafeAreaProvider>
      <AppProvider>
        <NavigationContainer>
          <Drawernavigation />
        </NavigationContainer>
      </AppProvider>
    </SafeAreaProvider>
  );
};

export default App;
