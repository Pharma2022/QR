import React,{Fragment} from 'react'
import { useQrCodeContext } from '../hooks/useQrCode'

const Input = () => {

        const {data,handleInputChange,clearInput}=useQrCodeContext()
    return (
        <Fragment>
            <label htmlFor="data">Type your text</label>
            <input type="text" name='data' value={data} onChange={handleInputChange} placeholder='enter text...' onClick={clearInput}/>
        </Fragment>
  )
}

export default Input