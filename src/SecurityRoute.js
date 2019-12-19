import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';
import {connect} from 'react-redux';
import WarehouseSearchPage from './components/WarehouseSearchPage';
import WarehouseInfoPage from './components/WarehouseInfoPage';
import ProductsInfoPage from './components/ProductsInfoPage';
import LoginPage from './components/LoginPage';

class SecurityRoute extends Component {
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
                hideNavBar={true}
                key="warehouseSearchPage"
                component={WarehouseSearchPage}
              />
              <Scene
                key="warehouseInfoPage"
                component={WarehouseInfoPage}
                title="Warehouse information"
                titleStyle={{color: 'white'}}
                navigationBarStyle={{
                  backgroundColor: '#282E29',
                }}
              />
              <Scene
                key="productsInfoPage"
                component={ProductsInfoPage}
                title="Products information"
                titleStyle={{color: 'white'}}
                navigationBarStyle={{
                  backgroundColor: '#282E29',
                }}
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

export default connect(mapStateToProps)(SecurityRoute);
