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

const PORT = process.env.PORT || 3002;
const URL = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(cookieParser());

// app.get("/addPositions", (req, res) => {

// 	let data = [
// 		{
// 			product: "CNC",
// 			name: "EVEREADY",
// 			qty: 2,
// 			avg: 316.27,
// 			price: 312.35,
// 			net: "+0.58%",
// 			day: "-1.24%",
// 			isLoss: true,
// 		},
// 		{
// 			product: "CNC",
// 			name: "JUBLFOOD",
// 			qty: 1,
// 			avg: 3124.75,
// 			price: 3082.65,
// 			net: "+10.04%",
// 			day: "-1.35%",
// 			isLoss: true,
// 		},
// 	];
// 	data.forEach((d) => {
// 		let position = new PositionsModel({
// 			product: d.product,
// 			name: d.name,
// 			qty: d.qty,
// 			avg: d.avg,
// 			price: d.price,
// 			net: d.net,
// 			day: d.day,
// 			isLoss: d.isLoss,
// 		});
// 		position.save();
// 	});
// 	res.send("Data Added");
// });

// app.get("/addHoldings", (req, res) => {
// 	let data = [
// 		{
// 			name: "BHARTIARTL",
// 			qty: 2,
// 			avg: 538.05,
// 			price: 541.15,
// 			net: "+0.58%",
// 			day: "+2.99%",
// 		},
// 		{
// 			name: "HDFCBANK",
// 			qty: 2,
// 			avg: 1383.4,
// 			price: 1522.35,
// 			net: "+10.04%",
// 			day: "+0.11%",
// 		},
// 		{
// 			name: "HINDUNILVR",
// 			qty: 1,
// 			avg: 2335.85,
// 			price: 2417.4,
// 			net: "+3.49%",
// 			day: "+0.21%",
// 		},
// 		{
// 			name: "INFY",
// 			qty: 1,
// 			avg: 1350.5,
// 			price: 1555.45,
// 			net: "+15.18%",
// 			day: "-1.60%",
// 			isLoss: true,
// 		},
// 		{
// 			name: "ITC",
// 			qty: 5,
// 			avg: 202.0,
// 			price: 207.9,
// 			net: "+2.92%",
// 			day: "+0.80%",
// 		},
// 		{
// 			name: "KPITTECH",
// 			qty: 5,
// 			avg: 250.3,
// 			price: 266.45,
// 			net: "+6.45%",
// 			day: "+3.54%",
// 		},
// 		{
// 			name: "M&M",
// 			qty: 2,
// 			avg: 809.9,
// 			price: 779.8,
// 			net: "-3.72%",
// 			day: "-0.01%",
// 			isLoss: true,
// 		},
// 		{
// 			name: "RELIANCE",
// 			qty: 1,
// 			avg: 2193.7,
// 			price: 2112.4,
// 			net: "-3.71%",
// 			day: "+1.44%",
// 		},
// 		{
// 			name: "SBIN",
// 			qty: 4,
// 			avg: 324.35,
// 			price: 430.2,
// 			net: "+32.63%",
// 			day: "-0.34%",
// 			isLoss: true,
// 		},
// 		{
// 			name: "SGBMAY29",
// 			qty: 2,
// 			avg: 4727.0,
// 			price: 4719.0,
// 			net: "-0.17%",
// 			day: "+0.15%",
// 		},
// 		{
// 			name: "TATAPOWER",
// 			qty: 5,
// 			avg: 104.2,
// 			price: 124.15,
// 			net: "+19.15%",
// 			day: "-0.24%",
// 			isLoss: true,
// 		},
// 		{
// 			name: "TCS",
// 			qty: 1,
// 			avg: 3041.7,
// 			price: 3194.8,
// 			net: "+5.03%",
// 			day: "-0.25%",
// 			isLoss: true,
// 		},
// 		{
// 			name: "WIPRO",
// 			qty: 4,
// 			avg: 489.3,
// 			price: 577.75,
// 			net: "+18.08%",
// 			day: "+0.32%",
// 		},
// 	];
// 	data.forEach((d) => {
// 		let holding = new HoldingsModel({
// 			name: d.name,
// 			qty: d.qty,
// 			avg: d.avg,
// 			price: d.price,
// 			net: d.net,
// 			day: d.day,
// 		});
// 		holding.save();
// 	});
// 	res.send("Data Added");
// });

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
	const orders = await OrdersModel.find({});
	res.json(orders);
});

app.post("/newOrder", async (req, res) => {
	try {
		const order = new OrdersModel({
			name: req.body.name,
			qty: req.body.qty,
			price: req.body.price,
			mode: req.body.mode,
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

app.listen(PORT, () => {
	console.log("Server is running");

	mongoose.connect(URL);
	console.log("DB Connected");
});
