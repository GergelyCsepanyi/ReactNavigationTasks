import {StyleSheet} from 'react-native';
import Colors from '../Colors';

const FirstScreenStyles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.lightGreen,
  },
  buttonTouchableOpacityStyle: {
    backgroundColor: Colors.purple,
    borderRadius: 10,
    marginBottom: 100,
  },
  buttonTextStyle: {
    color: Colors.white,
    paddingVertical: 10,
    paddingHorizontal: 40,
    fontSize: 16,
  },
});

export default FirstScreenStyles;
