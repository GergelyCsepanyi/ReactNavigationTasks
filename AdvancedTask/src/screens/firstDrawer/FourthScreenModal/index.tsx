import React from 'react';
import {View} from 'react-native';
import FilledButton from '../../../components/FilledButton';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import RootStackParamList from '../../../interfaces/FirstDrawerRootStackParamList';
import styles from './styles';

type FourthScreenModalProps = NativeStackScreenProps<
  RootStackParamList,
  'FourthScreenModal'
>;

const FourthScreenModal = ({navigation}: FourthScreenModalProps) => {
  return (
    <View style={styles.viewContainer}>
      <View style={styles.screenButtonContainer}>
        <FilledButton
          onPress={() => {
            navigation.navigate('FifthScreen');
          }}
          text="Push VC5"
          touchableOpacityStyles={styles.screenButtonTouchableOpacityStyle}
          textStyles={styles.buttonTextStyle}
        />
      </View>
    </View>
  );
};

export default FourthScreenModal;
