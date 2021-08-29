const express = require('express');
const routes = express.Router();
const ClientController = require('./controller/clientController')

// const ProfileController = require('./controllers/ProfileController')
// const JobController = require('./controllers/JobController')
// const DashboardController = require('./controllers/DashboardController')

routes.get('/', ClientController.showClients )

routes.get('/editar/:id', ClientController.showClient )

routes.get('/novo', (req, res) => {
    return res.render('novo')
})


// routes.post('/job', JobController.save)
// routes.get('/job/:id', JobController.show)
// routes.post('/job/:id', JobController.update)
// routes.post('/job/delete/:id', JobController.delete)
// routes.get('/profile', ProfileController.index)
// routes.post('/profile', ProfileController.update)


module.exports = routes;