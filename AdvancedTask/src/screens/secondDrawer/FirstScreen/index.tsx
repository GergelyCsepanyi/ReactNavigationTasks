import React from 'react';
import {View} from 'react-native';
import FilledButton from '../../../components/FilledButton';
import FirstScreenStyles from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import RootStackParamList from '../../../interfaces/SecondDrawerRootStackParamList';

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
        text="Push First"
        touchableOpacityStyles={FirstScreenStyles.buttonTouchableOpacityStyle}
        textStyles={FirstScreenStyles.buttonTextStyle}
      />
    </View>
  );
};

export default FirstScreen;
