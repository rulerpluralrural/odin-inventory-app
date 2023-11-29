const express = require("express");
const router = express.Router();
const categoryRouter = express.Router();

// Controller Modules
const categoryController = require("../controllers/categoryController");

// < Requests for category >

// GET Category Page
categoryRouter.get('/', categoryController.index)

// GET request for creating a category
categoryRouter.get("/create", categoryController.category_create_get);

// POST request for creating a category
categoryRouter.post("/create", categoryController.category_create_post);

// GET request for deleting a category
categoryRouter.get("/:id/delete", categoryController.category_delete_get);

// POST request for deleting a category
categoryRouter.post("/:id/delete", categoryController.category_delete_post);

// GET request for updating a category
categoryRouter.get("/:id/update", categoryController.category_update_get);

// POST request for updating a category
categoryRouter.post("/:id/update", categoryController.category_update_post);

// GET request for a single category
categoryRouter.get("/:id", categoryController.category_details);

// Get request for a list of all categories
router.get("/categories", categoryController.category_list);

router.use('/category', categoryRouter)

module.exports = router;
