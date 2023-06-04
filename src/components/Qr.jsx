import React from 'react'
import QRCode from 'react-qr-code';
import { useQrCodeContext } from '../hooks/useQrCode'

const Qr = () => {
        const {qrCodeRef,handleCopyClick,data}=useQrCodeContext()

  return (
    <div>
    <QRCode ref={qrCodeRef}
             onClick={handleCopyClick} 
             value={data} 
             size={80} 
             style={{height:'80px',
                     width:'80px',
                     textAlign:'center',
                      cursor:'pointer',
                      transition:'all ease in 0.3s'} } />
    </div>
  )
}

export default Qr