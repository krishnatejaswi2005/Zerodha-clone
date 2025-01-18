import React from "react";

function Education() {
	return (
		<div className="container mt-5 pt-5">
			<div className="row">
				{/* Image Section */}
				<div className="col-12 col-md-6 mb-4 mb-md-0">
					<img
						src="media\images\education.svg"
						alt="Education Image"
						className="img-fluid"
					/>
				</div>

				{/* Text Section */}
				<div className="col-12 col-md-6">
					<h2 className="fs-2 fw-semibold pt-4 text-center text-md-start">
						Free and open market education
					</h2>
					<p className="fs-6 fw-light text-muted mt-4 pt-3 mb-1 text-center text-md-start">
						Varsity, the largest online stock market education book in the world
						covering everything from the basics to advanced trading.
					</p>
					<div className="text-center text-md-start mt-3">
						<a href="" style={{ textDecoration: "none" }}>
							Varsity
							<i className="fa-solid fa-arrow-right ms-2"></i>
						</a>
					</div>
					<p className="fs-6 fw-light text-muted mt-4 mb-1 text-center text-md-start">
						TradingQ&A, the most active trading and investment community in
						India for all your market-related queries.
					</p>
					<div className="text-center text-md-start mt-3">
						<a href="" style={{ textDecoration: "none" }}>
							Trading Q&A
							<i className="fa-solid fa-arrow-right ms-2"></i>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Education;
