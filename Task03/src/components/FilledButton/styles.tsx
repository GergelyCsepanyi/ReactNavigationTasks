import {StyleSheet} from 'react-native';
import Colors from '../../theme/Colors';

const FilledButtonStyles = StyleSheet.create({
  touchableOpacityStyle: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: Colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textStyle: {
    fontSize: 20,
    color: Colors.white,
  },
});

export default FilledButtonStyles;
