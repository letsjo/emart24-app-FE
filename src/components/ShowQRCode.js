import QRCode from 'react-native-qrcode-svg';
import { useRecoilValue } from 'recoil';
import { UserState } from '../state/UserState';
import { useEffect, useState } from 'react';

const ShowQRCode = ({ date }) => {
  const userData = useRecoilValue(UserState);
  const [url, setUrl] = useState();

  useEffect(() => {
    setUrl(`http://192.168.0.29:3001/entry?userId=${userData?.userId}&date=${date}`);
  }, [date])

  if (url)
    return (
      <QRCode
        value={ url }
        color={ '#000' }
        backgroundColor='transparent'
        size={ 250 }
      />
    )
}

export default ShowQRCode