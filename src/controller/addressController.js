const Address = require('../model/address')

module.exports = {
    async showAllAddress(req, res) {
        const address = await Address.getClients()

        return res.render('index', { address })
    },

    async showAddress(req, res) {
        const idClient = req.params.id

        const client = await Address.getClient(idClient)

        const dataClient = client[0]

        return res.render('editar', { dataClient })
    },

    async insertAddress(req, res) {
        const address = {
            ...req.body
        }

        await Address.insertAddress(address)

        return res.redirect('/endereco')
    },

    async updateAddress(req, res) {
        const idClient = req.params.id

        const updatedClient = {
            ...req.body
        }

        await Address.updateClient(idClient, updatedClient)

        return res.redirect('/editar/' + idClient)
    },

    async deleteAddress(req, res) {
        const idClient = req.params.id

        await Address.deleteClient(idClient)

        return res.redirect('/')
    }
}