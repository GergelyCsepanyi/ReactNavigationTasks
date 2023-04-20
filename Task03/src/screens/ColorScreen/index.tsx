import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text} from 'react-native';
import RootStackParamList from '../../interfaces/RootStackParamList';
import ColorScreenStyles from './styles';

type ColorScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ColorScreen'
>;

const ColorScreen = ({route}: ColorScreenProps) => {
  return (
    <View
      style={[
        ColorScreenStyles.mainContainerStyle,
        {backgroundColor: route.params.color},
      ]}>
      <Text style={ColorScreenStyles.textStyle}>{route.params.text}</Text>
    </View>
  );
};

export default ColorScreen;
