import React, { useState } from 'react'
import * as BS from 'react-icons/bs'

function Footer({ handleSendMsg }) {
    const [msg, setMsg] = useState('')
    const sendMsg = () => {
        !msg.trim() ?
            alert('null')
        :
        handleSendMsg(msg)
        setMsg('')
    }
    const handleKeySubmit = (e)=>{
        if(e.code == 'Enter'){
            if(!e.shiftKey){
                sendMsg()
            }
        }
    }
    return (
        <div className="footer p-3 d-flex align-items-center border-top border-dark">
            <textarea type="text" className='form-control' rows={3} onChange={(e) => setMsg(e.target.value)} value={msg} onKeyDown={handleKeySubmit}></textarea>
            <button className='send-btn' onClick={() => sendMsg(msg)}>
                <BS.BsSendFill size={26} />
            </button>
        </div>
    )
}

export default Footer