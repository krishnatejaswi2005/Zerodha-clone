import React from "react";
function PageNotFound() {
	return (
		<div
			className="container w-100 mx-auto d-flex mb-5 justify-content-center"
			style={{ height: "80vh" }}
		>
			<div className="row  align-items-center">
				<div className="col ">
					<h1 className=" fs-1 fw-semibold">404 Page not found</h1>
					<p className="fw-light text-muted">
						Sorry, the page you are looking for does not exist.
					</p>
				</div>
			</div>
		</div>
	);
}

export default PageNotFound;
