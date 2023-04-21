import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RootStackParamList from '../interfaces/RootStackParamList';
import FourthScreenModal from './FourthScreenModal';
import ThirdScreenModal from './ThirdScreenModal';
import FifthScreen from './FifthScreen';

const SecondStackScreen = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FourthScreenModal"
        component={FourthScreenModal}
        options={{presentation: 'modal'}}
      />
      <Stack.Screen
        name="ThirdScreenModal"
        component={ThirdScreenModal}
        options={{headerShown: false}}
      />

      <Stack.Screen name="FifthScreen" component={FifthScreen} options={{}} />
    </Stack.Navigator>
  );
};

export default SecondStackScreen;
