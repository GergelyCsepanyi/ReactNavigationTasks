type RootStackParamList = {
  MainScreen: undefined;
  ColorScreen: {
    text: string;
    color: string;
    handleTextChange?: (textParam: string) => void;
  };
};

export default RootStackParamList;
