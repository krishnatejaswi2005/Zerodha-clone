import React, { useState, useEffect } from "react";

import axios from "axios";

import "./Positions.css";

const Positions = () => {
	axios.defaults.withCredentials = true;

	const [allPositions, setAllPositions] = useState([]);
	useEffect(() => {
		axios
			.get("https://zerodha-clone-backend-ve49.onrender.com/getPositions")
			.then((res) => {
				setAllPositions(res.data);
			});
	}, []);

	return (
		<>
			<h3 className="title">Positions ({allPositions.length})</h3>

			<div className="order-table order-table-responsive">
				<table>
					<thead>
						<tr>
							<th>Product</th>
							<th>Instrument</th>
							<th>Qty.</th>
							<th>Avg.</th>
							<th>LTP</th>
							<th>P&L</th>
							<th>Chg.</th>
						</tr>
					</thead>

					<tbody>
						{allPositions.map((stock, index) => {
							const currValue = stock.qty * stock.price;
							const isprofit = currValue - stock.avg * stock.qty >= 0;
							const profClass = isprofit ? "profit" : "loss";
							const dayClass = stock.isLoss ? "loss" : "profit";

							return (
								<tr key={index}>
									<td>{stock.product}</td>
									<td>{stock.name}</td>
									<td>{stock.qty}</td>
									<td>{stock.avg.toFixed(2)}</td>
									<td>{stock.price.toFixed(2)}</td>
									<td className={profClass}>
										{(currValue - stock.avg * stock.qty).toFixed(2)}
									</td>
									<td className={dayClass}>{stock.day}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default Positions;
