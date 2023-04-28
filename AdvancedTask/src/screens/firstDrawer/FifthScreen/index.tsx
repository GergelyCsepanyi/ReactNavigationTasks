import React from 'react';
import {View} from 'react-native';
import FilledButton from '../../../components/FilledButton';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import RootStackParamList from '../../../interfaces/FirstDrawerRootStackParamList';
import styles from './styles';

type FifthScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'FifthScreen'
>;

const FifthScreen = ({navigation}: FifthScreenProps) => {
  return (
    <View style={styles.viewStyle}>
      <FilledButton
        onPress={() => {
          navigation.goBack();
        }}
        text="Close"
        touchableOpacityStyles={styles.buttonTouchableOpacityStyle}
        textStyles={styles.buttonTextStyle}
      />
    </View>
  );
};

export default FifthScreen;
