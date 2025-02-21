const express = require('express')
const http = require('http')
const { Server } = require('socket.io')
const cors = require('cors')

const app = express()
const db = require('./config/db')

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", require('./Routes/Route'))

const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', "POST"],
    }
})
io.on('connection', require('./controller/socketConnection'))

server.listen(2000, err => err ? console.log(err) : console.log('Server Started...'))