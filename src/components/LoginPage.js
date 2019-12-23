import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loginUser} from '../../actions/authAction';
import Spinner from 'react-native-loading-spinner-overlay';
import {
  Container,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  H1,
  Content,
} from 'native-base';
import {ImageBackground} from 'react-native';
import backImage from '../resources/pexels-photo-2098427.jpeg';

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
    marginRight: '10%',
    marginLeft: '5%',
    marginBottom: '15%',
  },
  text: {
    marginTop: '20%',
    width: '100%',
    textAlign: 'center',
    color: 'white',
  },
  h1: {
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
    marginTop: '55%',
    width: '83%',
    marginLeft: '8%',
  },
  backGround: {width: '100%', height: '100%'},
  spinnerText: {
    color: 'white',
  },
  error: {color: 'red', marginLeft: '4%', marginTop: '2%'},
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
        <ImageBackground source={backImage} style={styles.backGround}>
          <Spinner
            visible={this.state.spinner}
            textContent={'User data verification...'}
            animation="fade"
            size="large"
            textStyle={styles.spinnerText}
          />
          <H1 style={styles.h1}> Log in to your account </H1>
          <Form style={styles.form} onSubmit={this.handleSubmit}>
            <Item floatingLabel error={this.props.errors.email}>
              <Label style={styles.label}>Email</Label>
              <Input
                autoCompleteType="email"
                autoCorrect={true}
                style={styles.input}
                textContentType="emailAddress"
                onChangeText={e => this.setState({email: e})}
              />
            </Item>
            {this.props.errors.email && (
              <Text style={styles.error}>{this.props.errors.email}</Text>
            )}
            <Item floatingLabel error={this.props.errors.password}>
              <Label style={styles.label}>Password</Label>
              <Input
                autoCompleteType="password"
                style={styles.input}
                secureTextEntry={true}
                textContentType="password"
                onChangeText={e => this.setState({password: e})}
              />
            </Item>
            {this.props.errors.password && (
              <Text style={styles.error}>{this.props.errors.password}</Text>
            )}
          </Form>
          <Content style={styles.button}>
            <Button block success onPress={this.handleSubmit}>
              <Text>Sign in</Text>
            </Button>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(
  mapStateToProps,
  {loginUser},
)(LoginPage);
