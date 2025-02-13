require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/AuthRoute");
const cors = require("cors");
const bodyParser = require("body-parser");

const { HoldingsModel } = require("../Backend/model/HoldingsModel");
const { PositionsModel } = require("../Backend/model/PositionsModel");
const { OrdersModel } = require("../Backend/model/OrdersModel");
const User = require("../Backend/model/UserModel");

const PORT = process.env.PORT || 3002;
const URL = process.env.MONGO_URL;

const app = express();

// ✅ CORS Middleware
const corsOptions = {
	origin: [
		"https://zerodha-clone-tau.vercel.app",
		"https://zerodha-clonedashboard.vercel.app",
	],
	methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
	credentials: true,
};
app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // Preflight requests

app.use(bodyParser.json());
app.use(cookieParser());

// ✅ Global Middleware to Set Headers
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", corsOptions.origin);
	res.header(
		"Access-Control-Allow-Methods",
		"GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS"
	);
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept, Authorization"
	);
	res.header("Access-Control-Allow-Credentials", "true");
	next();
});

app.use("/", authRoute);

app.get("/getHoldings", async (req, res) => {
	const holdings = await HoldingsModel.find({});
	res.status(200).json(holdings);
});

app.get("/getPositions", async (req, res) => {
	const positions = await PositionsModel.find({});
	res.status(200).json(positions);
});

app.get("/getOrders", async (req, res) => {
	const userId = req.query.userId;
	const orders = await OrdersModel.find({ userId });
	res.status(200).json(orders);
});

app.post("/newOrder", async (req, res) => {
	try {
		const order = new OrdersModel({
			name: req.body.name,
			qty: req.body.qty,
			price: req.body.price,
			mode: req.body.mode,
			userId: req.body.userId,
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
	res.status(200).json(result);
});

// ✅ Ensure Database Connection Before Starting Server
mongoose
	.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log("DB Connected");
		app.listen(PORT, () => {
			console.log(`Server running on port ${PORT}`);
		});
	})
	.catch((err) => {
		console.error("DB Connection Error:", err);
	});
