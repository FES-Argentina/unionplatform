import React from 'react';
import NavigationService from './src/navigation/NavigationService';
import Switcher from './src/navigation/Switcher';
import SplashScreen from 'react-native-splash-screen'
import Config from 'react-native-config';
import messaging from '@react-native-firebase/messaging';
import { handleMessage } from './src/utils/notifications';

class App extends React.Component {
  componentDidMount() {
    SplashScreen.hide();

    const unsubscribe = messaging().onMessage(handleMessage);
  }

  render() {
    return (
      <Switcher
        ref={(navigatorRef) => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
        uriPrefix={`${Config.API_URL}/`}
      />
    );
  }
}

export default App;
