import React from "react";

function Hero() {
	return (
		<div
			className="container-fluid"
			style={{ backgroundColor: "#387cd4", color: "white" }}
			id="supportHero"
		>
			<div
				className="row px-3 py-5 gap-5"
				style={{
					backgroundColor: "#387cd4",
					margin: "0 auto",
					maxWidth: "1200px", // Ensures central alignment and limits row width
				}}
			>
				{/* Left Section */}
				<div
					className="col-12 col-md-6"
					style={{
						paddingLeft: "20px",
						paddingRight: "20px",
					}}
				>
					<h6 className="mb-3 pb-4">Support Portal</h6>
					<h6 className="fs-5 lh-base">
						Search for an answer or browse help topics to create a ticket
					</h6>
					<input
						type="text"
						id="search"
						className="form-control my-3"
						placeholder="Eg: how do I activate F&O, why is my order getting rejected."
					/>
					<div className="d-flex flex-wrap">
						<a href="#" className="me-3 mb-2  text-light">
							Track account opening
						</a>
						<a href="#" className="me-3 mb-2  text-light">
							Track segment activation
						</a>
						<a href="#" className="me-3 mb-2  text-light">
							Intraday margins
						</a>
						<a href="#" className="me-3 mb-2  text-light">
							Kite user manual
						</a>
					</div>
				</div>

				{/* Right Section */}
				<div
					className="col-12 col-md-5"
					style={{
						paddingLeft: "20px",
						paddingRight: "20px",
					}}
				>
					<p className="text-md-end text-center">
						<a href="#" className="d-none d-md-block  text-light">
							Track Tickets
						</a>
					</p>

					<h5 className=" ms-lg-5 pt-md-4">Featured</h5>
					<ol className="ms-lg-5 ps-lg-4">
						<li>
							<a href="#" className=" text-light">
								Current Takeovers and Delisting - January 2024
							</a>
						</li>
						<li>
							<a href="#" className=" text-light">
								Latest Intraday leverages - MS & CO
							</a>
						</li>
					</ol>
				</div>
			</div>
		</div>
	);
}

export default Hero;
