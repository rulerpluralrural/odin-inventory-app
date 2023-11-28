const express = require('express')
const route = express.Router()

// Controller Modules
const infoController = require('../controllers/infoController')
const categoryController = require('../controllers/categoryController')

// Get Home Page
router.route('/', infoController.index)

// < Requests for animal informations >

// GET request for creating an animal
router.get('/animal/create', infoController.animal_create_get)

// POST request for creating an animal
router.post('/animal/create', infoController.animal_create_post)

// GET request for deleting an animal
router.get('/animal/:id/delete', infoController.animal_delete_get)

// POST request for deleting an animal
router.post('/animal/:id/delete', infoController.animal_delete_post)

// GET request for updating an animal
router.get('/animal/:id/update', infoController.animal_update_get)

// POST request for updating a animal
router.post('/animal/:id/update', infoController.animal_patch_post)

// GET request for a single animal
router.get('/animal/:id', infoController.animal_details)

// Get request for a list of all animals
router.get('/animals', infoController.animal_list)

// < Requests for category >

// GET request for creating a category
router.get('/category/create', categoryController.category_create_get)

// POST request for creating a category
router.post('/category/create', categoryController.category_create_post)

// GET request for deleting a category
router.get('/category/:id/delete', categoryController.category_delete_get)

// POST request for deleting a category
router.post('/category/:id/delete', categoryController.category_delete_post)

// GET request for updating a category
router.get('/category/:id/update', categoryController.category_update_get)

// POST request for updating a category
router.post('/category/:id/update', categoryController.category_update_post)

// GET request for a single category
router.get('/category/:id', categoryController.category_details)

// Get request for a list of all categories
router.get('/categories', categoryController.category_list)