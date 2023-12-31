require("dotenv").config();
const path = require("path");
const { errorHandler } = require("./middleware/error-handler");

const express = require("express");
const app = express();

// connectDB
const connectDB = require("./database/connect");

// Routers
const indexRouter = require("./routes");
const animalRouter = require("./routes/animal");
const categoryRouter = require("./routes/category");

// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));	
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", indexRouter);
app.use("/", animalRouter);
app.use("/", categoryRouter);

// Error Handler
app.use(errorHandler);

const port = process.env.PORT || 8000;

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
		app.listen(port, () =>
			console.log(`Server is listening on port ${port}...`),
		);
	} catch (error) {
		console.log(error);
	}
};

start();
