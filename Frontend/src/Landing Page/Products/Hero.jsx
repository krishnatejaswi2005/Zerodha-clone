import React from "react";

function Hero() {
	return (
		<div className="container border-bottom border-dark-subtle mb-5 pb-5">
			<div className="row text-center mt-4 mb-3 pt-5">
				<h1 className="fs-3">Technology</h1>
				<h6 className="text-muted px-3">
					Sleek, modern, and intuitive trading platforms
				</h6>
				<p style={{ fontSize: "0.85rem" }}>
					Check out our&nbsp;&nbsp;
					<a href="" className="text-decoration-none">
						investment offerings
						<i className="fa-solid fa-arrow-right ms-2"></i>
					</a>
				</p>
			</div>
		</div>
	);
}

export default Hero;
