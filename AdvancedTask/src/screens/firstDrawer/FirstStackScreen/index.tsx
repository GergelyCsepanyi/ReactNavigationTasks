import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RootStackParamList from '../../../interfaces/FirstDrawerRootStackParamList';
import FirstScreen from '../FirstScreen';
import SecondScreen from '../SecondScreen';
import ThirdScreenModal from '../ThirdScreenModal';

const FirstStackScreen = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator>
      <Stack.Screen name="FirstScreen" component={FirstScreen} options={{}} />
      <Stack.Screen name="SecondScreen" component={SecondScreen} options={{}} />
      <Stack.Screen
        name="ThirdScreenModal"
        component={ThirdScreenModal}
        options={{headerShown: false, presentation: 'modal'}}
      />
    </Stack.Navigator>
  );
};

export default FirstStackScreen;
