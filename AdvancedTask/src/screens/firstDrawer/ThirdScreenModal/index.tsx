import React from 'react';
import {View, Text} from 'react-native';
import FilledButton from '../../../components/FilledButton';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import RootStackParamList from '../../../interfaces/FirstDrawerRootStackParamList';
import styles from './styles';

type ThirdScreenModalProps = NativeStackScreenProps<
  RootStackParamList,
  'ThirdScreenModal'
>;

const ThirdScreenModal = ({navigation}: ThirdScreenModalProps) => {
  return (
    <View style={styles.viewContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleTextStyle}>Third View Controller</Text>
      </View>
      <View style={styles.buttonContainer}>
        <FilledButton
          onPress={() => {
            navigation.goBack();
          }}
          text="Close"
          touchableOpacityStyles={styles.buttonTouchableOpacityStyle}
          textStyles={styles.buttonTextStyle}
        />
      </View>
    </View>
  );
};

export default ThirdScreenModal;
