import React, { Component } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
 
pickImage = () => {
  ImagePicker.openPicker({
    width: 300,
    height: 400,
    cropping: true
  }).then(image => {
    console.log(image);
  });
};

import { PermissionsAndroid } from 'react-native';

async function capImage() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        'title': 'Cool Photo App Camera Permission',
        'message': 'Cool Photo App needs access to your camera ' +
                   'so you can take awesome pictures.'
      }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true
      }).then(image => {
        console.log(image);
      });
    } else {
      console.log("Camera permission denied")
    }
  } catch (err) {
    console.warn(err)
  }
}




class RegistrationView extends Component {

  render() {
    return (
      <View>
        <Text>Welcome to register....</Text>
        <Text> </Text>
        <Button title="pick Image" onPress={pickImage}></Button>
        <Text> </Text>
        <Button title="Capture Image" onPress={capImage}></Button>
        <Text> </Text>
        <Button title="Register Now" onPress={() => {Alert.alert("Welcome, Tidy", "Your Password was sent to your email.Please Login using your username and Psaaword to use TidyMaster"),this.props.navigation.navigate('LoginView')}}></Button>
      </View>
    );
  }
}

export default RegistrationView;
