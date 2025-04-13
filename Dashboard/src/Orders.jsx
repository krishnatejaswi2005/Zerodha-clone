import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { jwtDecode } from "jwt-decode";
import { useCookies } from "react-cookie";

import "./Orders.css";
import "./Positions.css";

const Orders = () => {
	axios.defaults.withCredentials = true;

	const [cookies, removeCookie] = useCookies(["token"]);
	const [allOrders, setAllOrders] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (!cookies.token) {
			setError("No token found. Please login again.");
			return;
		}

		try {
			const decodedToken = jwtDecode(cookies.token);
			axios
				.get(`http://localhost:3002/getOrders?userId=${decodedToken.id}`)
				.then((res) => {
					setAllOrders(res.data);
				})
				.catch((err) => {
					setError("Failed to fetch orders. Please try again later.");
					console.error("Error fetching orders:", err);
				});
		} catch (err) {
			setError("Invalid token. Please login again.");
			console.error("Token decoding error:", err);
		}
	}, [cookies.token]);

	if (error) {
		return (
			<div className="orders orders-responsive">
				<div className="no-orders no-orders-responsive">
					<p className="no-orders-text">{error}</p>
					<Link to={"/login"} className="btn btn-responsive">
						Login Again
					</Link>
				</div>
			</div>
		);
	}

	if (allOrders.length === 0) {
		return (
			<div className="orders orders-responsive">
				<div className="no-orders no-orders-responsive">
					<p className="no-orders-text">You haven't placed any orders today</p>
					<Link to={"/"} className="btn btn-responsive">
						Get started
					</Link>
				</div>
			</div>
		);
	}

	return (
		<>
			<h3 className="title">Orders ({allOrders.length})</h3>

			<div className="order-table order-table-responsive">
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Qty.</th>
							<th>Price</th>
							<th>Mode</th>
						</tr>
					</thead>

					<tbody>
						{allOrders.map((stock, index) => {
							return (
								<tr key={index}>
									<td>{stock.name}</td>
									<td>{stock.qty}</td>
									<td>{stock.price}</td>
									<td>{stock.mode}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default Orders;
