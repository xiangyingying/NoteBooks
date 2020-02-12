import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomePage from '../views/HomePage';
import DetailPage from '../views/DetailPage';
import WelComePage from '../views/WelcomePage'
const AppNavigator = createStackNavigator(
    {
    Home: {
      screen: HomePage,
      navigationOptions:{
        headerTitle:"网易",
        headerLeft:null
      }
    },
    Detail:{
        screen:DetailPage,
        navigationOptions:{
            headerTitle:"网易详情"
        }
    },
    WelCome:{
        screen:WelComePage,
        navigationOptions:{
            header:null,
        }
    }
    },
    {
    initialRouteName:"WelCome",
    defaultNavigationOptions:{     
        headerStyle:{
            backgroundColor:"red"
        },
        headerTitleStyle:{
            color:"white"
        },
        headerTintColor:"#fff"
    }
    }
  );
  
  export default createAppContainer(AppNavigator);