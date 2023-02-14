import styled from 'styled-components/native';
import { createDrawerNavigator, DrawerToggleButton } from '@react-navigation/drawer';
import StackNavigator from './StackNavigation';
import MenuBar from '../screens/MenuBar';
import { Image } from 'react-native';
import { CommonActions, DrawerActions, useNavigation } from '@react-navigation/native';
import SideDrawer from '../components/SideDrawer';
import { TouchableOpacity } from 'react-native';
import { useRecoilValue } from 'recoil';
import { UserState } from '../state/UserState';

const Drawer = createDrawerNavigator();

const MenuBtn = styled.TouchableOpacity`
`;

const MenuImage = styled.Image`
  width: 25PX;
  height: 25px;
`;

function DrawerNavigation() {
  const navigation = useNavigation();
  const userData = useRecoilValue(UserState);

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={ props => <SideDrawer { ...props } /> }
      screenOptions={
        {
          drawerType: 'front',
          drawerPosition: "right",
          headerStyle: {
            height: 100,
            shadowColor: '#222',
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.2,
            shadowRadius: 4.65,
          },
          headerTitleAlign: 'center',
          headerTitle: (props) => (
            <TouchableOpacity onPress={ () => navigation.dispatch(CommonActions.navigate({ name: 'Home' })) }>
              <Image source={ require('../../assets/logo.png') } style={ { width: 110, height: 21 } } />
            </TouchableOpacity>
          ),
        }
      }
    >
      <Drawer.Screen
        name="Home"
        component={ StackNavigator }
        options={ {
          headerLeft: () => {
            const style = {
              marginRight: 11,
              marginLeft: 20,
            };
            return (
              <MenuBtn onPress={ () => navigation.dispatch(CommonActions.navigate({ name: userData.accessToken !== '' ? 'MyPage' : 'Login' })) }>
                <MenuImage
                  source={ require('../../assets/icons/user.png') }
                  style={ style }
                />
              </MenuBtn>
            )
          },
          headerRight: () => {
            const style = {
              marginRight: 20,
              marginLeft: 11,
            };
            return (
              <MenuBtn onPress={ () => navigation.dispatch(DrawerActions.toggleDrawer()) }>
                <MenuImage
                  source={ require('../../assets/icons/menu.png') }
                  style={ style }
                />
              </MenuBtn>
            )
          },
        } }
      />
      <Drawer.Screen
        name="Menu"
        component={ MenuBar }
        options={ {
          drawerLabel: 'MENU',
          headerLeft: () => {
            const style = {
              marginRight: 11,
              marginLeft: 20,
            };
            return (
              <MenuBtn onPress={ () => DrawerActions.openDrawer() }>
                <MenuImage
                  source={ require('../../assets/icons/user.png') }
                  style={ style }
                />
              </MenuBtn>
            )
          },
          headerRight: () => <DrawerToggleButton />,
        } }
      />
    </Drawer.Navigator>
  )
}

export default DrawerNavigation