import { useRecoilValue } from 'recoil'
import { UserState } from '../state/UserState';
import { useEffect } from 'react';

const BranchAuth = ({ navigation }) => {
  const userData = useRecoilValue(UserState);

  useEffect(() => {
    if (userData.accessToken !== '') return navigation.navigate('MyPage');
    return navigation.navigate('Login')
  }, [])
}

export default BranchAuth