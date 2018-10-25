import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import HistoryJob from './HistoryJob';
import CusJobDetails from './CusJobDetails';


const Nav = StackNavigator({
  HistoryJob: { screen: HistoryJob },
  CusJobDetails: { screen: CusJobDetails },
}, {
    mode: 'modal',
    headerMode: 'none'
  });

  
class HistoryJobIndex extends Component {

  render() {
    return (
        <Nav/>
    );
  }
}

export default HistoryJobIndex;
