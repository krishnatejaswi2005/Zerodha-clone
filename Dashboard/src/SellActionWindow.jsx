import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const SellActionWindow = ({ uid }) => {
	const [stockQuantity, setStockQuantity] = useState();
	const [stockPrice, setStockPrice] = useState(0.0);

	// ✅ Get closeBuyWindow from context
	const { closeSellWindow } = useContext(GeneralContext);

	const handleSellClick = async () => {
		try {
			await axios.post("http://localhost:3002/newOrder", {
				name: uid,
				qty: stockQuantity,
				price: stockPrice,
				mode: "SELL",
			});
		} catch (error) {
			console.error("Error placing order:", error);
		}

		// ✅ Close the buy window correctly
		closeSellWindow();
	};

	const handleCancelClick = () => {
		// ✅ Close the buy window correctly
		closeSellWindow();
	};

	return (
		<div className="floating-window-overlay">
			<div
				className="container container-responsive floating-window"
				id="buy-window"
				draggable="true"
			>
				<div className="regular-order inputs-responsive">
					<div className="inputs">
						<fieldset>
							<legend>Qty.</legend>
							<input
								type="number"
								name="qty"
								id="qty"
								onChange={(e) => setStockQuantity(e.target.value)}
								value={stockQuantity}
							/>
						</fieldset>
						<fieldset>
							<legend>Price</legend>
							<input
								type="number"
								name="price"
								id="price"
								step="0.05"
								onChange={(e) => setStockPrice(e.target.value)}
								value={stockPrice}
							/>
						</fieldset>
					</div>
				</div>

				<div className="buttons buttons-responsive">
					<span>Margin required ₹140.65</span>
					<div>
						<Link className="btn btn-red" onClick={handleSellClick}>
							Sell
						</Link>
						<Link to="" className="btn btn-grey" onClick={handleCancelClick}>
							Cancel
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SellActionWindow;
