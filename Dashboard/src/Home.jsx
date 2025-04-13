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

	// Handle token from URL only once on mount
	useEffect(() => {
		const urlParams = new URLSearchParams(location.search);
		const tokenFromUrl = urlParams.get("token");
		const userFromUrl = urlParams.get("user");

		console.log("=== Cookie Setting Debug ===");
		console.log("1. URL Parameters:", {
			tokenFromUrl: tokenFromUrl ? "Present" : "Missing",
			userFromUrl: userFromUrl ? "Present" : "Missing",
		});
		console.log("1a. Token from URL:", tokenFromUrl);

		console.log("2. Current cookies:", cookies);
		console.log("3. Token cookie exists:", !!cookies.token);

		if (tokenFromUrl && !cookies.token) {
			console.log("4. Setting new token cookie with params:", {
				path: "/",
				maxAge: 24 * 60 * 60,
				sameSite: "lax",
				httpOnly: false,
				secure: false,
			});
			setCookie("token", tokenFromUrl, {
				path: "/",
				maxAge: 24 * 60 * 60, // 24 hours
				sameSite: "lax",
				httpOnly: false,
				secure: false,
			});
			console.log("5. Cookie set successfully");
			setUsername(userFromUrl);
			console.log("6. Username set to:", userFromUrl);
		} else {
			console.log(
				"7. Cookie setting skipped because:",
				!tokenFromUrl ? "No token in URL" : "Token cookie already exists"
			);
		}
	}, []); // Only run once on mount

	// Handle verification separately
	useEffect(() => {
		const verifyAndSetup = async () => {
			if (!cookies.token) {
				// window.location.href = "https://zerodha-clone-tau.vercel.app/login";
				return;
			}

			try {
				const { data } = await axios.post(
					"https://zerodha-clone-backend-ve49.onrender.com",
					{},
					{ withCredentials: true }
				);

				if (!data || data.status !== true) {
					// removeCookie("token");
					// window.location.href = "https://zerodha-clone-tau.vercel.app/login";
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
				window.location.href = "https://zerodha-clone-tau.vercel.app/login";
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
