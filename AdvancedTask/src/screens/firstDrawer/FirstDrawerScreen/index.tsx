import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import FirstStackScreen from '../FirstStackScreen';
import SecondStackScreen from '../SecondStackScreen';

type RootTabParamList = {
  FirstStackScreen: undefined;
  SecondStackScreen: undefined;
};

const FirstDrawerScreen = () => {
  const Tab = createBottomTabNavigator<RootTabParamList>();

  return (
    <Tab.Navigator
      initialRouteName="FirstStackScreen"
      screenOptions={{
        tabBarLabelPosition: 'beside-icon',
        tabBarLabelStyle: {
          fontWeight: '400',
          fontSize: 15,
        },
        tabBarIconStyle: {display: 'none'},
      }}>
      <Tab.Screen
        name="FirstStackScreen"
        component={FirstStackScreen}
        options={{tabBarLabel: 'FirstStackScreen'}}
      />
      <Tab.Screen
        name="SecondStackScreen"
        component={SecondStackScreen}
        options={{tabBarLabel: 'SecondStackScreen'}}
      />
    </Tab.Navigator>
  );
};

export default FirstDrawerScreen;
