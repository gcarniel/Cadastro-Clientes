const Contact = require('../model/contact')

module.exports = {
    index (req, res) {
        return res.render('contato')
    },

    async showContact(req, res) {
        const idClient = req.params.id

        const dataContact = await Contact.getContact(idClient)

        return res.render('editar_contato', { dataContact })
    },

    async insertContact(req, res) {
        const contact = {
            ...req.body
        }

        await Contact.insertContact(contact)

        return res.redirect('/redes')
    },

    async updateContact(req, res) {
        const idClient = req.params.id

        const updatedContact = {
            ...req.body
        }

        const idContact = req.body['id-contato'] === '' ? 0 : req.body['id-contato']

        const existsContact = await Contact.existsContact(idClient, idContact)

        if (existsContact) {
            await Contact.updateContact(idClient, idContact, updatedContact)
            return res.redirect('/editar/contato/' + idClient)
        } else {
            await Contact.insertContact(updatedContact, idClient)
            return res.redirect('/editar/contato/' + idClient)
        }
    },

    async deleteContact(req, res) {
        const idClient = req.params.id

        await Contact.deleteClient(idClient)

        return res.redirect('/')
    }
}