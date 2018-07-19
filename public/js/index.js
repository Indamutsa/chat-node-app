var socket = io();
socket.on('connect', function () {
    console.log('Connected to server');

    socket.emit('createEmail', {
        to: 'Maria@exmple.com',
        text: 'Hey. this is Andrew.'
    });


    socket.emit('createMessage', {
        from: 'arsene@exmple.com',
        text: 'Yup. that works for me'
    });
});

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

socket.on('newEmail', function (email) {
    console.log('New email', email);
});

socket.on('newMessage', function (message) {
    console.log('New email', message);
});