import React from "react";

function Team() {
	return (
		<div className="container">
			<div
				className="row border-top border-dark-subtle text-muted lh-lg mb-5"
				style={{ fontSize: "0.9rem" }}
			>
				{/* Image Section */}
				<div className="col-12 col-md-4 mt-5 text-center pt-4">
					<img
						src="media/images/nithinKamath.jpg"
						alt="Nithin Kamath"
						style={{ width: "60%", borderRadius: "100%" }}
						className="img-fluid"
					/>
					<h5 className="mt-3">Nithin Kamath</h5>
					<p>Founder, CEO</p>
				</div>

				{/* Text Section */}
				<div className="col-12 col-md-8 mt-md-5 mt-3 px-4 pt-md-4">
					<p>
						Nithin bootstrapped and founded Zerodha in 2010 to overcome the
						hurdles he faced during his decade-long stint as a trader. Today,
						Zerodha has changed the landscape of the Indian broking industry.
					</p>
					<p>
						He is a member of the SEBI Secondary Market Advisory Committee
						(SMAC) and the Market Data Advisory Committee (MDAC).
					</p>
					<p>Playing basketball is his zen.</p>
					<p>
						Connect on
						<a href="" style={{ textDecoration: "none" }}>
							&nbsp;&nbsp;Homepage&nbsp;&nbsp;
						</a>
						/
						<a href="" style={{ textDecoration: "none" }}>
							&nbsp;&nbsp;Trading&nbsp;QnA&nbsp;&nbsp;
						</a>
						/
						<a href="" style={{ textDecoration: "none" }}>
							&nbsp;&nbsp;Twitter
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Team;
