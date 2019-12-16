import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './store';
import CustomRoute from './CustomRoute';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CustomRoute />
      </Provider>
    );
  }
}
