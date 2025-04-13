import React, { useState, useEffect } from "react";

import axios, { all } from "axios";

import "./Holdings.css";
import { VerticalBarChart } from "./VerticalBarChart";

const Holdings = () => {
	axios.defaults.withCredentials = true;

	const [allHoldings, setAllHoldings] = useState([]);

	const labels = allHoldings.map((subArray) => subArray["name"]);
	const data = {
		labels,
		datasets: [
			{
				label: "Stock Price",
				data: allHoldings.map((stock) => stock.price),
				backgroundColor: "rgba(255, 99, 132, 0.5)",
			},
		],
	};

	useEffect(() => {
		axios
			.get("https://zerodha-clone-backend-ve49.onrender.com/getHoldings")
			.then((res) => {
				setAllHoldings(res.data);
			});
	}, []);
	return (
		<>
			<h3 className="title">Holdings ({allHoldings.length})</h3>

			<div className="order-table order-table-responsive">
				<table>
					<thead>
						<tr>
							<th>Instrument</th>
							<th>Qty.</th>
							<th>Avg. cost</th>
							<th>LTP</th>
							<th>Cur. val</th>
							<th>P&L</th>
							<th>Net chg.</th>
							<th>Day chg.</th>
						</tr>
					</thead>

					<tbody>
						{allHoldings.map((stock, index) => {
							const currValue = stock.qty * stock.price;
							const isprofit = currValue - stock.avg * stock.qty >= 0;
							const profClass = isprofit ? "profit" : "loss";
							const dayClass = stock.isLoss ? "loss" : "profit";

							return (
								<tr key={index}>
									<td>{stock.name}</td>
									<td>{stock.qty}</td>
									<td>{stock.avg.toFixed(2)}</td>
									<td>{stock.price.toFixed(2)}</td>
									<td>{currValue.toFixed(2)}</td>
									<td className={profClass}>
										{(currValue - stock.avg * stock.qty).toFixed(2)}
									</td>
									<td className={profClass}>{stock.net}</td>
									<td className={dayClass}>{stock.day}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>

			<div className="row row-responsive">
				<div className="col">
					<h5>
						29,875.<span>55</span>
					</h5>
					<p>Total investment</p>
				</div>
				<div className="col">
					<h5>
						31,428.<span>95</span>
					</h5>
					<p>Current value</p>
				</div>
				<div className="col">
					<h5>1,553.40 (+5.20%)</h5>
					<p>P&L</p>
				</div>
			</div>
			<VerticalBarChart data={data} />
		</>
	);
};

export default Holdings;
