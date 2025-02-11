import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

import { useCookies } from "react-cookie";

import "./Menu.css";

const Menu = () => {
	const [selectedMenu, setSelectedMenu] = useState(0);
	const [isProfileDropdown, setIsProfileDropdown] = useState(false);
	const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

	const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth <= 560);

	const [cookies, removeCookie] = useCookies(["token"]);

	// Update state on window resize
	useEffect(() => {
		const handleResize = () => {
			setIsScreenSmall(window.innerWidth <= 560);
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const handleMenuClick = (index) => {
		setSelectedMenu(index);
		setIsHamburgerOpen(false); // Close hamburger on menu click
	};

	const handleProfileClick = () => {
		setIsProfileDropdown(!isProfileDropdown);
	};

	const toggleHamburger = () => {
		setIsHamburgerOpen(!isHamburgerOpen);
	};
	const Logout = () => {
		removeCookie("token");
		window.location.href = "http://localhost:5173/";
	};

	const menuClass = "menu";
	const activeMenuClass = "menu selected";

	return (
		<div className="menu-container">
			{/* Logo */}
			<img
				src="./logo.png"
				className="logo"
				style={{ width: "50px" }}
				alt="Logo"
			/>

			{/* Hamburger Icon */}
			<div className="hamburger" onClick={toggleHamburger}>
				{isHamburgerOpen ? <FiX size={24} /> : <FiMenu size={24} />}
			</div>

			{/* Menu Items */}
			<div className={`menus ${isHamburgerOpen ? "open" : ""}`}>
				<ul>
					<div
						className={isScreenSmall ? "profile" : "hidden"}
						onClick={handleProfileClick}
					>
						<div className="avatar">ZU</div>
						<p className="username">USERID</p>
					</div>
					<li>
						<Link
							to="/"
							onClick={() => handleMenuClick(0)}
							style={{ textDecoration: "none" }}
						>
							<p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
								Dashboard
							</p>
						</Link>
					</li>
					<li>
						<Link
							to="/orders"
							onClick={() => handleMenuClick(1)}
							style={{ textDecoration: "none" }}
						>
							<p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
								Orders
							</p>
						</Link>
					</li>
					<li>
						<Link
							to="/holdings"
							onClick={() => handleMenuClick(2)}
							style={{ textDecoration: "none" }}
						>
							<p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
								Holdings
							</p>
						</Link>
					</li>
					<li>
						<Link
							to="/positions"
							onClick={() => handleMenuClick(3)}
							style={{ textDecoration: "none" }}
						>
							<p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
								Positions
							</p>
						</Link>
					</li>
					<li>
						<Link
							to="/funds"
							onClick={() => handleMenuClick(4)}
							style={{ textDecoration: "none" }}
						>
							<p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
								Funds
							</p>
						</Link>
					</li>

					<li>
						<Link
							to="/apps"
							onClick={() => handleMenuClick(5)}
							style={{ textDecoration: "none" }}
						>
							<p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
								Apps
							</p>
						</Link>
					</li>
					<li>
						<Link
							to=""
							onClick={() => {
								handleMenuClick(6);
								Logout();
							}}
							style={{ textDecoration: "none" }}
						>
							<p className={selectedMenu === 6 ? activeMenuClass : menuClass}>
								Logout
							</p>
						</Link>
					</li>
				</ul>
			</div>
			{/* Profile Section (will be outside the hamburger for larger screens) */}
			<div
				className={isScreenSmall ? "hidden" : "profile"}
				onClick={handleProfileClick}
			>
				<div className="avatar">ZU</div>
				<p className="username">USERID</p>
			</div>
		</div>
	);
};

export default Menu;
