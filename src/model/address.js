const Database = require('../db/config')

module.exports = {
    async existsContact(idClient, idAddress) {
        const db = await Database()

        const [address] = await db.all(`SELECT COUNT(*) as registros FROM enderecos WHERE id_cliente = ${idClient} AND id = ${idAddress}`)

        console.log(address, (`SELECT COUNT(*) as registros FROM enderecos WHERE id_cliente = ${idClient} AND id = ${idAddress}`))

        await db.close()

        if (address.registros > 0) {
            return true
        }

        return false
    },

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

    async insertAddress(address, idClient) {
        const db = await Database()

        const { id } = await this.getID()
        const idClientOrNextId = idClient || id

        await db.run(`INSERT INTO enderecos (
            id_cliente, 
            tipo,
            rua,
            numero,
            bairro,
            cidade,
            cep
            ) VALUES (
            ${idClientOrNextId},
            '${address.tipo}',
            '${address.rua}',
            '${address.numero}',
            '${address.bairro}',
            '${address.cidade}',
            '${address.cep}'
            )`)

        await db.close()
    },

    async updateAddress(idClient, idAddress, address) {
        const db = await Database()

        await db.run(`UPDATE enderecos SET
        tipo = '${address.tipo}',
        rua = '${address.rua}',
        numero = '${address.numero}',
        bairro = '${address.bairro}',
        cidade = '${address.cidade}',
        cep = '${address.cep}'
        WHERE id_cliente = ${idClient} 
        AND id = ${idAddress}`)

        await db.close()
    },

    async deleteAddress(idClient) {
        const db = await Database()

        await db.run(`DELETE FROM enderecos WHERE id_cliente = ${idClient}`)

        await db.close()
    },
}