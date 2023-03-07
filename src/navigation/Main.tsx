import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen } from '../screens/Home';
import { LoginScreen, } from '../screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SettingScreen } from '../screens/Setting';



export type MainStackParams = {
  Home: undefined;
  Login: undefined;
};

const loginScreen = 'Login'
const homeScreen = 'Home'
const setting = 'Setting'

const Tab = createBottomTabNavigator();
export const Main = () => (
  <NavigationContainer>
    <Tab.Navigator
      initialRouteName={homeScreen}
    >
      <Tab.Screen name={homeScreen} component={HomeScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home-circle-outline" color="black" size={25} />
          ),
        }} />
      <Tab.Screen
        name={loginScreen}
        component={LoginScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <MaterialCommunityIcons name='login-variant' color="black" size={25} />
          ),
        }}
      />
      <Tab.Screen
        name={setting}
        component={SettingScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <MaterialCommunityIcons name='cog-outline' color="black" size={25} />
          ),
        }}
      />


    </Tab.Navigator>
  </NavigationContainer>
);
