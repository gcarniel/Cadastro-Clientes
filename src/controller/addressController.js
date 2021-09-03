const Address = require('../model/address')

module.exports = {
    index(req, res) {
        return res.render('endereco')
    },

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

        const updatedAddress = {
            ...req.body
        }

        const idAddress = req.body['id-endereco'] === '' ? 0 : req.body['id-endereco']

        const existsContact = await Address.existsContact(idClient, idAddress)

        if (existsContact) {
            await Address.updateAddress(idClient, idAddress, updatedAddress)
            return res.redirect('/editar/endereco/' + idClient)
        } else {
            await Address.insertAddress(updatedAddress, idClient)
            return res.redirect('/editar/endereco/' + idClient)
        }
    },

    async deleteAddress(req, res) {
        const idClient = req.params.id

        await Address.deleteClient(idClient)

        return res.redirect('/')
    }
}