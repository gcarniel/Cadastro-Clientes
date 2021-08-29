const Client = require('../model/client')

module.exports = {
    async showClients(req, res) {
        const clients = await Client.getClients()

        return res.render('index', { clients })
    },

    async showClient(req, res) {
        const idClient = req.params.id
        
        const client = await Client.getClient(idClient)

        console.log(client)

        return res.render('editar', { client })
    },

    async updateClient(req, res) {
        const idClient = req.params.id

        console.log(idClient)

        // await Client.deleteClient(idClient)

        return res.render('editar')
    },

    async deleteClient(req, res) {
        const idClient = req.params.id

        await Client.deleteClient(idClient)

        return res.redirect('/')
    }
}