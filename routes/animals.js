const express = require('express')
const route = express.Router()

// Controller Modules
const animalsController = require('../controllers/animalsController')

// Get Home Page
router.route('/', animalsController.index)

// GET request for creating an animal
router.get('/animal/create', animalsController.animal_create_get)

// POST request for creating an animal
router.post('/animal/create', animalsController.animal_create_post)

// GET request for deleting an animal
router.get('/animal/:id/delete', animalsController.animal_delete_get)

// POST request for deleting an animal
router.post('/animal/:id/delete', animalsController.animal_delete_post)

// GET request for updating an animal
router.get('/animal/:id/update', animalsController.animal_update_get)

// POST request for updating a animal
router.post('/animal/:id/update', animalsController.animal_patch_post)

// GET request for a single animal
router.get('/animal/:id', animalsController.animal_details)

// Get request for a list of all animals
router.get('/animals', animalsController.animal_list)