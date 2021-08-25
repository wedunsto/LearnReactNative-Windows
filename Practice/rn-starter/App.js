import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import RandomAnime from './src/screens/RandomAnime';
import AnimeDisplay from "./src/screens/AnimeDisplay";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    RandomAnime: RandomAnime,
    AnimeDisplay: AnimeDisplay,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
