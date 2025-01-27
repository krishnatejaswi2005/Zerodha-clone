import React from "react";
import { useState, useEffect } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardControlKeyIcon from "@mui/icons-material/KeyboardControlKey";
import BarChartIcon from "@mui/icons-material/BarChart";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Tooltip } from "@mui/material";

import { watchlist } from "./data/data";

const WatchList = () => {
	const [placeholder, setPlaceholder] = useState(
		"Search eg:infy, bse, nifty fut weekly, gold mcx"
	);

	useEffect(() => {
		const handleResize = () => {
			const width = window.innerWidth;
			if (width <= 1440 && width >= 768) {
				setPlaceholder("Search");
			} else if (width < 485) {
				setPlaceholder("Search");
			} else {
				setPlaceholder("Search eg:infy, bse, nifty fut weekly, gold mcx");
			}
		};

		// Initial resize check
		handleResize();

		// Add event listener on resize
		window.addEventListener("resize", handleResize);

		// Cleanup event listener on component unmount
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div className="watchlist-container">
			<div className="search-container">
				<input
					type="text"
					name="search"
					id="search"
					placeholder={placeholder}
					className="search"
				/>
				<span className="counts">{watchlist.length}/50</span>
			</div>

			<ul className="list">
				{watchlist.map((stock, index) => {
					return <WatchListItem key={index} stock={stock} />;
				})}
			</ul>
		</div>
	);
};

export default WatchList;

const WatchListItem = ({ stock }) => {
	const [showWatchListActions, setShowWatchListActions] = useState(false);

	const handleMouseEnter = (e) => {
		setShowWatchListActions(true);
	};
	const handleMouseLeave = (e) => {
		setShowWatchListActions(false);
	};

	// const handleClick = () => {
	// 	if (window.innerWidth <= 768) {
	// 		setShowWatchListActions(!showWatchListActions);
	// 	}
	// };

	return (
		<li
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			// onClick={handleClick}
		>
			<div className="item">
				<p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
				{showWatchListActions || (
					<div className="item-info">
						<span className="percent">{stock.percent}</span>
						{stock.isDown ? (
							<KeyboardArrowDownIcon className="down" />
						) : (
							<KeyboardControlKeyIcon className="up" />
						)}
						<span className="stock">{stock.price}</span>
					</div>
				)}
			</div>
			{(showWatchListActions || window.innerWidth <= 768) && (
				<WatchListActions uid={stock.name} />
			)}
		</li>
	);
};

const WatchListActions = ({ uid }) => {
	return (
		<span className="actions">
			<span className="action-buttons">
				<Tooltip title="Buy (B)" arrow placement="top">
					<button className="buy">Buy</button>
				</Tooltip>
				<Tooltip title="Sell (S)" arrow placement="top">
					<button className="sell">Sell</button>
				</Tooltip>
				<Tooltip title="Analytics (A)" arrow placement="top">
					<button className="action">
						<BarChartIcon />
					</button>
				</Tooltip>
				<Tooltip title="More" arrow placement="top">
					<button className="more">
						<MoreHorizIcon />
					</button>
				</Tooltip>
			</span>
		</span>
	);
};
