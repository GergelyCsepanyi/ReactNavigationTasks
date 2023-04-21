import React from 'react';
import {View, Text} from 'react-native';
import FilledButton from '../../../components/FilledButton';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import RootStackParamList from '../../../interfaces/FirstDrawerRootStackParamList';
import ThirdScreenModalStyles from './styles';

type ThirdScreenModalProps = NativeStackScreenProps<
  RootStackParamList,
  'ThirdScreenModal'
>;

const ThirdScreenModal = ({navigation}: ThirdScreenModalProps) => {
  return (
    <View style={ThirdScreenModalStyles.viewContainer}>
      <View style={ThirdScreenModalStyles.titleContainer}>
        <Text style={ThirdScreenModalStyles.titleTextStyle}>
          Third View Controller
        </Text>
      </View>
      <View style={ThirdScreenModalStyles.buttonContainer}>
        <FilledButton
          onPress={() => {
            navigation.goBack();
          }}
          text="Close"
          touchableOpacityStyles={
            ThirdScreenModalStyles.buttonTouchableOpacityStyle
          }
          textStyles={ThirdScreenModalStyles.buttonTextStyle}
        />
      </View>
    </View>
  );
};

export default ThirdScreenModal;
