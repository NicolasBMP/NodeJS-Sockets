const socketController = (socket) => {
    console.log('Connected', socket.id);

    socket.on('disconnect', () => {
        console.log('Disconnect', socket.id);
    });

    socket.on('enviar-mensaje', (data, callback) => {
        //SOLO PARA EL CLIENTE EMISOR
        const id = '9999999';
        callback(id);
        //ENVIAR A TODOS
        data.socket = socket.id;
        socket.broadcast.emit('enviar-mensaje', data);
    });
}

module.exports = {
    socketController: socketController
}
