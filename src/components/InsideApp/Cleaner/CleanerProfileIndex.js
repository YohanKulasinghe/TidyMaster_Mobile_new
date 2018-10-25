import React from 'react';
import CleanerJobList from './CleanerJobList';
import CleanerProfile from './CleanerProfile';
import SideBar from '../Sidebar/CleanerSidebar';
import { DrawerNavigator } from "react-navigation";

const CustomerProfileIndex = DrawerNavigator(
  {
    CleanerJobList: { screen: CleanerJobList },
    CleanerProfile: { screen: CleanerProfile }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);

export default CustomerProfileIndex;