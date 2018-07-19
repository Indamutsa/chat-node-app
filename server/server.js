const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3200;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newEmail', {
        from: 'arsichizy@hotmail.com',
        text: 'Hey what is going on.',
        createdAt: 123
    });

    socket.emit('newMessage', {
        from: 'John',
        text: 'See you then',
        createdAt: 123123
    });



    socket.on('createMessage', (message) => {
        console.log('createMessage', message)
    });


    socket.on('createEmail', (newEmail) => {
        console.log('createEmail', newEmail)
    });

    socket.on('disconnect', () => {
        console.log('Disconnected from server');
    });
});



server.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
