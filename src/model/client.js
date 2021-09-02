const Database = require('../db/config')

module.exports = {
    async getID() {
        const db = await Database()

        const id = await db.get('SELECT MAX(id) as id FROM clientes')

        await db.close()

        return id 
    },

    async getClients() {
        const db = await Database()

        const clients = await db.all(`SELECT * FROM clientes cl LEFT JOIN redes_sociais rs on cl.id = rs.id_cliente`)

        await db.close()

        return clients
    },

    async getSearchedClients(clients) {
        const db = await Database()

        const SearchedClients = await db.all(`SELECT * FROM clientes WHERE nome LIKE '%${clients}%' `)

        await db.close()

        return SearchedClients
    },

    async getClient(idClient) {
        const db = await Database()

        const client = await db.all(`SELECT * FROM clientes WHERE id = ${idClient}`)

        await db.close()

        return client
    },

    async insertClient(client) {
        const db = await Database()

        const { id } = await this.getID()
        const nextId = id + 1

        await db.run(`INSERT INTO clientes (
            id,
            nome,
            nascimento,
            cpf,
            rg
            ) VALUES (
            ${nextId},
            '${client.nome}',
            '${client.nascimento}',
            '${client.cpf}',
            '${client.rg}'
            )`)

        await db.close()
    },

    async updateClient(idClient, client) {
        const db = await Database()

        await db.run(`UPDATE clientes SET
        nome = '${client.nome}',
        nascimento = '${client.nascimento}',
        cpf = '${client.cpf}',
        rg = ${client.rg}
        WHERE id = ${idClient}`)

        await db.close()
    },

    async deleteClient(idClient) {
        const db = await Database()

        await db.run(`DELETE FROM clientes WHERE id = ${idClient}`)

        await db.close()
    },
}