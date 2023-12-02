const Animal = require("../models/Animal");
const Category = require("../models/Category");
const { StatusCodes } = require("http-status-codes");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

// Display Home Page
exports.index = asyncHandler(async (req, res, next) => {
	const [getAllAnimals, getAllCategories] = await Promise.all([
		Animal.find().exec(),
		Category.find().exec(),
	]);

	res.render("index", {
		title: "Wildlife Info",
		animals: getAllAnimals,
		categories: getAllCategories,
	});
});

// Display detail page for a specific category
exports.category_details = asyncHandler(async (req, res, next) => {
	const [category, getAllAnimals] = await Promise.all([
		Category.findById(req.params.id),
		Animal.find({ category: req.params.id }).sort().populate("category").exec(),
	]);

	res.render("category/category_details", {
		title: category.name,
		description: category.description,
		animals: getAllAnimals,
		category: category,
	});
});

// Display category form on GET
exports.category_create_get = asyncHandler(async (req, res, next) => {
	res.render("category/category_form", {
		title: "Create a category",
	});
});

// Handle category create form
exports.category_create_post = [
	// Validate and sanitize fields
	body("category_name")
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

		// Create new category with escaped and trimmed data
		const category = new Category({
			name: req.body.category_name,
			description: req.body.description,
		});

		if (!errors.isEmpty()) {
			// There are errors. Render form again with sanitized values/errors messages.
			res.render("category/category_form", {
				title: "Create Category",
				category: category,
				errors: errors.array(),
			});
			return;
		} else {
			// Data form is valid.
			//Save category
			await category.save();
			// Redirect to new category record.
			res.redirect(category.url);
		}
	}),
];

// Display category form on GET
exports.category_delete_get = asyncHandler(async (req, res, next) => {
	const [category, allAnimalsInCategory] = await Promise.all([
		Category.findById(req.params.id).exec(),
		Animal.find({ category: req.params.id }).exec(),
	]);


	if (category === null) {
		// No results
		res.redirect("/category");
	}

	res.render("category/category_delete", {
		title: "Delete Category",
		category: category,
		category_animals: allAnimalsInCategory,
	});
});

// Handle category delete on POST
exports.category_delete_post = asyncHandler(async (req, res, next) => {
	const [category, allAnimalsInCategory] = await Promise.all([
		Category.findById(req.params.id).exec(),
		Animal.find({ category: req.params.id }).exec(),
	]);

	if (allAnimalsInCategory.length > 0) {
		// Category has animals. Render in the same way as GET route
		res.render("category/category_delete", {
			title: "Delete Category",
			category: category,
			category_animals: allAnimalsInCategory,
		});
		return;
	} else {
		// Category has no animals. Delete the object and redirect to category list page.
		await Category.findByIdAndDelete(req.body.category_id);
		res.redirect("/category");
	}
});

exports.category_update_get = asyncHandler(async (req, res, next) => {
	res.send("GET Update category");
});

exports.category_update_post = asyncHandler(async (req, res, next) => {
	res.send("POST Update category");
});
