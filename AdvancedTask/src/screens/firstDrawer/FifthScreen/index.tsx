import React from 'react';
import {View} from 'react-native';
import FilledButton from '../../../components/FilledButton';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import RootStackParamList from '../../../interfaces/FirstDrawerRootStackParamList';
import FifthScreenStyles from './styles';

type FifthScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'FifthScreen'
>;

const FifthScreen = ({navigation}: FifthScreenProps) => {
  return (
    <View style={FifthScreenStyles.viewStyle}>
      <FilledButton
        onPress={() => {
          navigation.goBack();
        }}
        text="Close"
        touchableOpacityStyles={FifthScreenStyles.buttonTouchableOpacityStyle}
        textStyles={FifthScreenStyles.buttonTextStyle}
      />
    </View>
  );
};

export default FifthScreen;
