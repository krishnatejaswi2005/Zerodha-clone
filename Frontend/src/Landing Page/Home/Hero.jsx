import React from "react";
import { Link } from "react-router-dom";

function Hero() {
	return (
		<div className="container w-100 mx-auto mb-5">
			<div className="row text-center">
				<div className="col ">
					<img
						src="media\images\homeHero.png"
						alt="Hero Image"
						className="w-100 "
					/>
					<h1 className="mt-4 fs-1 fw-semibold">Invest in everything</h1>
					<p className="fw-light text-muted">
						Online platform for investing in stocks, derivatives, mutual funds
						and more
					</p>
					<Link to="/signup">
						<button type="button" className="btn btn-primary px-5 py-2">
							Signup Now
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Hero;
