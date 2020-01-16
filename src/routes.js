import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './Pages/Main';
import Profile from './Pages/Profile';

const Routes = createAppContainer(
  createStackNavigator({
    Main: {
      screen: Main,
      navigationOptions: {
        title: "Dev Radar"
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: "Perfil do GitHub",
      }
    },
  }, {
    defaultNavigationOptions: {
      headerTitleAlign: 'center',
      headerBackTitleVisible: false,
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#7d40e7',
      }
    }
  })
)

export default Routes;