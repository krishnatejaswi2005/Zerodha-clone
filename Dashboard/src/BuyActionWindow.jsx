import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";

import { jwtDecode } from "jwt-decode";
import { useCookies } from "react-cookie";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
	const [stockQuantity, setStockQuantity] = useState();
	const [stockPrice, setStockPrice] = useState(0.0);

	const [cookies, removeCookie] = useCookies(["token"]);
	const token = cookies.token;
	const decodedToken = jwtDecode(token, { complete: true });

	// ✅ Get closeBuyWindow from context
	const { closeBuyWindow } = useContext(GeneralContext);

	const handleBuyClick = async () => {
		try {
			await axios.post("http://localhost:3002/newOrder", {
				name: uid,
				qty: stockQuantity,
				price: stockPrice,
				mode: "BUY",
				userId: decodedToken.id,
			});
		} catch (error) {
			console.error("Error placing order:", error);
		}

		// ✅ Close the buy window correctly
		closeBuyWindow();
	};

	const handleCancelClick = () => {
		// ✅ Close the buy window correctly
		closeBuyWindow();
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
						<Link className="btn btn-blue" onClick={handleBuyClick}>
							Buy
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

export default BuyActionWindow;
