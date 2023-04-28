import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View, TextInput} from 'react-native';
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
      <View style={ColorScreenStyles.textInputContainerStyle}>
        <TextInput
          style={ColorScreenStyles.textInputStyle}
          defaultValue={route.params.text}
          onChangeText={textParam =>
            route.params.handleTextChange
              ? route.params.handleTextChange(textParam)
              : {}
          }
        />
      </View>
    </View>
  );
};

export default ColorScreen;
