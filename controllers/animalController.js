const Animal = require("../models/Animal");
const Category = require("../models/Category");
const asyncHandler = require("express-async-handler");

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

exports.animal_create_get = asyncHandler(async (req, res, next) => {
	res.send("GET Create Animal");
});

exports.animal_create_post = asyncHandler(async (req, res, next) => {
	res.send("POST Create Animal");
});

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
