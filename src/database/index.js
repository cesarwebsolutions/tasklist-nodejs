import Sequelize from 'sequelize';
import database from '../config/database';
import User from '../app/models/User'

let models = [User];

class Database {
    constructor(){
        this.init()
    }

    init() {
        // conexão do banco de dados com os models
        this.connection = new Sequelize(database);

        // carrega todos os models passando a conexão
        models.map(model => model.init(this.connection));
        // model.init(this.connection)
    }
}

export default new Database();