import React from 'react';
import {View} from 'react-native';
import FilledButton from '../../../components/FilledButton';
import styles from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import RootStackParamList from '../../../interfaces/SecondDrawerRootStackParamList';

type SecondScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'SecondScreen'
>;

const SecondScreen = ({navigation}: SecondScreenProps) => {
  return (
    <View style={styles.viewStyle}>
      <FilledButton
        onPress={() => {
          navigation.navigate('ThirdScreen');
        }}
        text="Push Second"
        touchableOpacityStyles={styles.buttonTouchableOpacityStyle}
        textStyles={styles.buttonTextStyle}
      />
    </View>
  );
};

export default SecondScreen;
