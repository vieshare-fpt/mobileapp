import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../screens/Home';
import { Login, } from '../screens/Login';
import { NavigationContainer } from '@react-navigation/native';

export type MainStackParams = {
  Home: undefined;
  Login: undefined;
};

const loginScreen = 'Login'
const homeScreen = 'Home'

const Tab = createBottomTabNavigator();
export const Main = () => (
  <NavigationContainer>
    <Tab.Navigator
      initialRouteName={homeScreen}
    >
      <Tab.Screen name={homeScreen} component={Home} />
      <Tab.Screen name={loginScreen} component={Login} />
    </Tab.Navigator>
  </NavigationContainer>
);
