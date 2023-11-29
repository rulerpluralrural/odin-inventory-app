const Animal = require("../models/Animal");
const Category = require("../models/Category");
const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
	// GET all details of animals and categories
	// const [getAllAnimals, getAllCategories] = await Promise.all([
	// 	Animal.find().exec(),
	// 	Category.find().exec(),
	// ]);

	// res.render("index", {
	// 	title: "Animals Info Home Page",
	// 	animals: getAllAnimals,
	// 	categories: getAllCategories,
	// });
	res.send('Home Page')
});


exports.animal_details = asyncHandler(async (req, res, next) => {
    res.send('GET details from an animal')
})

exports.animal_list = asyncHandler(async (req, res, next) => {
    res.send('GET list of animals')
})

exports.animal_create_get = asyncHandler(async (req, res, next) => {
    res.send('GET Create Animal')
})

exports.animal_create_post = asyncHandler(async (req, res, next) => {
    res.send('POST Create Animal')
})

exports.animal_delete_get = asyncHandler(async (req, res, next) => {
    res.send('GET Delete Animal')
})

exports.animal_delete_post = asyncHandler(async (req, res, next) => {
    res.send('GET Delete Animal')
})

exports.animal_update_get = asyncHandler(async (req, res, next) => {
    res.send('GET Update Animal')
})

exports.animal_update_post = asyncHandler(async (req, res, next) => {
    res.send('POST Update Animal')
})
