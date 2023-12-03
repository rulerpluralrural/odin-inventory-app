const Animal = require("../models/Animal");
const Category = require("../models/Category");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

// Display animal list on get
exports.index = asyncHandler(async (req, res, next) => {
	const [getAllAnimals, getAllCategories] = await Promise.all([
		Animal.find().sort("name").populate("category").exec(),
		Category.find().exec(),
	]);

	res.render("animal/animal_list", {
		title: "Animal List",
		animals: getAllAnimals,
		categories: getAllCategories,
	});
});

// Display animal details on GET
exports.animal_details = asyncHandler(async (req, res, next) => {
	const animal = await Animal.findById(req.params.id)
		.populate("category")
		.exec();

	res.render("animal/animal_details", {
		title: animal.name,
		animal: animal,
		animal_category: animal.category,
	});
});

// Display animal create form on GET
exports.animal_create_get = asyncHandler(async (req, res, next) => {
	const categories = await Category.find().exec();
	res.render("animal/animal_form", {
		title: "Add an animal",
		categories: categories,
	});
});

// Handle create animal form on POST
exports.animal_create_post = [
	// Validate and sanitize fields
	body("animal_name")
		.trim()
		.isLength({ min: 1 })
		.escape()
		.withMessage("Category name must be specified")
		.isAlphanumeric()
		.withMessage("Category name has non-alpanumeric characters"),
	body("description")
		.trim()
		.isLength({ min: 1 })
		.escape()
		.withMessage("Description must be specified"),

	// Process request after validation and sanitation
	asyncHandler(async (req, res, next) => {
		// Extract the validation errors from a request.
		const errors = validationResult(req);

		// Create new animal with escaped and trimmed data
		const animal = new Animal({
			name: req.body.animal_name,
			description: req.body.description,
		});

		if (!errors.isEmpty()) {
			// There are errors. Render form again with sanitized values/errors messages.
			res.render("animal/animal_form", {
				title: "Add an Animal",
				animal: animal,
				errors: errors.array(),
			});
			return;
		} else {
			// Data form is valid.
			//Save animal
			await animal.save();
			// Redirect to new animal record.
			res.redirect(animal.url);
		}
	}),
];

exports.animal_delete_get = asyncHandler(async (req, res, next) => {
	res.send("GET Delete Animal");
});

exports.animal_delete_post = asyncHandler(async (req, res, next) => {
	res.send("GET Delete Animal");
});

exports.animal_update_get = asyncHandler(async (req, res, next) => {
	res.send("GET Update Animal");
});

exports.animal_update_post = asyncHandler(async (req, res, next) => {
	res.send("POST Update Animal");
});
