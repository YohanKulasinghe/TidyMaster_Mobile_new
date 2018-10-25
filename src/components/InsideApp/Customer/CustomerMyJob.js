import React from "react";
import { StatusBar } from "react-native";
import Tab1 from './HistoryJob';
import Tab2 from './ActiveJob';
import { Button, Container, Body, Content, Header, Title, Left, Icon, Right, Tab, Tabs, View, Fab } from "native-base";

export default class CustomerMyJob extends React.Component {

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Customer My Job</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='more' />
            </Button>
            
          </Right>
        </Header>

        <Content>
       
        <Tabs>
          <Tab heading="History">
            <Tab1 />
          </Tab>
          <Tab heading="Active">
            <Tab2 />
          </Tab>
        </Tabs>
                
        </Content>
      </Container>
    );
  }
}
