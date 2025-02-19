require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const cookieParser = require("cookie-parser");
const authRoute = require("./routes/AuthRoute");

const cors = require("cors");

const bodyParser = require("body-parser");

const { HoldingsModel } = require("../Backend/model/HoldingsModel");
const { PositionsModel } = require("../Backend/model//PositionsModel");
const { OrdersModel } = require("../Backend/model/OrdersModel");

const User = require("../Backend/model/UserModel");

const PORT = process.env.PORT || 3002;
const URL = process.env.MONGO_URL;

const app = express();

const allowedOrigins = ["http://localhost:5173"];

app.use(
	cors({
		origin: allowedOrigins,
		credentials: true,
	})
);
app.use(bodyParser.json());

app.use(cookieParser());

app.use("/", authRoute);

app.get("/getHoldings", async (req, res) => {
	const holdings = await HoldingsModel.find({});
	res.json(holdings);
});
app.get("/getPositions", async (req, res) => {
	const positions = await PositionsModel.find({});
	res.json(positions);
});
app.get("/getOrders", async (req, res) => {
	const userId = req.query.userId;

	const orders = await OrdersModel.find({ userId });
	res.json(orders);
});

app.post("/newOrder", async (req, res) => {
	try {
		const order = new OrdersModel({
			name: req.body.name,
			qty: req.body.qty,
			price: req.body.price,
			mode: req.body.mode,
			userId: req.body.userId, // Get the userId from the authenticated user
		});

		const savedOrder = await order.save();

		res
			.status(201)
			.json({ message: "Order saved successfully", order: savedOrder });
	} catch (error) {
		console.error("Error saving order:", error);
		res.status(500).json({ error: error.message });
	}
});

app.get("/getUsername/:id", async (req, res) => {
	const result = await User.findById(req.params.id);
	res.json(result);
});

app.listen(PORT, () => {
	console.log("Server is running");

	mongoose.connect(URL);
	console.log("DB Connected");
});
