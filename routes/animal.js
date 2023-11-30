const express = require('express')
const animalRouter = express.Router()
const router = express.Router()

// Controller Modules
const animalController = require('../controllers/animalController')

// < Requests for animal informations >

// GET request for creating an animal
animalRouter.get('/create', animalController.animal_create_get)

// POST request for creating an animal
animalRouter.post('/create', animalController.animal_create_post)

// GET request for deleting an animal
animalRouter.get('/:id/delete', animalController.animal_delete_get)

// POST request for deleting an animal
animalRouter.post('/:id/delete', animalController.animal_delete_post)

// GET request for updating an animal
animalRouter.get('/:id/update', animalController.animal_update_get)

// POST request for updating a animal
animalRouter.post('/:id/update', animalController.animal_update_post)

// GET request for a single animal
animalRouter.get('/:id', animalController.animal_details)

// Get request for a list of all animals
router.get('/animals', animalController.animal_list)

router.use('/animal', animalRouter)

module.exports = router