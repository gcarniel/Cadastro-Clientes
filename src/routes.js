const express = require('express');
const routes = express.Router();
const ClientController = require('./controller/clientController')
const AddressController = require('./controller/addressController')
const NetworkController = require('./controller/networkController');
const ContactController = require('./controller/contactController');

routes.get('/', ClientController.showClients)

routes.post('/novo', ClientController.insertClient)
routes.get('/novo', (req, res) => res.render('novo'))

routes.get('/editar/:id', ClientController.showClient)
routes.post('/editar/:id', ClientController.updateClient)
routes.post('/deletar/:id', ClientController.deleteClient)

routes.get('/endereco', (req, res) => res.render('endereco'))
routes.post('/endereco', AddressController.insertAddress)
routes.get('/editar/endereco/:id', AddressController.showAddress)
routes.post('/editar/endereco/:id', AddressController.updateAddress)

routes.get('/contato', (req, res) => res.render('contato'))
routes.post('/contato', ContactController.insertContact)
routes.get('/editar/contato/:id', ContactController.showContact)
routes.post('/editar/contato/:id', ContactController.updateContact)

routes.get('/redes', (req, res) => res.render('redes'))
routes.post('/redes', NetworkController.insertNetwork)
routes.get('/editar/redes/:id', NetworkController.showNetwork)
routes.post('/editar/redes/:id', NetworkController.updateNetwork)




// routes.post('/job', JobController.save)
// routes.get('/job/:id', JobController.show)
// routes.post('/job/:id', JobController.update)
// routes.post('/job/delete/:id', JobController.delete)
// routes.get('/profile', ProfileController.index)
// routes.post('/profile', ProfileController.update)


module.exports = routes;