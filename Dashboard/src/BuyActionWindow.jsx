import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import { jwtDecode } from "jwt-decode";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
	axios.defaults.withCredentials = true;

	const [stockQuantity, setStockQuantity] = useState("");
	const [stockPrice, setStockPrice] = useState("");
	const [error, setError] = useState("");

	// ✅ Get closeBuyWindow from context
	const { closeBuyWindow } = useContext(GeneralContext);

	const handleBuyClick = async (e) => {
		e.preventDefault(); // Prevent default link behavior
		setError(""); // Clear any previous errors

		// Convert and validate inputs
		const quantity = parseInt(stockQuantity, 10);
		const price = parseFloat(stockPrice);

		// Validation checks
		if (!quantity || isNaN(quantity) || quantity <= 0) {
			setError("Please enter a valid quantity");
			return;
		}

		if (!price || isNaN(price) || price <= 0) {
			setError("Please enter a valid price");
			return;
		}

		try {
			// Debug: Log all cookies
			// console.log("All cookies:", document.cookie);

			// Get userId from the token
			const allCookies = document.cookie.split("; ");
			// console.log("Split cookies:", allCookies);

			const tokenCookie = allCookies.find((row) => row.startsWith("token="));
			// console.log("Found token cookie:", tokenCookie);

			const token = tokenCookie?.split("=")[1];
			// console.log("Extracted token value:", token);

			if (!token) {
				setError("Authentication required. Please login again.");
				// console.error("No token found in cookies");
				window.location.href = "https://zerodha-clone-tau.vercel.app/login";
				return;
			}

			const decodedToken = jwtDecode(token);
			// console.log("Decoded token:", decodedToken);
			const userId = decodedToken?.id;
			// console.log("Extracted userId:", userId);

			if (!userId) {
				setError("Invalid session. Please login again.");
				// console.error("No userId found in token");
				window.location.href = "https://zerodha-clone-tau.vercel.app/login";
				return;
			}

			// console.log("Sending request with data:", {
			// 	name: uid,
			// 	qty: quantity,
			// 	price: price,
			// 	mode: "BUY",
			// 	userId: userId,
			// });

			const response = await axios.post(
				"https://zerodha-clone-backend-ve49.onrender.com/newOrder",
				{
					name: uid,
					qty: quantity,
					price: price,
					mode: "BUY",
					userId: userId,
				},
				{
					withCredentials: true,
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			if (response.data && response.data.success) {
				// console.log("Order placed successfully:", response.data);
				// Clear the form inputs
				// setStockQuantity("");
				// setStockPrice("");
				// Close the window
			} else {
				setError(response.data?.message || "Failed to place order");
				closeBuyWindow();
			}
		} catch (error) {
			console.error("Order placement failed:", {
				status: error.response?.status,
				data: error.response?.data,
				message: error.message,
			});

			// Handle different error cases
			if (error.response) {
				switch (error.response.status) {
					case 401:
						window.location.href = "https://zerodha-clone-tau.vercel.app/login";
						break;
					case 500:
						if (error.response.data?.error?.includes("userId")) {
							setError("Session expired. Please login again.");
							window.location.href =
								"https://zerodha-clone-tau.vercel.app/login";
						} else {
							setError("Server error. Please try again later.");
						}
						break;
					default:
						setError(
							error.response.data?.message ||
								"Failed to place order. Please try again."
						);
				}
			} else if (error.request) {
				setError("No response from server. Please check your connection.");
			} else {
				setError("Failed to send request. Please try again.");
			}
		}
	};

	const handleCancelClick = (e) => {
		e.preventDefault();
		closeBuyWindow();
	};

	return (
		<div className="floating-window-overlay" onClick={handleCancelClick}>
			<div
				className="container container-responsive floating-window"
				id="buy-window"
				draggable="true"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="regular-order inputs-responsive">
					<div className="inputs">
						<fieldset>
							<legend>Qty.</legend>
							<input
								type="number"
								name="qty"
								id="qty"
								min="1"
								onChange={(e) => setStockQuantity(e.target.value)}
								value={stockQuantity}
								placeholder="Enter quantity"
							/>
						</fieldset>
						<fieldset>
							<legend>Price</legend>
							<input
								type="number"
								name="price"
								id="price"
								min="0.01"
								step="0.05"
								onChange={(e) => setStockPrice(e.target.value)}
								value={stockPrice}
								placeholder="Enter price"
							/>
						</fieldset>
					</div>
					{error && (
						<div
							className="error-message"
							style={{ color: "red", marginTop: "10px" }}
						>
							{error}
						</div>
					)}
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
