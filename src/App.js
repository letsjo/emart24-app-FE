import { NavigationContainer } from '@react-navigation/native';
import { RecoilRoot } from 'recoil';
import StackNavigation from './navigations/StackNavigation'

const App = () => {
  return (
    <NavigationContainer>
      <RecoilRoot>
        <StackNavigation></StackNavigation>
      </RecoilRoot>
    </NavigationContainer>
  )
}

export default App;