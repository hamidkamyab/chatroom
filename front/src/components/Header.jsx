import React from 'react'
import * as BS from 'react-icons/bs'
import friend from '../asset/img/friend.svg'

function Header({userInfo}) {
    return (
        <div className="header px-3 py-1 d-flex align-items-center justify-content-between">
            <div className="right">
                <h5 className='d-flex align-items-center gap-2'>
                    <BS.BsChatFill size={16} /> چت روم سوکت :)
                </h5>
                <small className='d-flex align-items-center gap-1'>
                    <BS.BsPersonFill size={14} /> {userInfo.name} عزیز خوش آمدید
                </small>
            </div>
            <div className="left">
                <img src={friend} alt="" className='header-img' />
            </div>
        </div>
    )
}

export default Header