import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './store';
import CustomRoute from './CustomRoute';
import SplashScreen from 'react-native-splash-screen';

export default class App extends Component {


  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <Provider store={store}>
        <CustomRoute />
      </Provider>
    );
  }
}
