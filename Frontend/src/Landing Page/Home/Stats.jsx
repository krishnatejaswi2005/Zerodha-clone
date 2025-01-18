import React from "react";

function Stats() {
	return (
		<div className="container mt-5 pt-5">
			<div className="row">
				{/* Text Section */}
				<div className="col-12 col-md-6 pe-md-5 mb-4 mb-md-0">
					<h2 className="fs-2 fw-semibold text-center text-md-start">
						Trust with confidence
					</h2>
					<p className="mt-5 fs-5 mb-2 text-center text-md-start">
						Customer-first always
					</p>
					<p className="fs-6 fw-light text-muted text-center text-md-start">
						That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores
						worth of equity investments.
					</p>
					<p className="mt-3 fs-5 mb-2 text-center text-md-start">
						No spam or gimmicks
					</p>
					<p className="fs-6 fw-light text-muted text-center text-md-start">
						No gimmicks, spam, "gamification", or annoying push notifications.
						High quality apps that you use at your pace, the way you like.
					</p>
					<p className="mt-3 fs-5 mb-2 text-center text-md-start">
						The Zerodha universe
					</p>
					<p className="fs-6 fw-light text-muted text-center text-md-start">
						Not just an app, but a whole ecosystem. Our investments in 30+
						fintech startups offer you tailored services specific to your needs.
					</p>
					<p className="mt-3 fs-5 mb-2 text-center text-md-start">
						Do better with money
					</p>
					<p className="fs-6 fw-light text-muted text-center text-md-start">
						With initiatives like Nudge and Kill Switch, we don't just
						facilitate transactions, but actively help you do better with your
						money.
					</p>
				</div>

				{/* Image and Links Section */}
				<div className="col-12 col-md-6 ps-md-5">
					<div className="text-center">
						<img
							src="media/images/ecosystem.png"
							alt="Stats Image"
							className="img-fluid w-75 mb-4"
						/>
					</div>
					<div className="d-flex justify-content-center flex-column flex-md-row align-items-center">
						<a
							href=""
							style={{ textDecoration: "none" }}
							className="me-0 me-md-5 mb-3 mb-md-0"
						>
							Explore our products
							<i className="fa-solid fa-arrow-right ms-2"></i>
						</a>
						<a href="" style={{ textDecoration: "none" }}>
							Try kite demo
							<i className="fa-solid fa-arrow-right ms-2"></i>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Stats;
