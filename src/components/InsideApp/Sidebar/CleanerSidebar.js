import React from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon
} from "native-base";
const routes = ["CleanerJobList", "CleanerProfile" ];
export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Image
            source={{
              uri:
                "https://www.quickanddirtytips.com/sites/default/files/styles/insert_medium/public/images/8159/cleanhome.jpg?itok=V4VlKk5n"
            }}
            style={{
              height: 150,
              width: "100%",
              alignSelf: "stretch",
              position: "absolute"
            }}
          />
          <Image
            square
            style={{
              height: 80,
              width: 80,
              position: "absolute",
              alignSelf: "center",
              top: 30
            }}
            source={{
              uri:
                "https://cdn.website.thryv.com/b8e43d9f731f471bac975593bbd13052/MOBILE/png/326.png"
            }}
          />
          <List
            dataArray={routes}
            contentContainerStyle={{ marginTop: 150 }}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}
                >
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
