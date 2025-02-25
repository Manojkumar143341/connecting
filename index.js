const net = require('net');

const server = net.createServer(socket => {
    console.log('Client connected');
    socket.write('Welcome to the TCP server!\n');

    socket.on('data', data => {
        console.log(`Received: ${data}`);
        socket.write(`Echo: ${data}`);
    });

    socket.on('end', () => console.log('Client disconnected'));
});

server.listen(4000, () => console.log('TCP server listening on port 4000'));
