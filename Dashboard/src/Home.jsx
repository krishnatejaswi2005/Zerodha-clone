import React, { useEffect, useState } from "react";

import { jwtDecode } from "jwt-decode";

import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
	axios.defaults.withCredentials = true;

	const navigate = useNavigate();
	const [cookies, removeCookie] = useCookies(["token"]);
	const [username, setUsername] = useState("");

	const token = cookies.token;
	console.log(token);
	const decodedToken = jwtDecode(token, { complete: true });

	useEffect(() => {
		axios
			.get(
				`https://zerodha-clone-backend-ve49.onrender.com/getUsername/${decodedToken.id}`
			)
			.then((result) => {
				setUsername(result.data.username);
			});
	}, []);

	useEffect(() => {
		const verifyCookie = async () => {
			if (!cookies.token) {
				window.location.href = "http://localhost:5173/login";
			}
			const { data } = await axios.post(
				"https://zerodha-clone-backend-ve49.onrender.com",
				{},
				{ withCredentials: true }
			);
			const { status, user } = data;
			setUsername(user);
			return status
				? toast(`Hello ${user}`, {
						position: "top-right",
				  })
				: (removeCookie("token"),
				  (window.location.href = "hhttp://localhost:5173/login"));
		};
		verifyCookie();
	}, [cookies, navigate, removeCookie]);

	return (
		<>
			<TopBar username={username} />
			<Dashboard username={username} />
		</>
	);
};

export default Home;
