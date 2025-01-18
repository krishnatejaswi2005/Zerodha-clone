import React from "react";

function Pricing() {
	return (
		<div className="container mt-5 pt-5 align-middle">
			<div className="row pt-5">
				{/* Text Section */}
				<div className="col-12 col-md-6 mb-4 mb-md-0">
					<h2 className="fs-2 fw-semibold text-center text-md-start">
						Unbeatable pricing
					</h2>
					<p className="fs-6 fw-light text-muted mt-4 text-center text-md-start">
						We pioneered the concept of discount broking and price transparency
						in India. Flat fees and no hidden charges.
					</p>
					<div className="text-center text-md-start mt-2">
						<a href="#" style={{ textDecoration: "none" }}>
							See pricing
							<i className="fa-solid fa-arrow-right ms-2"></i>
						</a>
					</div>
				</div>

				{/* Spacer Section for Larger Screens */}
				<div className="d-none d-md-block col-md-1"></div>

				{/* Pricing Cards Section */}
				<div className="col-12 col-md-5">
					<div className="row g-3">
						{/* Card 1 */}
						<div className="col-12 col-md-6 border pt-3 ps-4 text-center text-md-start">
							<h2 className="fw-semibold fs-2">₹0</h2>
							<p className="fs-6 fw-light text-muted">
								Free equity delivery and direct mutual funds
							</p>
						</div>

						{/* Card 2 */}
						<div className="col-12 col-md-6 border pt-3 ps-4 text-center text-md-start">
							<h2 className="fw-semibold fs-2">₹20</h2>
							<p className="fs-6 fw-light text-muted">Intraday and F&O</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Pricing;
