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
	{ timestamps: true },
);

AnimalSchema.virtual("url").get(function () {
	return `/animal/${this._id}`;
});

module.exports = mongoose.model("Animal", AnimalSchema);
