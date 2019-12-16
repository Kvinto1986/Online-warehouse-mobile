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
  Accordion,
  List,
  ListItem,
} from 'native-base';
import {Actions} from 'react-native-router-flux';
import {StyleSheet} from 'react-native';
import {connect} from 'react-redux';

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

class PageTwo extends Component {
  render() {
    const currentWarehouseArray = this.props.warehouse.areas.map(elem => {
      return (
        <ListItem>
          <Text>
            {elem.type} (free area:{elem.freeArea})
          </Text>
          <Button style={{marginLeft:'30%'}}transparent><Text> Show info </Text></Button>
        </ListItem>
      );
    });

    return (
      <Container>
        <Header />
        <Content>
          <List>{currentWarehouseArray}</List>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  warehouse: state.warehouse,
});

export default connect(mapStateToProps)(PageTwo);
