import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import {connect} from 'react-redux';
import PageOne from './src/PageOne';
import PageTwo from './src/PageTwo';
import LoginPage from './src/LoginPage';

const CustomRoute = props => {
  return (
    <Router hideNavBar="true">
      <Scene key="root" hideNavBar={true}>
        {!props.auth.isAuthenticated ? (
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
          </>
        )}
      </Scene>
    </Router>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(CustomRoute);
