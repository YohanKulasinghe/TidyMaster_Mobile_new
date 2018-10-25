import React, { Component } from 'react';
import { View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LoginView from './LoginView';
import RegistrationView from './RegistrationView';
import BasicJobView from './BasicJobView';
import ProfileCreationIndex from './../InsideApp/ProfileCreation/ProfileCreationIndex'
import CustomerProfileIndex from '../InsideApp/Customer/CustomerProfileIndex';
import CleanerProfileIndex from './../InsideApp/Cleaner/CleanerProfileIndex';


const LoginIndexNav = StackNavigator({
  BasicJobView: { screen: BasicJobView },
  LoginView: { screen: LoginView },
  RegistrationView: { screen: RegistrationView },
  ProfileCreationIndex: { screen: ProfileCreationIndex },
  CustomerProfileIndex: { screen: CustomerProfileIndex },
  CleanerProfileIndex: { screen: CleanerProfileIndex }
}, {
    mode: 'modal',
    headerMode: 'none'
  });


class LoginIndex extends Component {

  render() {
    return (
        <LoginIndexNav/>
    );
  }
}

export default LoginIndex;
