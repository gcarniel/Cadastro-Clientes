const express = require('express');
const routes = express.Router();
const ClientController = require('./controller/clientController')
const AddressController = require('./controller/addressController')
const NetworkController = require('./controller/networkController');
const ContactController = require('./controller/contactController');

routes.get('/', ClientController.showClients)

routes.get('/novo', ClientController.index)
routes.post('/novo', ClientController.insertClient)

routes.get('/editar/:id', ClientController.showClient)
routes.post('/editar/:id', ClientController.updateClient)
routes.post('/deletar/:id', ClientController.deleteClient)

routes.get('/endereco', AddressController.index)
routes.post('/endereco', AddressController.insertAddress)
routes.get('/editar/endereco/:id', AddressController.showAddress)
routes.post('/editar/endereco/:id', AddressController.updateAddress)

routes.get('/contato', ContactController.index)
routes.post('/contato', ContactController.insertContact)
routes.get('/editar/contato/:id', ContactController.showContact)
routes.post('/editar/contato/:id', ContactController.updateContact)

routes.get('/redes', NetworkController.index)
routes.post('/redes', NetworkController.insertNetwork)
routes.get('/editar/redes/:id', NetworkController.showNetwork)
routes.post('/editar/redes/:id', NetworkController.updateNetwork)

module.exports = routes;