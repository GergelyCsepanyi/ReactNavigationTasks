import 'react-native-gesture-handler';
import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import FirstDrawerScreen from './src/screens/firstDrawer/FirstDrawerScreen';
import SecondDrawerScreen from './src/screens/secondDrawer/SecondDrawerScreen';

type RootDrawerParamList = {
  first: undefined;
  second: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="first">
        <Drawer.Screen name="first" component={FirstDrawerScreen} />
        <Drawer.Screen name="second" component={SecondDrawerScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
