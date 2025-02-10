import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./Orders.css";
import "./Positions.css";

const Orders = () => {
	const [allOrders, setAllOrders] = useState([]);
	useEffect(() => {
		axios.get("http://localhost:3002/getOrders").then((res) => {
			setAllOrders(res.data);
		});
	}, []);
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
// <div className="orders orders-responsive">
// 	<div className="no-orders no-orders-responsive">
// 		<p className="no-orders-text">You haven't placed any orders today</p>
// 		<Link to={"/"} className="btn btn-responsive">
// 			Get started
// 		</Link>
// 	</div>
// </div>

export default Orders;
