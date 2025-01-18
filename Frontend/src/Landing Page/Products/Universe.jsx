import React from "react";

function Universe() {
	return (
		<div className="container">
			<div className="row text-center mt-5">
				{/* Title Section */}
				<div className="col-12">
					<h1 className="fs-3">The Zerodha Universe</h1>
					<p className="p-2 text-muted" style={{ fontSize: "0.8rem" }}>
						Extend your trading and investment experience even further with our
						partner platforms
					</p>
				</div>
			</div>

			{/* Partner Platforms */}
			<div className="row text-center">
				<div className="col-12 col-sm-6 col-md-4 p-4">
					<img
						src="media/images/smallcaseLogo.png"
						alt="Thematic investment platform"
						className="img-fluid"
					/>
					<p className="text-muted mt-3" style={{ fontSize: "0.8rem" }}>
						Thematic investment platform
					</p>
				</div>
				<div className="col-12 col-sm-6 col-md-4 p-4">
					<img
						src="media/images/streakLogo.png"
						style={{ width: "150px" }}
						alt="Algo & strategy platform"
						className="img-fluid"
					/>
					<p className="text-muted mt-3" style={{ fontSize: "0.8rem" }}>
						Algo & strategy platform
					</p>
				</div>
				<div className="col-12 col-sm-6 col-md-4 p-4">
					<img
						src="media/images/sensibullLogo.svg"
						style={{ width: "150px" }}
						alt="Options trading platform"
						className="img-fluid"
					/>
					<p className="text-muted mt-3" style={{ fontSize: "0.8rem" }}>
						Options trading platform
					</p>
				</div>
				<div className="col-12 col-sm-6 col-md-4 p-4">
					<img
						src="media/images/zerodhaFundhouse.png"
						style={{ width: "150px" }}
						alt="Asset management"
						className="img-fluid"
					/>
					<p className="text-muted mt-3" style={{ fontSize: "0.8rem" }}>
						Asset management
					</p>
				</div>
				<div className="col-12 col-sm-6 col-md-4 p-4">
					<img
						src="media/images/goldenpiLogo.png"
						style={{ width: "150px" }}
						alt="Bonds trading platform"
						className="img-fluid"
					/>
					<p className="text-muted mt-3" style={{ fontSize: "0.8rem" }}>
						Bonds trading platform
					</p>
				</div>
				<div className="col-12 col-sm-6 col-md-4 p-4">
					<img
						src="media/images/dittoLogo.png"
						style={{ width: "150px" }}
						alt="Insurance"
						className="img-fluid"
					/>
					<p className="text-muted mt-3" style={{ fontSize: "0.8rem" }}>
						Insurance
					</p>
				</div>
			</div>

			{/* Signup Button */}
			<div className="row">
				<div className="col-12 text-center">
					<button type="button" className="btn btn-primary mb-5">
						Signup Now
					</button>
				</div>
			</div>
		</div>
	);
}

export default Universe;
