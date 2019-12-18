import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';
import {connect} from 'react-redux';
import PageOne from './src/PageOne';
import PageTwo from './src/PageTwo';
import PageThree from './src/PageThree';
import LoginPage from './src/LoginPage';

class CustomRoute extends Component {
  render() {
    return (
      <Router hideNavBar="true">
        <Scene key="root" hideNavBar={true}>
          {!this.props.auth.isAuthenticated ? (
            <Scene
              key="loginPage"
              component={LoginPage}
              title="WAREHOUSE ONLINE"
            />
          ) : (
            <>
              <Scene
                key="pageOne"
                component={PageOne}
                title="Search warehouse by license number"
              />
              <Scene
                key="pageTwo"
                component={PageTwo}
                title="Warehouse information"
              />
              <Scene
                key="pageThree"
                component={PageThree}
                title="Area information"
              />
            </>
          )}
        </Scene>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(CustomRoute);
