import { NavigationContainer } from '@react-navigation/native';
import { RecoilRoot } from 'recoil';
import StackNavigation from './navigations/StackNavigation'
import { FontAwesome } from '@expo/vector-icons';
import styled from 'styled-components/native';
import { useState } from 'react';

const IoButtonContainer = styled.TouchableOpacity`
  position: absolute;
  right: 20;
  bottom: 30;
  width: 60;
  height: 60;
  background-color: #fff;
  opacity: 0.8;
  border-radius: 30;
  justify-content: center;
  align-items: center;
  z-index:1;
  shadow-color: #000;
  shadow-opacity: 1;
  elevation: 5;
`;

const App = () => {
  const [isViewCart, setIsViewCart] = useState('none');
  return (
    <NavigationContainer>
      <RecoilRoot>
        <StackNavigation setIsViewCart={ setIsViewCart } />
        <IoButtonContainer style={ { display: isViewCart } }>
          <FontAwesome name="shopping-cart" size={ 24 } color="black" />
        </IoButtonContainer>
      </RecoilRoot>
    </NavigationContainer>
  )
}

export default App;