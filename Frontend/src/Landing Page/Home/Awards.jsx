import React from "react";

function Awards() {
	return (
		<div className="container p-2 mt-5">
			<div className="row pt-5 align-items-center">
				{/* Image Section */}
				<div className="col-12 col-md-6 text-center mb-4 mb-md-0">
					<img
						src="media/images/largestBroker.svg"
						alt="Awards Image"
						className="img-fluid"
					/>
				</div>
				{/* Text Section */}
				<div className="col-12 col-md-6 pt-3">
					<h2 className="fs-2 fw-semibold text-center text-md-start">
						Largest stock broker in India
					</h2>
					<p className="fs-6 fw-light text-muted text-center text-md-start">
						2+ million Zerodha clients contribute to over 15% of all retail
						order volumes in India daily by trading and investing in:
					</p>
					<div className="row mt-5 fs-6 fw-light text-muted">
						{/* First Column */}
						<div className="col-12 col-md-6">
							<ul>
								<li>Futures and Options</li>
								<li>Commodity derivatives</li>
								<li>Currency derivatives</li>
							</ul>
						</div>
						{/* Second Column */}
						<div className="col-12 col-md-6">
							<ul>
								<li>Stocks & IPOs</li>
								<li>Direct mutual funds</li>
								<li>Bonds and gold</li>
							</ul>
						</div>
					</div>
					{/* Press Logos */}
					<div className="text-center text-md-start mt-4">
						<img
							src="media/images/pressLogos.png"
							alt="Press Logos"
							className="img-fluid w-75"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Awards;
