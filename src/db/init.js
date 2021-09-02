const Database = require('./config')

const initDb = {
    async init() {

        const db = await Database()

        await db.exec(`CREATE TABLE clientes (
            id INTEGER PRIMARY KEY,
            nome TEXT, 
            nascimento DATES,
            cpf TEXT,
            rg TEXT
        )`);

        await db.exec(`CREATE TABLE enderecos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            id_cliente INT, 
            tipo TEXT,
            rua TEXT,
            numero TEXT,
            bairro TEXT,
            cidade TEXT,
            cep TEXT
        )`);

        await db.exec(`CREATE TABLE telefones (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            id_cliente INT,
            tipo TEXT,
            ddd TEXT,
            numero TEXT
        )`);

        await db.exec(`CREATE TABLE redes_sociais (
            id_cliente PRIMARY KEY,
            twitter TEXT,
            facebook TEXT,
            linkedin TEXT,
            instagram TEXT
        )`);

        await db.close()
    }
}


initDb.init()