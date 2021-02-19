import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList207329Navigator from '../features/NotificationList207329/navigator';
import Settings207328Navigator from '../features/Settings207328/navigator';
import Settings207320Navigator from '../features/Settings207320/navigator';
import UserProfile207318Navigator from '../features/UserProfile207318/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList207329: { screen: NotificationList207329Navigator },
Settings207328: { screen: Settings207328Navigator },
Settings207320: { screen: Settings207320Navigator },
UserProfile207318: { screen: UserProfile207318Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
