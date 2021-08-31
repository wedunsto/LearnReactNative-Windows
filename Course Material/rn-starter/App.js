import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import AdvancedColorScreen from "./src/screens/AdvancedColorScreen";
import CorrectAdvancedColorScreen from "./src/screens/CorrectAdvanceColorScreen";
import Counters from "./src/screens/Counters";
import TextInput from './src/screens/TextInput';
import PasswordValidator from "./src/screens/PasswordValidator";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    AdvancedColorScreen: AdvancedColorScreen,
    CorrectAdvancedColorScreen: CorrectAdvancedColorScreen,
    Counters: Counters,
    Text: TextInput,
    PassVal: PasswordValidator
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
