import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import styled from 'styled-components/native';

import Home from '../screens/Home';
import MenuBar from "../screens/MenuBar";
import ProductDetail from "../screens/ProductDetail";
import Login from "../screens/Login";
import Signup from "../screens/Signup";

const Stack = createStackNavigator();

const HeaderLogo = styled.Image`

`;

const MenuBtn = styled.TouchableOpacity`

`

const MenuImage = styled.Image`
  width: 25PX;
  height: 25px;
`;

function StackNavigation() {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={ {
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
          <HeaderLogo source={ require('../../assets/logo.png') } style={ { width: 110, height: 21 } } />
        ),
      } }
    >
      <Stack.Screen
        name='Home'
        component={ Home }
        options={ {
          headerLeft: () => {
            const style = {
              marginRight: 11,
              marginLeft: 20,
            };
            return (
              <MenuBtn onPress={ () => { console.log('내정보 클릭') } }>
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
              <MenuBtn onPress={ () => navigation.navigate('MenuBar') }>
                <MenuImage
                  source={ require('../../assets/icons/menu.png') }
                  style={ style }
                />
              </MenuBtn>
            )
          },
        } }
      />
      <Stack.Screen
        name="MenuBar"
        component={ MenuBar }
        options={ {
          ...TransitionPresets.SlideFromRightIOS,
        } }
      />
      <Stack.Screen
        name="ProductDetail"
        component={ ProductDetail }
        options={ {
          ...TransitionPresets.SlideFromRightIOS,
        } }
      />
      <Stack.Screen
        name="Login"
        component={ Login }
        options={ {
          ...TransitionPresets.SlideFromRightIOS,
          gestureDirection: 'horizontal-inverted',
        } }
      />
      <Stack.Screen
        name="Signup"
        component={ Signup }
        options={ {
          headerShown: false,
          ...TransitionPresets.ModalPresentationIOS,
        } }
      />
    </Stack.Navigator>
  )
}

export default StackNavigation