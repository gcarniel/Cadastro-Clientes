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

        const updatedAddress = {
            ...req.body
        }

        const idAddress = req.body['tipo-end-editar'] === '' ? 0 : req.body['tipo-end-editar']

        const existsContact = await Address.existsContact(idClient, idAddress)

        console.log(existsContact, idClient, idAddress, updatedAddress)

        if (existsContact) {
            await Address.updateAddress(idClient, idAddress, updatedAddress)
            return res.redirect('/editar/endereco/' + idClient)
        } else {
            await Address.insertAddress(updatedAddress, idClient)
            return res.redirect('/')
        }
    },

    async deleteAddress(req, res) {
        const idClient = req.params.id

        await Address.deleteClient(idClient)

        return res.redirect('/')
    }
}