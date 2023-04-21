import React from 'react';
import {View} from 'react-native';
import FilledButton from '../../../components/FilledButton';
import SecondScreenStyles from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import RootStackParamList from '../../../interfaces/SecondDrawerRootStackParamList';

type SecondScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'SecondScreen'
>;

const SecondScreen = ({navigation}: SecondScreenProps) => {
  return (
    <View style={SecondScreenStyles.viewStyle}>
      <FilledButton
        onPress={() => {
          navigation.navigate('ThirdScreen');
        }}
        text="Push Second"
        touchableOpacityStyles={SecondScreenStyles.buttonTouchableOpacityStyle}
        textStyles={SecondScreenStyles.buttonTextStyle}
      />
    </View>
  );
};

export default SecondScreen;
