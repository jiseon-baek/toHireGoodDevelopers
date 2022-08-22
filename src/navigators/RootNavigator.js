import React, {useEffect, useRef} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {SafeAreaView, useColorScheme} from 'react-native';
import Home from '../screens/Home/Home';
import {SCREEN} from './routes';

const RootStack = createStackNavigator();

export const screenOptions = {
  gestureEnabled: false,
  headerShown: false,
};

export default function RootNavigator() {
  const isDarkMode = useColorScheme() === 'dark';

  const refNavigation = useRef(null);
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={refNavigation}>
        <RootStack.Navigator screenOptions={screenOptions}>
          <RootStack.Screen name={SCREEN.HOME} component={Home} />
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
