import {StyleSheet} from 'react-native';
import Colors from '../../../theme/Colors';

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: Colors.lightgrey,
    paddingBottom: 40,
  },
  buttonTouchableOpacityStyle: {
    backgroundColor: Colors.lightBlack,
    borderRadius: 10,
  },
  buttonTextStyle: {
    color: Colors.white,
    paddingVertical: 10,
    paddingHorizontal: 50,
    fontSize: 16,
  },
});

export default styles;
