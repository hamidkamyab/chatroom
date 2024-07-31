import React, { useEffect, useRef, useState } from 'react'
import SocketIoClient from 'socket.io-client'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import MessageItem from '../../components/MessageItem'

function Chatroom() {
  const [userInfo, setUserInfo] = useState({})
  const [messages, setMessages] = useState([])

  const socket = useRef(SocketIoClient.connect('http://localhost:3030/socket'))
  const chatElem = useRef(null)

  const getUserInfo = () => {
    const info = JSON.parse(localStorage.getItem('info'))
    if (info) {
      setUserInfo(info)
    }
  }

  const handleSendMsg = (msg) => {
    socket.current.emit('sendMessage', {
      name: userInfo.name,
      gender: userInfo.gender,
      token: userInfo.token,
      body: msg
    })
  }

  useEffect(() => {
    getUserInfo()

    socket.current.on('newMsg', (data) => {
      setMessages(message => [...message, data])
      setTimeout(() => {
        chatElem.current.scrollTo({ left: 0, top: chatElem.current.scrollHeight, behavior: "smooth" });
      }, 100);
    })

    return () => {
      
    };
  }, []);

  return (
    <div className='col-12 py-5 px-3 h-100 d-flex justify-content-center align-items-center'>

      <div className="chat-box col-xl-9 col-lg-10 col-12 h-100 bg-white d-flex flex-column">
        <Header userInfo={userInfo} />
        <div ref={chatElem} className="chat-body flex-grow-1 px-1 pt-2 pb-3 d-flex flex-column gap-3 overflow-y-auto">
          {
            messages.map((message, index) => (
              <MessageItem userInfo={userInfo} message={message} key={index} />
            ))
          }

        </div>
        <Footer handleSendMsg={handleSendMsg} />
      </div>

    </div>
  )
}

export default Chatroom
