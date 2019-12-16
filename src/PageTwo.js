import React, {Component} from 'react';
import {
  Container,
  Content,
  Text,
  Card,
  Header,
  Body,
  Button,
  Title,
  CardItem,
} from 'native-base';
import {Actions} from 'react-native-router-flux';
export default class pageTwo extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>mobile developer</Title>
          </Body>
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>EEEEEEEEEEEEEE!!!!!!!</Text>
              </Body>
            </CardItem>
          </Card>
          <Button
            dark
            bordered
            onPress={() => {
              Actions.pop();
            }}>
            <Text>Back</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
