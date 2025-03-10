﻿import express from 'express';
import { Server } from 'socket.io';
import cors from 'cors'

const app = express();

app.use(cors())

app.get('/', (req, res) => {
    res.send('Salam!!!!!!!!')
})

const server = app.listen(3030, (error) => {
    if (error) {
        return console.log('Server Error!');
    }
    console.log('Server Runnig...')
})

const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ["GET", "POST"]
    }
})
const mySocket = io.of('/socket')

mySocket.on('connection', (socket) => {

    socket.on('sendMessage', (data) => {
        const now = new Date()
        mySocket.emit('newMsg', {...data, date: now.toLocaleString('en-GB', { timeZone: 'Asia/Tehran' }) })
    })

    socket.on('disconnect', (socket) => {
        console.log('disconnect New User');
    })
})