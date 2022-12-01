const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser');

const { dbConnection } = require('../database/config');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.resortPath = '/api/resort';

        //conectar a database
        this.connectDB();
        //middlewares
        this.middlewares();
        //routes
        this.routes();
    }

    async connectDB() {
        await dbConnection();
    }

    middlewares() {
        //cors
        this.app.use(cors());
        //Lectura y Parseo del body
        this.app.use(express.json());
        //directorio publico
        this.app.use(express.static('public'));
        //bodyparser
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true })) // format the form data
    }

    routes() {
        this.app.use(this.resortPath, require('../routes/room'));
        this.app.use(this.resortPath, require('../routes/resort'));
        this.app.use(this.resortPath, require('../routes/search'));

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }
}

module.exports = Server;