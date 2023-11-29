require("dotenv").config();

const connectDB = require("./database/connect");
const Animal = require("./models/Animal");

const animalsJson = require("./animals.json");

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
		console.log("Connected!");
		await Animal.deleteMany();
		console.log("Deleted");
		await Animal.create(animalsJson);
		console.log("Success!!!");
		process.exit(0);
	} catch (err) {
		console.log(err);
		process.exit(1);
	}
};

start();
