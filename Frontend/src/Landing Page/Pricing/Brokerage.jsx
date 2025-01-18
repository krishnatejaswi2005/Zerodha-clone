import React from "react";

function Brokerage() {
	return (
		<div className="container border-top pt-5 border-dark-subtle">
			<div className="row mt-4 justify-content-center">
				{/* Left Section */}
				<div className="col-12 col-md-7 text-center mx-auto">
					<a href="#" className="text-decoration-none">
						<h5>Brokerage calculator</h5>
					</a>
					<ul
						className="text-start text-muted mt-4 mb-5"
						style={{
							fontSize: "0.8rem",
							lineHeight: "1.8",
						}}
					>
						<li>
							Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
							GST per order.
						</li>
						<li>Digital contract notes will be sent via e-mail.</li>
						<li>
							Physical copies of contract notes, if required, shall be charged
							₹20 per contract note. Courier charges apply.
						</li>
						<li>
							For NRI account (non-PIS), 0.5% or ₹100 per executed order for
							equity (whichever is lower).
						</li>
						<li>
							For NRI account (PIS), 0.5% or ₹200 per executed order for equity
							(whichever is lower).
						</li>
						<li>
							If the account is in debit balance, any order placed will be
							charged ₹40 per executed order instead of ₹20 per executed order.
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Brokerage;
