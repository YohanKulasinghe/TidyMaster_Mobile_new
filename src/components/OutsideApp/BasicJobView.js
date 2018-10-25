import React, { Component } from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Icon, Item, Input, Button } from 'native-base';


class BasicJobView extends Component {

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
          <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="briefcase" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
          <Content>
            <List dataArray={this.state.data} renderRow={(item) =>
            
              <ListItem avatar>

                <Left>
                  <Thumbnail source={{ uri: item.picture.thumbnail  }} />
                </Left>
                <Body>
                <TouchableOpacity onPress={ ()=> {Alert.alert("Hi, Tidy", "You Have to Login Buddy"),this.props.navigation.navigate('LoginView')}}>
                  <Text>{item.name.first} {item.name.last}</Text>
                  <Text note>Doing what you like will always keep you happy . .</Text> 
                  </TouchableOpacity>
                </Body>
                <Right>
                <TouchableOpacity onPress={() => {Alert.alert("Hi, Tidy", "You Have to Login Buddy"),this.props.navigation.navigate('LoginView')}}>
                  <Text>   </Text>
                  <Icon name="arrow-forward" />
                  </TouchableOpacity>
                </Right>
                

                
              </ListItem>
             
             
  
              }>
            </List>
          </Content>
        </Container>
      );
    }
  }
  

export default BasicJobView;
