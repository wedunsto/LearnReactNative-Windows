import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import AdvancedColorScreen from "./src/screens/AdvancedColorScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    AdvancedColorScreen:AdvancedColorScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
