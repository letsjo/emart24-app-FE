import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function DrawerNavigaton() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen />
    </Drawer.Navigator>
  )
}

export default DrawerNavigaton