import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
	return (
		<div className="container w-100 mx-auto mb-5 pb-4 mt-5 pt-4">
			<div className="row text-center">
				<div className="col ">
					<h1 className="mt-4 fs-1 fw-semibold">Open a Zerodha account</h1>
					<p className="fw-light text-muted">
						Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
						F&O trades.
					</p>
					<Link to="/signup">
						<button type="button" className="btn btn-primary px-5 py-2">
							Sign up Now
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default OpenAccount;
