import {StyleSheet} from 'react-native';
import Colors from '../Colors';

const ThirdScreenStyles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.lightBlue,
  },
  buttonTouchableOpacityStyle: {
    backgroundColor: Colors.blue,
    borderRadius: 5,
  },
  buttonTextStyle: {
    color: Colors.white,
    padding: 10,
  },
});

export default ThirdScreenStyles;
