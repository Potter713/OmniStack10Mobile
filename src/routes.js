import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import Main from './Pages/Main'
import Profile from './Pages/Profile'
import DevMap from './Pages/DevMap';
import Github from './Pages/Github';

const Routes = createAppContainer(
  createStackNavigator({
    SignIn: {
      screen: SignIn,

      navigationOptions: {
        headerShown: false
      }
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        headerShown: false
      }
    },
    Main: {
      screen: Main,
      navigationOptions: {
        headerShown: false
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: 'Perfil',
        headerShown: true
      }
    },
    DevMap: {
      screen: DevMap,
      navigationOptions: {
        headerShown: false
      }
    },
    Github: {
      screen: Github,
      navigationOptions: {
        headerShown: false
      }
    },
  }, 
  {   
    defaultNavigationOptions: {
      headerTitleAlign: 'center',
      headerBackTitleVisible: false,
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#7d40e7',
      }
    }
  }
  )
)

export default Routes;