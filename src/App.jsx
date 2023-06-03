import React, { useState, useRef } from 'react';
import QRCode from 'react-qr-code';
import * as htmlToImage from 'html-to-image';
import './App.css'
function App() {
  const [data, setData] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const qrCodeRef = useRef(null);

  const handleInputChange = (event) => {
    setData(event.target.value);
    setIsCopied(false); // Reset the copied state when the input changes
  };

  const handleCopyClick = async () => {
    const qrCodeElement = qrCodeRef.current;

    if (qrCodeElement) {
      try {
        const qrCodeImage = await htmlToImage.toBlob(qrCodeElement);
        const item = new ClipboardItem({ 'image/png': qrCodeImage });
        await navigator.clipboard.write([item]);
        setIsCopied(true); // Set the copied state to true
        console.log('QR code copied to clipboard!');
        setTimeout(() => {
          setIsCopied(false); // Reset the copied state after 2 seconds
        }, 2000);
      } catch (error) {
        console.error('Failed to copy QR code to clipboard:', error);
      }
    }
  };

  return (
    <div className='container flex-col'>
      <h1>QR code generator </h1>
      <label htmlFor="data">Type or paste your code</label>
      <input type="text" name='data' value={data} onChange={handleInputChange} />
      <div
        ref={qrCodeRef}
        style={{ display: 'inline-block', width: '80px', height: '80px', position: 'relative' }}
      >
        {data&&
        <QRCode value={data} size={80} />}
      </div>
      {data&&<button onClick={handleCopyClick}>{ isCopied?'Copied!':'Copy to Clipboard'}</button>}
 
    </div>
  );
}

export default App;
