import {StyleSheet} from 'react-native';
import Colors from '../../theme/Colors';

const ColorScreenStyles = StyleSheet.create({
  mainContainerStyle: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textInputContainerStyle: {width: '50%'},
  textInputStyle: {
    backgroundColor: Colors.white,
    padding: 5,
    marginTop: 150,
    borderRadius: 5,
    fontSize: 20,
  },
});

export default ColorScreenStyles;
