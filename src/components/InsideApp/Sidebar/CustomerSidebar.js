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
const routes = ["CustomerMyJob", "CustomerProfile"];
export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Image
            source={{
              uri:
                "https://www.dreamhomeshi.com/wp-content/uploads/ngg_featured/House-clena-800x480.jpg"
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
              top: 40
            }}
            source={{
              uri:
                "https://freepngimg.com/download/happy_person/9-2-happy-person-png.png"
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
