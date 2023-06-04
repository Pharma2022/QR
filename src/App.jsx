import React, {  Fragment } from 'react';
import {useQrCodeContext} from './hooks/useQrCode'
import './App.css'
import Input from './components/Input';
import CopyButton from './components/CopyButton';
import Qr from './components/Qr';
import Title from './components/Title';

function App() {
    const  {data} =useQrCodeContext()
    return (

        <div className='container flex-col'>
            <Title/>
            <Input/>
            {data&& 
              (<Fragment>
                  <Qr/>
                  <CopyButton/>
               </Fragment>)
              }
        </div>
  )
}

export default App;
