const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3200;
var app = express();
var server = http.createServer(app);

app.use(express.static(publicPath));

server.listen(3200, () => {
    console.log(`Server is running on ${port}`);
});
