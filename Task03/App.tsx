import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RootStackParamList from './src/interfaces/RootStackParamList';
import MainScreen from './src/screens/MainScreen';
import ColorScreen from './src/screens/ColorScreen';

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainScreen">
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{headerBackTitle: 'Back'}}
        />
        <Stack.Screen
          name="ColorScreen"
          component={ColorScreen}
          options={{headerBackTitle: 'Back'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
