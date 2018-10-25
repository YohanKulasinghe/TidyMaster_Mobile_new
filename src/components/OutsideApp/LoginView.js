import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';


class LoginView extends Component {

  render() {
    return (
      <Container>
         
          <Form>
            <Item floatingLabel >
           
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel  last>
           
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
        
        <Button style={{marginTop: 30 }} full success onPress={() => { this.props.navigation.navigate('CleanerProfileIndex')}}><Text> Cleaner Login</Text></Button>
        <Button style={styles.Btn} full success onPress={() => { this.props.navigation.navigate('CustomerProfileIndex')}}><Text> Customer Login</Text></Button>
        <Button style={styles.Btn} full onPress={() => { this.props.navigation.navigate('RegistrationView')}}><Text> Register Now</Text></Button>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
  Btn: {
    marginTop: 10,
  }
})


export default LoginView;
