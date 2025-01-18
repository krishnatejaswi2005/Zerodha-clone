import React from "react";

function Footer() {
	return (
		<footer className="bg-body-tertiary">
			<div className="container pt-5">
				<div className="row d-flex flex-wrap justify-content-between">
					{/* First Column */}
					<div className="col-12 col-md-3 mb-3">
						<img
							src="media\images\logo.svg"
							alt="Logo"
							className="logo-size mb-2"
						/>

						<p className="mt-2 mb-2" style={{ fontSize: "0.69rem" }}>
							&copy; 2010 - 2024, Not Zerodha Broking Ltd. <br />
							All rights reserved. <br />
						</p>
						<div>
							<i className="fa-brands me-2 fa-x-twitter"></i>
							<i className="fa-brands me-2 fa-square-facebook"></i>
							<i className="fa-brands me-2 fa-instagram"></i>
							<i className="fa-brands me-2 fa-linkedin"></i>
							<i className="fa-brands me-2 fa-telegram"></i>
						</div>
					</div>

					{/* Company Links Column */}
					<div className="col-12 col-md-3 mb-3">
						<p className="mb-3 mt-4">Company</p>
						<a
							href="#"
							className="text-muted resizeText d-block mb-2 text-decoration-none"
						>
							About
						</a>
						<a
							href="#"
							className="text-muted resizeText d-block mb-2 text-decoration-none"
						>
							Products
						</a>
						<a
							href="#"
							className="text-muted resizeText d-block mb-2 text-decoration-none"
						>
							Pricing
						</a>
						<a
							href="#"
							className="text-muted resizeText d-block mb-2 text-decoration-none"
						>
							Referral programme
						</a>
						<a
							href="#"
							className="text-muted resizeText d-block mb-2 text-decoration-none"
						>
							Careers
						</a>
						<a
							href="#"
							className="text-muted resizeText d-block mb-2 text-decoration-none"
						>
							Zerodha.tech
						</a>
						<a
							href="#"
							className="text-muted resizeText d-block mb-2 text-decoration-none"
						>
							Press & media
						</a>
						<a
							href="#"
							className="text-muted resizeText d-block mb-2 text-decoration-none"
						>
							Zerodha cares (CSR)
						</a>
					</div>

					{/* Support Links Column */}
					<div className="col-12 col-md-3 mb-3">
						<p className="mb-3 mt-4">Support</p>
						<a
							href="#"
							className="text-muted resizeText d-block mb-2 text-decoration-none"
						>
							Contact
						</a>
						<a
							href="#"
							className="text-muted resizeText d-block mb-2 text-decoration-none"
						>
							Support portal
						</a>
						<a
							href="#"
							className="text-muted resizeText d-block mb-2 text-decoration-none"
						>
							Z-connect blog
						</a>
						<a
							href="#"
							className="text-muted resizeText d-block mb-2 text-decoration-none"
						>
							List of charges
						</a>
						<a
							href="#"
							className="text-muted resizeText d-block mb-2 text-decoration-none"
						>
							Downloads & resources
						</a>
					</div>

					{/* Account Links Column */}
					<div className="col-12 col-md-3 mb-3">
						<p className="mb-3 mt-4">Account</p>
						<a
							href="#"
							className="text-muted resizeText d-block mb-2 text-decoration-none"
						>
							Open an account
						</a>
						<a
							href="#"
							className="text-muted resizeText d-block mb-2 text-decoration-none"
						>
							Fund transfer
						</a>
						<a
							href="#"
							className="text-muted resizeText d-block mb-2 text-decoration-none"
						>
							60 day challenge
						</a>
					</div>
				</div>

				{/* Footer Text Information */}
				<div className="d-none d-md-block">
					<p className="text-muted resizeText mt-5">
						Zerodha Broking Ltd.: Member of NSE & BSE - SEBI Registration no. :
						INZ000031633 CDSL: Depository services through Zerodha Securities
						Pvt. Ltd. - SEBI Registration no. : IN-DP-100-2015 Commodity Trading
						through Zerodha Commodities Pvt. Ltd. MCX: 46025 - SEBI Registration
						no. : INZ000038238 Registered Address: Zerodha Broking Ltd., #153/
						154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P
						Nagar 4th Phase, Bengaluru-560078, Karnataka, India. For any
						complaints pertaining to securities broking please write to
						complaints@zerodha. com, for DP related to dp@zerodha.com. Please
						ensure you carefully read the Risk Disclosure Document as prescribed
						by SEBI | ICF
					</p>
				</div>

				<div className="d-none d-md-block">
					<p className="text-muted resizeText ">
						Procedure to file a complaint on SEBI SCORES: Register on SCORES
						portal. Mandatory details for filing complaints on SCORES: Name,
						PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
						Communication, Speedy redressal of the grievances.
					</p>
				</div>

				<div className="d-none d-md-block">
					<p className="text-muted resizeText ">
						Investments in securities market are subject to market risks, read
						all the related documents carefully before investing.
					</p>
				</div>

				<div className="d-none d-md-block">
					<p className="text-muted resizeText pb-4">
						"Prevent unauthorised transactions in your account. Update your
						mobile numbers/email IDs with your stock brokers. Receive
						information of your transactions directly from Exchange on your
						mobile/email at the end of the day. Issued in the interest of
						investors. KYC is one time exercise while dealing in securities
						markets - once KYC is done through a SEBI registered intermediary
						(broker, DP, Mutual Fund etc.), you need not undergo the same
						process again when you approach another intermediary." Dear
						Investor, if you are subscribing to an IPO, there is no need to
						issue a cheque. Please write the Bank account number and sign the
						IPO application form to authorize your bank to make payment in case
						of allotment. In case of non allotment the funds will remain in your
						bank account. As a business we don't give stock tips, and have not
						authorized anyone to trade on behalf of others. If you find anyone
						claiming to be part of Zerodha and offering such services, please
						create a ticket here.
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
