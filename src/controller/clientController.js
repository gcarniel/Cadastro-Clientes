const Client = require('../model/client')

module.exports = {
    async showClients(req, res) {
        const clients = await Client.getClients()

        return res.render('index', { clients })
    },

    async showClient(req, res) {
        const idClient = req.params.id

        const client = await Client.getClient(idClient)

        const dataClient = client[0]

        return res.render('editar', { dataClient })
    },

    async insertClient(req, res) {
        const client = {
            ...req.body
        }

        await Client.insertClient(client)

        return res.redirect('/')
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

        return res.redirect('/')
    }
}