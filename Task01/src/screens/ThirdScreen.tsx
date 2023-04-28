import React from 'react';
import {View} from 'react-native';
import FilledButton from '../components/FilledButton';
import ThirdScreenStyles from '../theme/styles/ThirdScreenStyles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import RootStackParamList from '../interfaces/RootStackParamList';

type ThirdScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ThirdScreen'
>;

const ThirdScreen = ({navigation}: ThirdScreenProps) => {
  return (
    <View style={ThirdScreenStyles.viewStyle}>
      <FilledButton
        onPress={() => {
          navigation.popToTop();
        }}
        text="Go To Root"
        touchableOpacityStyles={ThirdScreenStyles.buttonTouchableOpacityStyle}
        textStyles={ThirdScreenStyles.buttonTextStyle}
      />
    </View>
  );
};

export default ThirdScreen;
