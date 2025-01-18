import React from "react";

function LeftSection({ imgURL, productName, productDescription }) {
	return (
		<div className="container">
			<div className="row mt-5 pt-4 align-items-center">
				{/* Image Section */}
				<div className="col-12 col-md-6 text-center mb-4 mb-md-0">
					<img
						src={imgURL}
						alt="Image"
						className="img-fluid"
						style={{ maxWidth: "100%", height: "auto" }}
					/>
				</div>

				{/* Text Section */}
				<div className="col-12 col-md-6 px-4 px-md-5">
					<h1 className="fs-3">{productName}</h1>
					<p className="text-muted" style={{ fontSize: "0.9rem" }}>
						{productDescription}
					</p>

					{/* Links */}
					<div className="d-flex flex-wrap align-items-center mb-3">
						<a
							href=""
							className="text-decoration-none me-3"
							style={{ fontSize: "0.9rem" }}
						>
							Try Demo
							<i className="fa-solid fa-arrow-right ms-2"></i>
						</a>
						<a
							href=""
							className="text-decoration-none"
							style={{ fontSize: "0.9rem" }}
						>
							Learn More
							<i className="fa-solid fa-arrow-right mt-1ms-2"></i>
						</a>
					</div>

					{/* App Links */}
					<div className="appLinks d-flex flex-wrap">
						<a href="">
							<img
								src="media/images/googlePlayBadge.svg"
								alt="Google play badge"
								className="img-fluid me-3 mb-3"
								style={{ maxWidth: "150px" }}
							/>
						</a>
						<a href="">
							<img
								src="media/images/appstoreBadge.svg"
								alt="App store badge"
								className="img-fluid"
								style={{ maxWidth: "150px" }}
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LeftSection;
