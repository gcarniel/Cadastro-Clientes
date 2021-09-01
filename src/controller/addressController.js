const Address = require('../model/address')

module.exports = {
    async showAddress(req, res) {
        const idClient = req.params.id

        const dataAddress = await Address.getAddress(idClient)

        return res.render('editar_endereco', { dataAddress })
    },

    async insertAddress(req, res) {
        const address = {
            ...req.body
        }

        await Address.insertAddress(address)

        return res.redirect('/contato')
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