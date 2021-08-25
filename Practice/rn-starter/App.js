import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import RandomAnime from './src/screens/RandomAnime';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    RandomAnime: RandomAnime,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
