// TopBar.js
import React from "react";
import Menu from "./Menu";
import "./Menu.css";

const TopBar = () => {
	return (
		<div className="topbar-container flex flex-wrap items-center justify-between bg-blue-600 text-white p-4">
			{/* Indices Section */}
			<div className="indices-container flex gap-4">
				<div className="nifty flex flex-col items-center">
					<p className="index font-bold">NIFTY 50</p>
					<p className="index-points text-lg">{100.2}</p>
				</div>
				<div className="sensex flex flex-col items-center">
					<p className="index font-bold">SENSEX</p>
					<p className="index-points text-lg">{100.2}</p>
				</div>
			</div>

			{/* Menu Component */}
			<Menu />
		</div>
	);
};

export default TopBar;
