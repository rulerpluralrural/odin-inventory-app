const Animal = require("../models/Animal");
const Category = require("../models/Category");
const { StatusCodes } = require("http-status-codes");
const asyncHandler = require("express-async-handler");

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

exports.category_details = asyncHandler(async (req, res, next) => {
	const [category, getAllAnimals] = await Promise.all([
		Category.findById(req.params.id),
		Animal.find({ category: req.params.id }).sort().populate('category').exec(),
	]);

	res.render("category/category_details", {
		title: 'Wildlife Info',
		name: category.name,
		description: category.description,
		animals: getAllAnimals,
	});
});

//
exports.category_list = asyncHandler(async (req, res, next) => {
	const categories = await Category.find();
	res.status(StatusCodes.OK).json({ categories });
});

exports.category_create_get = asyncHandler(async (req, res, next) => {
	res.send("GET Create Category");
});

exports.category_create_post = asyncHandler(async (req, res, next) => {
	const category = await Category.create(req.body);

	res.status(StatusCodes.CREATED).json({ category });
});

exports.category_delete_get = asyncHandler(async (req, res, next) => {
	res.send("GET Delete Category");
});

exports.category_delete_post = asyncHandler(async (req, res, next) => {
	res.send("GET Delete category");
});

exports.category_update_get = asyncHandler(async (req, res, next) => {
	res.send("GET Update category");
});

exports.category_update_post = asyncHandler(async (req, res, next) => {
	res.send("POST Update category");
});
