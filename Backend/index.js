require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 3002;
const URL = process.env.MONGO_URL;

app.listen(3002, () => {
	console.log("Server is running");

	mongoose.connect(URL);
	console.log("DB Connected");
});
