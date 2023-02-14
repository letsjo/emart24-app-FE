import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import styled from 'styled-components/native';

import Home from '../screens/Home';
import MenuBar from "../screens/MenuBar";
import ProductDetail from "../screens/ProductDetail";
import Login from "../screens/Login";
import Signup from "../screens/Signup";

import { useNavigation } from '@react-navigation/native';
import MyPage from "../screens/MyPage";
import BranchAuth from "../screens/BranchAuth";
import { FontAwesome } from '@expo/vector-icons';
import { useRecoilState } from 'recoil';
import { CartState } from "../state/CartState";
import Cart from "../screens/Cart";
import Event from "../screens/Event";
import UpdatePassword from "../screens/UpdatePassword";
import UpdateProfile from "../screens/UpdateProfile";

const Stack = createStackNavigator();

const IoButtonContainer = styled.TouchableOpacity`
  position: absolute;
  right: 20;
  bottom: 30;
  width: 60;
  height: 60;
  background-color: #ffb916;
  opacity: 0.9;
  border-radius: 30;
  justify-content: center;
  align-items: center;
  z-index:1;
  shadow-color: #222;
  show-offset: {
    width: 0;
    height: 10;
  }
  shadow-opacity: 0.3;
  elevation: 10;
`;

function StackNavigation() {
  const navigation = useNavigation();
  const [isViewCart, setIsViewCart] = useRecoilState(CartState);

  return (
    <>
      <IoButtonContainer style={ { display: isViewCart } } onPress={ () => navigation.navigate('Cart') }>
        <FontAwesome name="shopping-cart" size={ 24 } color="#fff" />
      </IoButtonContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={ {
          headerShown: false,
        } }
      >
        <Stack.Screen
          name='Home'
          component={ Home }
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
          name="Cart"
          component={ Cart }
          options={ {
            ...TransitionPresets.SlideFromRightIOS,
          } }
        />
        <Stack.Screen
          name="Event"
          component={ Event }
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
          name="MyPage"
          component={ MyPage }
          options={ {
            ...TransitionPresets.SlideFromRightIOS,
            gestureDirection: 'horizontal-inverted',
          } }
        />
        <Stack.Screen
          name="BranchAuth"
          component={ BranchAuth }
          options={ {
            ...TransitionPresets.SlideFromRightIOS,
            gestureDirection: 'horizontal-inverted',
          } }
        />
        <Stack.Screen
          name="UpdatePassword"
          component={ UpdatePassword }
          options={ {
            ...TransitionPresets.ModalPresentationIOS,
          } }
        />
        <Stack.Screen
          name="UpdateProfile"
          component={ UpdateProfile }
          options={ {
            ...TransitionPresets.ModalPresentationIOS,
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
    </>
  )
}

export default StackNavigation