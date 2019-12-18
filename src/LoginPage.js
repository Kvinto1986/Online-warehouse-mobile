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
    marginTop: '65%',
    marginLeft: '25%',
  },
  spinner: {
    color: 'white',
  },
};

class LoginPage extends Component{
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
        <Spinner
          visible={this.state.spinner}
          textContent={'Loading...'}
          animation="fade"
          size="large"
        />
        <Card style={styles.card}>
          <CardItem header bordered>
            <H1 style={styles.text}> Log in to your account </H1>
          </CardItem>
          <Form style={styles.form}>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input
                type="email"
                onChangeText={e => this.setState({email: e})}
              />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input
                secureTextEntry={true}
                onChangeText={e => this.setState({password: e})}
              />
            </Item>
          </Form>
          <CardItem footer>
            <Button rounded style={styles.button} onPress={this.handleSubmit}>
              <Text style={styles.text}>sign in</Text>
            </Button>
          </CardItem>
        </Card>
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
