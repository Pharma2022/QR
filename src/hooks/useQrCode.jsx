import {useState,useRef,createContext,useContext} from 'react'
import * as htmlToImage from 'html-to-image';
const useQrCode = () => {
    const [data, setData] = useState('');
    const [isCopied, setIsCopied] = useState(false);
    const qrCodeRef = useRef(null);
  
    const handleInputChange = ({target:{value}}) => setData(value)
  
    const handleCopyClick = async () => {
          const qrCodeImage = await htmlToImage.toBlob(qrCodeRef.current);
          const item = new ClipboardItem({ 'image/png': qrCodeImage });
          await navigator.clipboard.write([item]);
          setIsCopied(true); // Set the copied state to true
       
          setTimeout(() => {
            setIsCopied(false); // Reset the copied state after 2 seconds
          }, 2000);
      
      
    };
    const clearInput=()=>data&&setData('')
  
  return {data,isCopied, qrCodeRef, handleInputChange,handleCopyClick,clearInput}
}

const QrState =()=>(useQrCode())
const QrContext=createContext(QrState)
export const QrContextProvider=({children})=>{
  return(
    <QrContext.Provider value={useQrCode()}>
      {children}
    </QrContext.Provider>
  )
}  

export const useQrCodeContext=()=>(useContext(QrContext))


