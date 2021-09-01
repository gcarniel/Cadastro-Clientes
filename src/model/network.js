const Database = require('../db/config')

module.exports = {
    async getID() {
        const db = await Database()

        const id = await db.get('SELECT MAX(id) as id FROM clientes')

        await db.close()

        return id 
    },

    async getNetworks(idClient) { //id vou receber por parametro do controller do cliente
        const db = await Database()

        const address = await db.all(`SELECT * FROM redes_sociais WHERE id_cliente = ${idClient}`)

        await db.close()

        return address
    },

    async insertNetwork(network) { //id aqui pego o max(id) pois foi o ultimo cliente cadastrado
        const db = await Database()

        const { id } = await this.getID()
        const idClient = id

        await db.run(`INSERT INTO redes_sociais (
            id_cliente, 
            twitter,
            facebook,
            linkedin,
            instagran
            ) VALUES (
            ${idClient},
            '${network.twitter}',
            '${network.facebook}',
            '${network.linkedin}',
            '${network.instagran}'
            )`)
            .catch((e) => {console.log(`Erro ao gravar. ${e}`)})

        await db.close()
    },

    async updateNetwork(idClient, network) { //id vou receber por parametro do controller do cliente
        const db = await Database()

        await db.run(`UPDATE redes_sociais SET
        twitter = '${network.twitter}',
        facebook = '${network.facebook}',
        linkedin = '${network.linkedin}',
        instagran = '${network.instagran}'
        WHERE id_cliente = ${idClient}`)

        await db.close()
    },

    async deleteNetwork(idClient) { //id vou receber por parametro do controller do cliente
        const db = await Database()

        await db.run(`DELETE FROM redes_sociais WHERE id_cliente = ${idClient}`)

        await db.close()
    },
}