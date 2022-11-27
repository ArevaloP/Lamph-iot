const express = require('express');
const cors = require('cors');

const { dbConnection } = require('../database/connection');


class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT,
        this.paths = {
            lamph: '/lamph'
        }

        this.connectionDB();
        this.middlewares();
        this.routes();
    }

    async connectionDB(){
        await dbConnection();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'))
    }

    routes(){
        this.app.use(this.paths.lamph, require('../routes/lamph.route'));    
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server listening in PORT: ${this.port}`);
        });
    }

}

module.exports = Server