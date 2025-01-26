import React from "react";
import { Link } from "react-router-dom";

import "./Orders.css";

const Orders = () => {
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
};

export default Orders;
