import {StyleSheet} from 'react-native';
import Colors from '../../theme/Colors';

const MainScreenStyles = StyleSheet.create({
  mainContainerStyle: {
    flex: 1,
    backgroundColor: Colors.orange,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemsContainerStyle: {
    flex: 1,
    width: '50%',
    justifyContent: 'space-evenly',
  },
  textInputStyle: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 5,
    fontSize: 20,
  },
  buttonContainerStyle: {
    height: 50,
  },
});

export default MainScreenStyles;
