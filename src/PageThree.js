import React, {Component, Fragment} from 'react';
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
  Icon,
  Right,
  Left,
  Drawer,
} from 'native-base';
import {connect} from 'react-redux';

class PageThree extends Component {
  render() {
    const products = this.props.products.map(elem => {
      return {
        title: elem.name,
        content: `Amount: ${elem.amount} (${
          elem.package
        })\n\nAvailable amount: ${elem.availableAmount} (${
          elem.package
        })\n\nSize: ${elem.size}\n\nSerial number: ${elem.id} \n\nFrom TTN №${
          elem.ttnNumber
        }`,
      };
    });
    return (
      <Container>
        <Content padder>
          <Accordion
            dataArray={products}
            icon="add"
            expandedIcon="remove"
            iconStyle={{color: 'green'}}
            expandedIconStyle={{color: 'red'}}
          />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
});

export default connect(mapStateToProps)(PageThree);
