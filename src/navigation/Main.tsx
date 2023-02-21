import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { Login, } from '../screens/Login';

export type MainStackParams = {
  Home: undefined;
  Login: undefined;
};

const MainStack = createStackNavigator<MainStackParams>();

export const Main = () => (
  <MainStack.Navigator>
    <MainStack.Screen name="Home" component={Home} />
    <MainStack.Screen
      name="Login"
      component={Login}
      options={{ headerTitle: 'Login' }}
    />
  </MainStack.Navigator>
);
