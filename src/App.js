import { NavigationContainer } from '@react-navigation/native';
import { RecoilRoot } from 'recoil';

import DrawerNavigation from './navigations/DrawerNavigation';
import { useEffect } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage'


const App = () => {

  useEffect(() => {
    AsyncStorage.removeItem('accessToken');
  }, [])

  return (
    <NavigationContainer>
      <RecoilRoot>
        <DrawerNavigation />
      </RecoilRoot>
    </NavigationContainer>
  )
}

export default App;