import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
	axios.defaults.withCredentials = true;

	const [inputValue, setInputValue] = useState({
		email: "",
		password: "",
		username: "",
	});
	const { email, password, username } = inputValue;
	const handleOnChange = (e) => {
		const { name, value } = e.target;
		setInputValue({
			...inputValue,
			[name]: value,
		});
	};

	const handleError = (err) =>
		toast.error(err, {
			position: "bottom-left",
		});
	const handleSuccess = (msg) =>
		toast.success(msg, {
			position: "bottom-right",
		});

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log("Signup form submitted with values:", inputValue);
		try {
			const response = await axios.post(
				"https://zerodha-clone-backend-ve49.onrender.com/signup",
				{
					...inputValue,
				},
				{
					withCredentials: true,
					headers: {
						"Content-Type": "application/json",
						Accept: "application/json",
					},
				}
			);
			console.log("Complete response:", response);
			console.log("Response headers:", response.headers);
			console.log("Response data:", response.data);

			const { success, message, user } = response.data;

			// Check for token in different locations
			let token = response.data.token;
			if (!token && response.headers["authorization"]) {
				token = response.headers["authorization"].split(" ")[1];
			}

			console.log("Token found:", token);

			if (success) {
				handleSuccess(message);

				// If we have a token, proceed with redirect
				if (token) {
					const redirectUrl = `https://zerodha-clone-dashboard-nine.vercel.app/?token=${token}&user=${encodeURIComponent(
						JSON.stringify(user)
					)}`;
					console.log("Redirecting to:", redirectUrl);
					setTimeout(() => {
						window.location.href = redirectUrl;
					}, 1000);
				} else {
					console.error("No token found in response");
					handleError("Authentication failed - no token received");
				}
			} else {
				handleError(message);
			}
		} catch (error) {
			console.error("Signup error:", error);
			if (error.response) {
				console.error("Error response data:", error.response.data);
				console.error("Error response status:", error.response.status);
				console.error("Error response headers:", error.response.headers);
			}
		}
		setInputValue({
			...inputValue,
			email: "",
			password: "",
			username: "",
		});
	};

	return (
		<div className="container mt-5 mb-5 pt-5 pb-5">
			<div className="row justify-content-center">
				<div className="col-lg-4 col-md-6 col-sm-8 col-11">
					<h2 className="text-center mb-4 fs-1">Sign Up</h2>
					<form onSubmit={handleSubmit}>
						<div className="form-outline mb-4">
							<input
								type="text"
								name="username"
								value={username}
								id="username"
								className="form-control"
								onChange={handleOnChange}
								required
							/>
							<label className="form-label" htmlFor="username">
								Username
							</label>
						</div>

						<div className="form-outline mb-4">
							<input
								type="email"
								name="email"
								value={email}
								id="email"
								className="form-control"
								onChange={handleOnChange}
								required
							/>
							<label className="form-label" htmlFor="email">
								Email address
							</label>
						</div>

						<div className="form-outline mb-4">
							<input
								type="password"
								name="password"
								value={password}
								id="password"
								className="form-control"
								onChange={handleOnChange}
								required
							/>
							<label className="form-label" htmlFor="password">
								Password
							</label>
						</div>

						<button type="submit" className="btn btn-primary w-100 mb-4">
							Sign up
						</button>

						<div className="text-center">
							<span style={{ fontSize: "0.9rem" }}>
								Already have an account?{" "}
								<Link to="/login" style={{ textDecoration: "none" }}>
									Login
								</Link>
							</span>
							<p className="mt-3">or log in with:</p>
							<div className="d-flex justify-content-center gap-2">
								<button type="button" className="btn btn-link btn-floating">
									<i className="fab fa-facebook-f"></i>
								</button>
								<button type="button" className="btn btn-link btn-floating">
									<i className="fab fa-google"></i>
								</button>
								<button type="button" className="btn btn-link btn-floating">
									<i className="fab fa-twitter"></i>
								</button>
								<button type="button" className="btn btn-link btn-floating">
									<i className="fab fa-github"></i>
								</button>
							</div>
						</div>
					</form>
					<ToastContainer />
				</div>
			</div>
		</div>
	);
};

export default Signup;
