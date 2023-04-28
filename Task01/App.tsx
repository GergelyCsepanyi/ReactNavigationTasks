import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import FirstScreen from './src/screens/FirstScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SecondScreen from './src/screens/SecondScreen';
import ThirdScreen from './src/screens/ThirdScreen';
import RootStackParamList from './src/interfaces/RootStackParamList';

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="SecondScreen" component={SecondScreen} />
        <Stack.Screen name="ThirdScreen" component={ThirdScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
