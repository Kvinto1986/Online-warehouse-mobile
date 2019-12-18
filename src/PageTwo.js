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
  Thumbnail,
} from 'native-base';
import {Image, Linking, Platform} from 'react-native';
import {Root} from 'native-base';
import {OpenMap} from 'react-native-open-map';
import {Actions} from 'react-native-router-flux';
import {setProducts} from '../actions/productsAction';
import {StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import warehouseImage from './resources/image.png';

const styles = StyleSheet.create({
  icon: {
    marginRight: '2%',
  },
});

class PageTwo extends Component {
  handleSetAreaInfo = data => {
    this.props.setProducts(data);
    Actions.pageThree();
  };

  render() {
    const currentWarehouseArray = this.props.warehouse.areas.map(elem => {
      return (
        <Fragment key={elem.index}>
          <ListItem onPress={() => this.handleSetAreaInfo(elem.products)}>
            <Left>
              <Icon active style={styles.icon} name="home" />
              <Text>
                {elem.type.toUpperCase()} (free {elem.freeArea} out of{' '}
                {elem.area})
              </Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem itemDivider />
        </Fragment>
      );
    });
    const scheme = Platform.select({ios: 'maps:0,0?q=', android: 'geo:0,0?q='});
    const latLng = `${this.props.warehouse.GPS.lat},${
      this.props.warehouse.GPS.lng
    }`;
    const label = 'Custom Label';
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`,
    });

    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={warehouseImage} />
                <Body>
                  <Text>{this.props.warehouse.name}</Text>
                  <Text note>License №{this.props.warehouse.id}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{uri: `${this.props.warehouse.buildImg}`}}
                style={{height: 200, width: null, flex: 1}}
              />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="star" />
                  <Text>Free area: {this.props.warehouse.freeArea}</Text>
                </Button>
              </Left>
              <Right>
                <Button
                  transparent
                  onPress={() => {
                    Linking.openURL(url);
                  }}>
                  <Icon active name="map" />
                  <Text>Check on map</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
          <List>{currentWarehouseArray}</List>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  warehouse: state.warehouse,
  products: state.products,
});

export default connect(
  mapStateToProps,
  {setProducts},
)(PageTwo);
