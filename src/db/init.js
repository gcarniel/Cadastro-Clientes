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
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            id_cliente INT,
            rede TEXT
        )`);

        await db.run(`INSERT INTO clientes (
            id,
            nome,
            nascimento,
            cpf,
            rg
        ) VALUES (
            1,
            "Gabriel",
            "11/03/1990",
            "111.111.111-11",
            "111.222-9"
        );`)

        await db.run(`INSERT INTO enderecos (
            id_cliente,
            tipo,
            rua,
            numero,
            bairro,
            cidade,
            cep
        ) VALUES (
            1,
            "comercial",
            "rua",
            "111",
            "bairro",
            "cidade",
            "cep 1111"
        );`)

        await db.run(`INSERT INTO telefones (
            id_cliente, 
            tipo,
            ddd,
            numero
        ) VALUES (
            1,
            "comercial",
            "(44)",
            "99999999"
        );`)

        await db.run(`INSERT INTO redes_sociais (
            id_cliente,
            rede
        ) VALUES (
            1,
            "twitter-url"
        );`)

        await db.close()
    }
}


initDb.init()