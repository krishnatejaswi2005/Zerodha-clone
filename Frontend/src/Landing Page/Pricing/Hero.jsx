import React from "react";

function Hero() {
	return (
		<div className="container  pb-2">
			{/* Header Section */}
			<div className="row text-center mt-4 mb-5 pb-5 pt-5 border-bottom border-dark-subtle">
				<h1 className="fs-1 mt-3">Pricing</h1>
				<h6 className="text-muted mt-3 mb-5 px-3">
					Free equity investments and flat ₹20 intraday and F&O trades
				</h6>
			</div>

			{/* Pricing Cards Section */}
			<div className="row text-center mt-4 mb-2">
				<div className="col-12 col-md-4 px-4 mb-4">
					<img
						src="media/images/pricingEquity.svg"
						alt="Pricing Image"
						className="img-fluid"
						style={{ maxWidth: "13rem" }}
					/>
					<h1 className="fs-4 mt-3">Free equity delivery</h1>
					<p className="text-muted mt-3 lh-base" style={{ fontSize: "0.9rem" }}>
						All equity delivery investments (NSE, BSE), are absolutely free — ₹O
						brokerage.
					</p>
				</div>
				<div className="col-12 col-md-4 px-4 mb-4">
					<img
						src="media/images/intradayTrades.svg"
						alt="Pricing Image"
						className="img-fluid"
						style={{ maxWidth: "13rem" }}
					/>
					<h1 className="fs-4 mt-3">Intraday and F&O trades</h1>
					<p className="text-muted mt-3 lh-base" style={{ fontSize: "0.9rem" }}>
						Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
						intraday trades across equity, currency, and commodity trades.
					</p>
				</div>
				<div className="col-12 col-md-4 px-4 mb-4">
					<img
						src="media/images/pricingEquity.svg"
						alt="Pricing Image"
						className="img-fluid"
						style={{ maxWidth: "13rem" }}
					/>
					<h1 className="fs-4 mt-3">Free direct MF</h1>
					<p className="text-muted mt-3 lh-base" style={{ fontSize: "0.9rem" }}>
						All direct mutual fund investments are absolutely free - ₹ 0
						commissions & DP charges.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Hero;
