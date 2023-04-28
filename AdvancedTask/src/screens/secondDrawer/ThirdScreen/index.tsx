import React from 'react';
import {View} from 'react-native';
import FilledButton from '../../../components/FilledButton';
import styles from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import RootStackParamList from '../../../interfaces/SecondDrawerRootStackParamList';

type ThirdScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ThirdScreen'
>;

const ThirdScreen = ({navigation}: ThirdScreenProps) => {
  return (
    <View style={styles.viewStyle}>
      <FilledButton
        onPress={() => {
          navigation.popToTop();
        }}
        text="Go To Root"
        touchableOpacityStyles={styles.buttonTouchableOpacityStyle}
        textStyles={styles.buttonTextStyle}
      />
    </View>
  );
};

export default ThirdScreen;
