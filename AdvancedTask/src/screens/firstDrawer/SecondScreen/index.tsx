import React from 'react';
import {View} from 'react-native';
import FilledButton from '../../../components/FilledButton';
import SecondScreenStyles from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import RootStackParamList from '../../../interfaces/FirstDrawerRootStackParamList';

type SecondScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'SecondScreen'
>;

const SecondScreen = ({navigation}: SecondScreenProps) => {
  return (
    <View style={SecondScreenStyles.viewStyle}>
      <FilledButton
        onPress={() => {
          navigation.goBack();
        }}
        text="Close"
        touchableOpacityStyles={SecondScreenStyles.buttonTouchableOpacityStyle}
        textStyles={SecondScreenStyles.buttonTextStyle}
      />
    </View>
  );
};

export default SecondScreen;
