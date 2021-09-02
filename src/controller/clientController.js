const Client = require('../model/client')
const Address = require('../model/address')
const Network = require('../model/network')
const Contact = require('../model/contact')

module.exports = {
    async showClients(req, res) {
        const clients = await Client.getClients()

        return res.render('index', { clients })
    },

    async showClient(req, res) {
        const idClient = req.params.id

        const [dataClient] = await Client.getClient(idClient)
        const dataClientAddress = await Address.getAddress(idClient)
        const [dataNetworks] = await Network.getNetworks(idClient)

        return res.render('editar', { dataClient, dataClientAddress, dataNetworks })
    },

    async insertClient(req, res) {
        const client = {
            ...req.body
        }

        await Client.insertClient(client)

        return res.redirect('/endereco')
    },

    async updateClient(req, res) {
        const idClient = req.params.id

        const updatedClient = {
            ...req.body
        }

        await Client.updateClient(idClient, updatedClient)

        return res.redirect('/editar/' + idClient)
    },

    async deleteClient(req, res) {
        const idClient = req.params.id

        await Client.deleteClient(idClient)
        await Address.deleteAddress(idClient)
        await Contact.deleteContact(idClient)
        await Network.deleteNetwork(idClient)

        return res.redirect('/')
    }
}