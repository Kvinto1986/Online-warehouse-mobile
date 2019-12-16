import React, {Component} from 'react';
import {
  Container,
  Content,
  Text,
  Header,
  Body,
  Button,
  Title,
  Form,
  Item,
  Input,
  Label,
} from 'native-base';
import {Actions} from 'react-native-router-flux';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fffef0',
  },
  loginForm: {
    marginTop: '7%',
    marginLeft: '1%',
    marginRight: '4%',
  },
  headerText: {
    marginLeft: '2%',
  },
});

export default class pageOne extends Component {
  render() {
    return (
      <Container style={styles.mainContainer}>
        <Header>
          <Body>
            <Title style={styles.headerText}>I am</Title>
          </Body>
        </Header>
        <Button
          primary
          style={{alignSelf: 'center', margin: 30}}
          onPress={() => {
            Actions.pageTwo();
          }}>
          <Text>Next</Text>
        </Button>
      </Container>
    );
  }
}
