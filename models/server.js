const express = require('express');
const cors = require('cors');
const { socketController } = require('../sockets/controller');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);
        this.middlewares();
    }

    middlewares() {
        //ACCESOS CORS
        this.app.use(cors());
        //LECTURA BODY
        this.app.use(express.json());
        //DIRECTORIO
        this.app.use(express.static('public'));
        //SOCKETS
        this.sockets();
    }

    sockets() {
        this.io.on('connection', socketController);
    }

    listen() {
        this.server.listen(this.port, () => {
            console.log(`El webserver esta corriendo en el puerto ${this.port}`);
        });
    }
}

module.exports = Server;
