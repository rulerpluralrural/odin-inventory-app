const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Please provide a name"],
		maxLength: 50,
	},
	description: {
		type: String,
		required: [true, "Please provide a description"],
		maxLength: 500,
	},
});

CategorySchema.virtual("url").get(function () {
	return `/category/${this._id}`;
});

module.exports = mongoose.model("Category", CategorySchema);
