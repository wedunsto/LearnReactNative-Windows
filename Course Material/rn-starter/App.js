import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import AdvancedColorScreen from "./src/screens/AdvancedColorScreen";
import CorrectAdvancedColorScreen from "./src/screens/CorrectAdvanceColorScreen";
import Counters from "./src/screens/Counters";
import TextInput from './src/screens/TextInput';
import PasswordValidator from "./src/screens/PasswordValidator";
import BoxScreen from "./src/screens/BoxScreen";
import FlexScreen from "./src/screens/FlexScreen";
import FlexDirection from "./src/screens/FlexDirection";
import JustifyContent from "./src/screens/JustifyContent";
import FormatExercise from "./src/screens/FormatExercise";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    AdvancedColorScreen: AdvancedColorScreen,
    CorrectAdvancedColorScreen: CorrectAdvancedColorScreen,
    Counters: Counters,
    Text: TextInput,
    PassVal: PasswordValidator,
    BoxScreen: BoxScreen,
    FlexScreen: FlexScreen,
    FlexDirection: FlexDirection,
    JustifyContent: JustifyContent,
    FormatExercise: FormatExercise
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
