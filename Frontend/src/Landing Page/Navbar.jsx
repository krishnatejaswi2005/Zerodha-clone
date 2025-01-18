import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container-fluid d-flex align-items-center justify-content-between">
				<Link className="navbar-brand  " to="/">
					<img
						src="media/images/logo.svg" // Ensure path is correct
						alt="Logo"
						className="logo img-fluid ms-2 ms-md-5 ps-md-4"
					/>
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav ms-auto me-5 pe-5">
						<Link className="nav-link active" to="/signup">
							Signup
						</Link>
						<Link className="nav-link active" to="/about">
							About
						</Link>
						<Link className="nav-link active" to="/products">
							Product
						</Link>
						<Link className="nav-link active" to="/pricing">
							Pricing
						</Link>
						<Link className="nav-link active" to="/support">
							Support
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
