import React, { useEffect, useRef, useState } from 'react'
import SocketIoClient from 'socket.io-client'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

function Chatroom() {
  const [userInfo, setUserInfo] = useState({})

  const socket = useRef(SocketIoClient.connect('http://localhost:3030/socket'))

  socket.current.on('connect', () => {
    console.log('Connect User :)')
    console.log(userInfo)
  })

  const getUserInfo = () => {
    const info = JSON.parse(localStorage.getItem('info'))
    if (info) {
      setUserInfo(info)
    }
  }
  useEffect(() => {
    getUserInfo()
    return () => {
    };
  }, []);
  return (
    <div className='container py-5 h-100 d-flex justify-content-center align-items-center'>
      {/* {  
        <h1>name:{userInfo.name}</h1>
      } */}

      <div className="chat-box col-10 h-100 bg-white d-flex flex-column">
        <Header userInfo={userInfo} />
        <div className="chat-body flex-grow-1"></div>
        <Footer />
      </div>

    </div>
  )
}

export default Chatroom
