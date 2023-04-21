import React from 'react';
import {View} from 'react-native';
import FilledButton from '../../../components/FilledButton';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import RootStackParamList from '../../../interfaces/FirstDrawerRootStackParamList';
import FourthScreenModalStyles from './styles';

type FourthScreenModalProps = NativeStackScreenProps<
  RootStackParamList,
  'FourthScreenModal'
>;

const FourthScreenModal = ({navigation}: FourthScreenModalProps) => {
  return (
    <View style={FourthScreenModalStyles.viewContainer}>
      <View style={FourthScreenModalStyles.screenButtonContainer}>
        <FilledButton
          onPress={() => {
            navigation.navigate('FifthScreen');
          }}
          text="Push VC5"
          touchableOpacityStyles={
            FourthScreenModalStyles.screenButtonTouchableOpacityStyle
          }
          textStyles={FourthScreenModalStyles.buttonTextStyle}
        />
      </View>
    </View>
  );
};

export default FourthScreenModal;
