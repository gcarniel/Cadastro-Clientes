const Database = require('../db/config')

module.exports = {
    async existsContact(idClient, idContact) {
        const db = await Database()

        const [contacts] = await db.all(`SELECT COUNT(*) as registros FROM telefones WHERE id_cliente = ${idClient} AND id = ${idContact}`)

        await db.close()

        if (contacts.registros > 0) {
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

    async getContact(idClient) {
        const db = await Database()

        const contacts = await db.all(`SELECT * FROM telefones WHERE id_cliente = ${idClient}`)

        await db.close()

        return contacts
    },

    async insertContact(contact, idClient) {
        const db = await Database()

        const { id } = await this.getID()
        const idClientOrNextId = idClient || id

        console.log('insert ::::::', idClientOrNextId, contact)

        await db.run(`INSERT INTO telefones (
            id_cliente, 
            tipo,
            ddd,
            numero
            ) VALUES (
            ${idClientOrNextId},
            '${contact.tipo}',
            '${contact.ddd}',
            '${contact.numero}'
            )`)

        await db.close()
    },

    async updateContact(idClient, idContact, contact) {
        const db = await Database()

        await db.run(`UPDATE telefones SET
        tipo = '${contact.tipo}',
        ddd = '${contact.ddd}',
        numero = '${contact.numero}'
        WHERE id_cliente = ${idClient} 
        AND id = ${idContact}`).catch((e) => { console.log('erro update') })

        await db.close()
    },

    async deleteContact(idContact) {
        const db = await Database()

        const { id } = await this.getID()

        await db.run(`DELETE FROM telefones WHERE id_cliente = ${id} AND id = ${idContact}`)

        await db.close()
    },
}