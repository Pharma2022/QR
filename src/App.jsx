import React, { useState, useRef, Fragment } from 'react';
import QRCode from 'react-qr-code';
import * as htmlToImage from 'html-to-image';
import './App.css'
function App() {
  const [data, setData] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const qrCodeRef = useRef(null);

  const handleInputChange = ({target:{value}}) => {
    setData(value);

  };

  const handleCopyClick = async () => {
    
  
        const qrCodeImage = await htmlToImage.toBlob(qrCodeRef.current);
        const item = new ClipboardItem({ 'image/png': qrCodeImage });
        await navigator.clipboard.write([item]);
        setIsCopied(true); // Set the copied state to true
     
        setTimeout(() => {
          setIsCopied(false); // Reset the copied state after 2 seconds
        }, 2000);
    
    
  };

  return (

    <div className='container flex-col'>
      <h1>QR Code Generator</h1>
      <label htmlFor="data">Type your text</label>
      <input type="text" name='data' value={data} onChange={handleInputChange} />
    <div>
    <QRCode ref={qrCodeRef} onClick={handleCopyClick} value={data} size={80} style={{height:'80px',width:'80px',textAlign:'center', cursor:'pointer'} } />
    </div>
    <button onClick={handleCopyClick}>{ isCopied?'Copied!':'Copy to Clipboard'}</button>
     

 
    </div>
  
  );
}

export default App;
