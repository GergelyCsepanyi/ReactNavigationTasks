import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';

interface FilledButtonProps {
  touchableOpacityStyles: StyleProp<ViewStyle>;
  textStyles: StyleProp<TextStyle>;
  onPress: () => void;
  text: string;
}

const FilledButton = ({
  touchableOpacityStyles,
  textStyles,
  onPress,
  text,
}: FilledButtonProps) => {
  return (
    <TouchableOpacity style={touchableOpacityStyles} onPress={onPress}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};

export default FilledButton;
