import React from 'react';
import CustomerMyJob from './CustomerMyJob';
import CustomerProfile from './CustomerProfile';
import SideBar from '../Sidebar/CustomerSidebar';
import { DrawerNavigator } from "react-navigation";

const CustomerProfileIndex = DrawerNavigator(
  {
    CustomerMyJob: { screen: CustomerMyJob },
    CustomerProfile: { screen: CustomerProfile }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);

export default CustomerProfileIndex;