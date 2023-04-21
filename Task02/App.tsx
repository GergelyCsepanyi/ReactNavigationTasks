import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RootTabParamList from './src/interfaces/RootTabParamList';
import FirstStackScreen from './src/screens/FirstStackScreen';
import SecondStackScreen from './src/screens/SecondStackScreen';

export default function App() {
  const Tab = createBottomTabNavigator<RootTabParamList>();

  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
}
