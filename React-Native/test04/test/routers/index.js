import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import DetailPage from '../views/DetailPage';
import WelComePage from '../views/WelcomePage';
import Tabs from './tabs'
const InitNavigator = createStackNavigator({
    WelCome:{
        screen:WelComePage,
        navigationOptions:{
            header:null,
        }
    },
});
  const MainNavigator=createStackNavigator({
      HomePage:{
          screen:Tabs
      },
      Detail:{
          screen:DetailPage
      }
  })
  const router = createSwitchNavigator({
      Init:InitNavigator,
      Main:MainNavigator
  },{
      initialRouteName:'Init'
  }
  )
  export default createAppContainer(router);