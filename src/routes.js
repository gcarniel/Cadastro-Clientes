const express = require('express');
const routes = express.Router();
const ClientController = require('./controller/clientController')
const AddressController = require('./controller/addressController')

routes.get('/', ClientController.showClients )

routes.get('/editar/:id', ClientController.showClient )
routes.post('/editar/:id', ClientController.updateClient )
routes.post('/deletar/:id', ClientController.deleteClient )

routes.post('/novo', ClientController.insertClient )
routes.get('/novo', (req, res) => res.render('novo'))

routes.get('/endereco', (req, res) => res.render('endereco'))
routes.post('/endereco', AddressController.insertAddress )

routes.get('/contato', (req, res) => res.render('contato'))

routes.get('/redes', (req, res) => res.render('redes'))

// routes.post('/job', JobController.save)
// routes.get('/job/:id', JobController.show)
// routes.post('/job/:id', JobController.update)
// routes.post('/job/delete/:id', JobController.delete)
// routes.get('/profile', ProfileController.index)
// routes.post('/profile', ProfileController.update)


module.exports = routes;