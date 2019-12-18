import React, {Component} from 'react';
import {
  Container,
  Text,
  Button,
  Form,
  Item,
  Input,
  Label,
  Card,
  CardItem,
  H1,
} from 'native-base';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {getWarehouse} from '../actions/warehouseActions';
import Spinner from 'react-native-loading-spinner-overlay';

const styles = {
  mainContainer: {
    backgroundColor: '#E6E6E6',
  },
  card: {
    marginTop: '5%',
    marginLeft: '5%',
    marginBottom: '15%',
    width: '90%',
  },
  form: {
    marginTop: '5%',
    marginRight: '5%',
    marginBottom: '15%',
  },
  text: {
    width: '100%',
    textAlign: 'center',
  },
  button: {
    width: '50%',
    marginTop: '5%',
    marginLeft: '25%',
  },
};

class PageOne extends Component {
  state = {
    license: '',
    spinner: false,
  };

  handleSubmit = () => {
    const spinner = () => {
      this.setState({spinner: !this.state.spinner});
    };
    spinner()
    const nextPage = () => {
      Actions.pageTwo();
      spinner();
    };
    this.props.getWarehouse(
      this.state.license,
      this.props.auth.token,
      nextPage,
    );
  };

  render() {
    return (
      <Container style={styles.mainContainer}>
        <Spinner
          visible={this.state.spinner}
          textContent={'Loading...'}
          animation="fade"
          size="large"
        />
        <Card style={styles.card}>
          <Form style={styles.form}>
            <Item floatingLabel>
              <Label>License number</Label>
              <Input
                type="email"
                onChangeText={text => this.setState({license: text})}
              />
            </Item>
          </Form>
          <CardItem footer>
            <Button rounded style={styles.button} onPress={this.handleSubmit}>
              <Text style={styles.text}>search</Text>
            </Button>
          </CardItem>
        </Card>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  warehouse: state.warehouse,
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  {getWarehouse},
)(PageOne);
