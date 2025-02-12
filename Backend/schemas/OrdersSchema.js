const { Schema, Types } = require("mongoose");

const OrdersSchema = new Schema({
	name: String,
	qty: Number,
	price: Number,
	mode: String,
	userId: {
		type: Types.ObjectId,
		ref: "User",
		required: true,
	},
});

module.exports = { OrdersSchema };
