import React from 'react';
import {View} from 'react-native';
import FilledButton from '../../../components/FilledButton';
import FirstScreenStyles from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import RootStackParamList from '../../../interfaces/FirstDrawerRootStackParamList';

type FirstScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'FirstScreen'
>;

const FirstScreen = ({navigation}: FirstScreenProps) => {
  return (
    <View style={FirstScreenStyles.viewStyle}>
      <FilledButton
        onPress={() => {
          navigation.navigate('SecondScreen');
        }}
        text="Push VC2"
        touchableOpacityStyles={FirstScreenStyles.buttonTouchableOpacityStyle}
        textStyles={FirstScreenStyles.buttonTextStyle}
      />
      <FilledButton
        onPress={() => {
          navigation.navigate('ThirdScreenModal');
        }}
        text="Modal VC3"
        touchableOpacityStyles={FirstScreenStyles.buttonTouchableOpacityStyle}
        textStyles={FirstScreenStyles.buttonTextStyle}
      />
    </View>
  );
};

export default FirstScreen;
