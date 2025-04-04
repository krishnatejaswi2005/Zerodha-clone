import React from "react";
import "./Summary.css";

const Summary = ({ username }) => {
	return (
		<>
			<div className="username username-responsive">
				<h6>Hi, {username}!</h6>
				<hr className="divider" />
			</div>

			<div className="section section-responsive">
				<span>
					<p>Equity</p>
				</span>

				<div className="data data-responsive">
					<div className="first first-responsive">
						<h3>3.74k</h3>
						<p>Margin available</p>
					</div>
					<hr />

					<div className="second second-responsive">
						<p>
							Margins used <span>0</span>
						</p>
						<p>
							Opening balance <span>3.74k</span>
						</p>
					</div>
				</div>
				<hr className="divider" />
			</div>

			<div className="section section-responsive">
				<span>
					<p>Holdings (13)</p>
				</span>

				<div className="data data-responsive">
					<div className="first first-responsive">
						<h3 className="profit">
							1.55k <small>+5.20%</small>
						</h3>
						<p>P&L</p>
					</div>
					<hr />

					<div className="second second-responsive">
						<p>
							Current Value <span>31.43k</span>
						</p>
						<p>
							Investment <span>29.88k</span>
						</p>
					</div>
				</div>
				<hr className="divider" />
			</div>
		</>
	);
};

export default Summary;
