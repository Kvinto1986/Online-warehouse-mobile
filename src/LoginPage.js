import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loginUser} from '../actions/authAction';
import Spinner from 'react-native-loading-spinner-overlay';
import {
  Container,
  Form,
  Item,
  Input,
  Card,
  Label,
  Button,
  Text,
  H1,
  CardItem,
} from 'native-base';
import {ImageBackground} from 'react-native';

import backImage from './resources/pexels-photo-2098427.jpeg';

const styles = {
  mainContainer: {
    backgroundColor: '#E6E6E6',
  },
  card: {
    marginTop: '5%',
    marginLeft: '5%',
    marginBottom: '15%',
    width: '90%',
    backgroundColor: null,
  },
  form: {
    marginTop: '5%',
    marginRight: '5%',
    marginBottom: '15%',
  },
  text: {
    marginTop: '20%',
    width: '100%',
    textAlign: 'center',
    color: 'white',
  },
  label: {
    color: 'white',
  },
  input: {
    color: 'white',
  },

  button: {
    width: '50%',
    marginTop: '62%',
    marginLeft: '25%',
  },
  spinnerText: {
    color: 'white',
  },
};

class LoginPage extends Component {
  state = {
    email: '',
    password: '',
    spinner: false,
  };

  handleSubmit = () => {
    const user = {
      email: this.state.email,
      password: this.state.password,
    };

    const spinner = () => {
      this.setState({spinner: !this.state.spinner});
    };

    spinner();
    this.props.loginUser(user, spinner);
  };

  render() {
    return (
      <Container style={styles.mainContainer}>
        <ImageBackground
          source={backImage}
          style={{width: '100%', height: '100%'}}>
          <Spinner
            visible={this.state.spinner}
            textContent={'Loading...'}
            animation="fade"
            size="large"
            textStyle={styles.spinnerText}
          />
          <H1 style={styles.text}> Log in to your account </H1>
          <Form style={styles.form}>
            <Item floatingLabel>
              <Label style={styles.label}>Email</Label>
              <Input
                style={styles.input}
                type="email"
                onChangeText={e => this.setState({email: e})}
              />
            </Item>
            <Item floatingLabel>
              <Label style={styles.label}>Password</Label>
              <Input
                style={styles.input}
                secureTextEntry={true}
                onChangeText={e => this.setState({password: e})}
              />
            </Item>
          </Form>
          <Button rounded style={styles.button} onPress={this.handleSubmit}>
            <Text style={styles.text}>sign in</Text>
          </Button>
        </ImageBackground>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  {loginUser},
)(LoginPage);
