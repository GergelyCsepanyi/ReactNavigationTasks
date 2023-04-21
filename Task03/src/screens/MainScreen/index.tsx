import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import FilledButton from '../../components/FilledButton';
import MainScreenStyles from './styles';
import Colors from '../../theme/Colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import RootStackParamList from '../../interfaces/RootStackParamList';

type MainScreenProps = NativeStackScreenProps<RootStackParamList, 'MainScreen'>;

const MainScreen = ({navigation}: MainScreenProps) => {
  const [text, setText] = useState('');

  const handleTextChange = (textParam: string) => {
    setText(textParam);
  };

  const handleNavigate = (color: string) => {
    navigation.navigate('ColorScreen', {
      color,
      text,
      handleTextChange,
    });
  };

  return (
    <SafeAreaView style={MainScreenStyles.mainContainerStyle}>
      <View style={MainScreenStyles.itemsContainerStyle}>
        <TextInput
          style={MainScreenStyles.textInputStyle}
          defaultValue={text}
          onChangeText={textParam => handleTextChange(textParam)}
        />
        <View style={MainScreenStyles.buttonContainerStyle}>
          <FilledButton
            title="Push Red"
            onPress={() => {
              handleNavigate(Colors.red);
            }}
            backgroundColor={Colors.red}
          />
        </View>
        <View style={MainScreenStyles.buttonContainerStyle}>
          <FilledButton
            title="Push Green"
            onPress={() => handleNavigate(Colors.green)}
            backgroundColor={Colors.green}
          />
        </View>
        <View style={MainScreenStyles.buttonContainerStyle}>
          <FilledButton
            title="Push Blue"
            onPress={() => handleNavigate(Colors.blue)}
            backgroundColor={Colors.blue}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;
