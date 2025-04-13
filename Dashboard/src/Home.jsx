import React, { useEffect, useState } from "react";

import { jwtDecode } from "jwt-decode";

import { useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
	axios.defaults.withCredentials = true;

	const location = useLocation();
	const [cookies, setCookie, removeCookie] = useCookies(["token"]);
	const [username, setUsername] = useState("");
	const [isLoading, setIsLoading] = useState(true);

	// Handle token from URL only once on mount
	useEffect(() => {
		const urlParams = new URLSearchParams(location.search);
		const tokenFromUrl = urlParams.get("token");
		const userFromUrl = urlParams.get("user");

		if (tokenFromUrl && !cookies.token) {
			console.log("Setting new token cookie");
			setCookie("token", tokenFromUrl, {
				path: "/",
				maxAge: 24 * 60 * 60, // 24 hours
				sameSite: "lax",
				httpOnly: false,
				secure: false,
			});
			setUsername(userFromUrl);
		}
	}, []); // Only run once on mount

	// Handle verification separately
	useEffect(() => {
		const verifyAndSetup = async () => {
			if (!cookies.token) {
				// window.location.href = "http://localhost:5173/login";
				return;
			}

			try {
				const { data } = await axios.post(
					"https://zerodha-clone-backend-ve49.onrender.com",
					{},
					{ withCredentials: true }
				);

				if (!data || data.status !== true) {
					removeCookie("token");
					window.location.href = "http://localhost:5173/login";
					return;
				}

				setUsername(data.user);
				if (!username) {
					toast(`Hello ${data.user}`, {
						position: "top-right",
					});
				}
				setIsLoading(false);
			} catch (error) {
				console.error("Error during verification:", error);
				removeCookie("token");
				window.location.href = "http://localhost:5173/login";
			}
		};

		verifyAndSetup();
	}, [cookies.token]);

	// if (isLoading) {
	// 	return <div>Loading...</div>;
	// }

	return (
		<>
			<TopBar username={username} />
			<Dashboard username={username} />
			<ToastContainer />
		</>
	);
};

export default Home;
