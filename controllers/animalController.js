const Animal = require("../models/Animal");
const Category = require("../models/Category");
const asyncHandler = require("express-async-handler");

exports.index =  asyncHandler(async (req, res, next) => {
	const [getAllAnimals, getAllCategories] = await Promise.all([
		Animal.find().sort('name').populate('category').exec(),
		Category.find().exec(),
	]);

	res.render("animal", {
		title: 'Animal List',
		animals: getAllAnimals,
		categories: getAllCategories,
	});
});

exports.animal_list = asyncHandler(async (req, res, next) => {
	res.send('GET all animals from a category')
});


exports.animal_details = asyncHandler(async (req, res, next) => {
    res.send('GET details from an animal')
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
