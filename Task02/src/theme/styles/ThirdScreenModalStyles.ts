import {StyleSheet} from 'react-native';
import Colors from '../Colors';

const ThirdScreenModalStyles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: Colors.lightPurple,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 40,
  },
  titleContainer: {
    flex: 1,
    marginTop: 50,
  },
  titleTextStyle: {
    fontSize: 22,
    alignSelf: 'center',
    color: Colors.black,
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

export default ThirdScreenModalStyles;
