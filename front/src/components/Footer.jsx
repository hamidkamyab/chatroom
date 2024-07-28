import React from 'react'
import * as BS from 'react-icons/bs'

function Footer() {
    return (
        <div className="footer p-3 d-flex align-items-center">
            <textarea type="text" className='form-control' rows={3}></textarea>
            <button className='send-btn'>
                <BS.BsSendFill size={26} />
            </button>
        </div>
    )
}

export default Footer