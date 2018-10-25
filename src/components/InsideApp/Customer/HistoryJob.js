import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Icon } from 'native-base';

class HistoryJob extends Component {

  constructor(props) {
    super(props);

    this.state = {
        loading: false,
        data: [],
        page: 1,
        seed: 1,
        error: null,
        refreshing: false
    };
}

  componentWillMount(){
    this.makeRemoteRequest();
}

makeRemoteRequest = () => {
    
    const { page, seed } = this.state;
    const url = 'https://randomuser.me/api/?seed=${seed}&page=${page}&results=20';
    this.setState({ loading: true });
    fetch(url).then(res => res.json())
    .then(res => {
        this.setState({
            data: page === 1 ? res.results : [...this.state.data, ...res.results],
            error: res.error || null,
            loading: false,
            refreshing: false
        });
    })
    .catch(error => {
        this.setState({error, loading: false});
    });
};

  render() {
    return (
      <Container>
        <Content>
          <List dataArray={this.state.data} renderRow={(item) =>
          
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: item.picture.thumbnail  }} />
              </Left>
              <Body>
                <Text>{item.name.first} {item.name.last}</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text>   </Text>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
           

            }>
          </List>
        </Content>
      </Container>
    );
  }
}

export default HistoryJob;