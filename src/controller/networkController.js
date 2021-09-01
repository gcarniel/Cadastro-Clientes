const Network = require('../model/network')

module.exports = {
    async showNetwork(req, res) {
        const idClient = req.params.id

        const dataNetworks = await Network.getNetworks(idClient)

        return res.render('editar', { dataNetworks })
    },

    async insertNetwork(req, res) {
        const networks = {
            ...req.body
        }

        await Network.insertNetwork(networks)

        return res.redirect('/')
    },

    async updateNetwork(req, res) {
        console.log('update network')
        const idClient = req.params.id

        const updatedNetworks = {
            ...req.body
        }

        await Network.updateNetwork(idClient, updatedNetworks)

        return res.redirect('/editar/' + idClient)
    },

    async deleteNetwork(req, res) {
        const idClient = req.params.id

        await Network.deleteNetwork(idClient)

        return res.redirect('/')
    }
}