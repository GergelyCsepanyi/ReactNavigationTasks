import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import FirstScreen from './src/screens/FirstScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SecondScreen from './src/screens/SecondScreen';
import RootStackParamList from './src/interfaces/RootStackParamList';
import ThirdScreenModal from './src/screens/ThirdScreenModal';
import FourthScreenModal from './src/screens/FourthScreenModal';
import FifthScreen from './src/screens/FifthScreen';

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstScreen">
        <Stack.Screen
          name="FirstScreen"
          component={FirstScreen}
          options={{headerBackTitle: 'Back'}}
        />
        <Stack.Screen
          name="SecondScreen"
          component={SecondScreen}
          options={{headerBackTitle: 'Back'}}
        />
        <Stack.Group screenOptions={{presentation: 'modal'}}>
          <Stack.Screen
            name="ThirdScreenModal"
            component={ThirdScreenModal}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="FourthScreenModal"
            component={FourthScreenModal}
          />
        </Stack.Group>
        <Stack.Screen name="FifthScreen" component={FifthScreen} options={{}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
