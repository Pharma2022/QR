import React from 'react'
import { useQrCodeContext } from '../hooks/useQrCode'

const CopyButton = () => {

        const {handleCopyClick,isCopied}=useQrCodeContext()
  return (
    <button onClick={handleCopyClick}>
        { isCopied?'Copied!':'Copy to Clipboard'}
    </button>
  )
}

export default CopyButton