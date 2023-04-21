import {StyleSheet} from 'react-native';
import Colors from '../../../theme/Colors';

const FourthScreenModalStyles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: Colors.lightBlue,
    alignItems: 'center',
  },

  screenButtonContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  screenButtonTouchableOpacityStyle: {
    backgroundColor: Colors.grey,
    borderRadius: 10,
    marginTop: 60,
  },

  closeButtonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 50,
  },
  closeButtonTouchableOpacityStyle: {
    backgroundColor: Colors.lightBlack,
    borderRadius: 10,
    marginTop: 60,
  },

  buttonTextStyle: {
    color: Colors.white,
    paddingVertical: 10,
    paddingHorizontal: 50,
    fontSize: 16,
  },
});

export default FourthScreenModalStyles;
