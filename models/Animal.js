const mongoose = require("mongoose");

const AnimalSchema = new mongoose.Schema(
	{
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
		status: {
			type: String,
			enum: ["least concern", "vulnerable", "endangered", "extinct"],
			default: "least concern",
		},
		imgUrl: {
			type: String,
			unique: true,
		},
		category: {
			type: mongoose.Types.ObjectId,
			ref: "Category",
			required: [true, "Please provide a category"],
		},
	},
	{ timestamps: true }
);

// AnimalSchema.path("imageURL").validate((val) => {
// 	urlRegex =
// 		/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
// 	return urlRegex.test(val);
// }, "Invalid URL");

AnimalSchema.virtual("url").get(function () {
	return `animals/${this._id}`;
});

module.exports = mongoose.model("Animal", AnimalSchema);
