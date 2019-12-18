import React, {Component} from 'react';
import {Scene} from 'react-native-router-flux';
import PageTwo from './PageTwo';
import PageThree from './PageThree';
import PageOne from './PageOne';

class WarehousePage extends Component {
  state = {
    area: '',
  };
  handleChangeAreaNumber = (e, next) => {
    this.setState({area: e}, next);
  };

  render() {
    return (
        <Scene key="root" hideNavBar={true}>
        <Scene
          key="pageOne"
          component={PageOne}
          title="Search warehouse by license number"
        />
        <Scene
          key="pageTwo"
          component={() => (
            <PageTwo handleChangeAreaNumber={this.handleChangeAreaNumber} />
          )}
          title="Warehouse information"
        />
        <Scene
          key="pageThree"
          component={() => <PageThree area={this.state.area} />}
          title="Area information"
        />
        </Scene>
    );
  }
}

export default WarehousePage;
