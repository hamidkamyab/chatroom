import React from 'react'
import woman from '../asset/img/woman.png'
import man from '../asset/img/man.png'
import moment from "moment-jalaali";

function MessageItem({ userInfo, message }) {
    var now = new Date();
    return (
        <div className={`MsgItem py-3 ps-3 d-flex justify-content-start align-items-stretch gap-1 ${userInfo.token === message.token && 'my-msg'}`}>
            <div className="detail d-flex align-items-center flex-column px-1 col-1">
                <div className="user-pic">
                    {
                        message.gender == 0 ?
                            <img src={woman} alt="" />
                            :
                            <img src={man} alt="" />
                    }
                </div>
                <div className="user-name">
                    <span className='text-center d-block'>{message.name}</span>
                </div>
            </div>
            <div className="msgBox col-11 d-flex flex-column">
                <div className="msg position-relative d-flex align-items-start w-100">
                    <p className='m-0 p-3'>
                        {message.body}
                    </p>
                </div>
                <div className="msgDate mt-4">
                    {moment(message.date, 'DD/MM/YYYY HH:mm:ss').format('jYYYY/jMM/jDD HH:mm:ss')}
                </div>
            </div>

        </div>
    )
}

export default MessageItem