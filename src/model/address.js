const Database = require('../db/config')

module.exports = {
    async getID() {
        const db = await Database()

        const id = await db.get('SELECT MAX(id) as id FROM clientes')

        await db.close()

        return id 
    },

    async getAllAddress() {
        const db = await Database()

        const address = await db.all('SELECT * FROM enderecos')

        await db.close()

        return address
    },

    async getAddress(idClient) {
        const db = await Database()

        const address = await db.all(`SELECT * FROM enderecos WHERE id_cliente = ${idClient}`)

        await db.close()

        return address
    },

    async insertAddress(address) {
        const db = await Database()

        const { id } = await this.getID()
        const idClient = id

        await db.run(`INSERT INTO enderecos (
            id_cliente, 
            tipo,
            rua,
            numero,
            bairro,
            cidade,
            cep
            ) VALUES (
            ${idClient},
            '${address.tipo}',
            '${address.rua}',
            '${address.numero}',
            '${address.bairro}',
            '${address.cidade}',
            '${address.cep}'
            )`)

        await db.close()
    },

    async updateAddress(idAddress, address) {
        const db = await Database()

        const { id } = await this.getID()
        const idClient = id

        await db.run(`UPDATE enderecos SET
        tipo = '${address.tipo}',
        rua = '${address.rua}',
        numero = '${address.numero}',
        bairro = '${address.bairro}',
        cidade = '${address.cidade}',
        cep = '${address.cep}',
        WHERE id_cliente = ${idClient} 
        AND id = ${idAddress}`)

        await db.close()
    },

    async deleteAddress(idAddress) {
        const db = await Database()

        const { id } = await this.getID()
        const idClient = id

        await db.run(`DELETE FROM enderecos WHERE id_cliente = ${idClient} AND id = ${idAddress}`)

        await db.close()
    },
}