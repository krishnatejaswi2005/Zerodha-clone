import React from "react";

function RightSection({ imgURL, productName, productDescription }) {
	return (
		<div className="container">
			<div className="row mt-5 pt-5 align-items-center">
				{/* Text Section */}
				<div className="col-12 col-md-6 px-4 px-md-5 order-2 order-md-1">
					<h1 className="fs-3">{productName}</h1>
					<p className="text-muted " style={{ fontSize: "0.9rem" }}>
						{productDescription}
					</p>
					<a
						href=""
						className="text-decoration-none "
						style={{ fontSize: "0.9rem" }}
					>
						Learn More
						<i className="fa-solid fa-arrow-right ms-2"></i>
					</a>
				</div>

				{/* Image Section */}
				<div className="col-12 col-md-6 text-center order-1 order-md-2 mb-4 mb-md-0">
					<img
						src={imgURL}
						alt="Product"
						className="img-fluid"
						style={{ maxWidth: "100%", height: "auto" }}
					/>
				</div>
			</div>
		</div>
	);
}

export default RightSection;
