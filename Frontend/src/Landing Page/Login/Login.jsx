import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
	axios.defaults.withCredentials = true;

	const [inputValue, setInputValue] = useState({
		email: "",
		password: "",
	});
	const { email, password } = inputValue;
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
			position: "bottom-left",
		});

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const { data } = await axios.post(
				"http://localhost:3002/login",
				{
					...inputValue,
				},
				{ withCredentials: true }
			);
			console.log(data);
			const { success, message, token, user } = data;
			if (success) {
				handleSuccess(message);
				setTimeout(() => {
					window.location.href = `http://localhost:5174/?token=${token}&user=${user}`;
				}, 1000);
			} else {
				handleError(message);
			}
		} catch (error) {
			console.log(error);
		}
		setInputValue({
			...inputValue,
			email: "",
			password: "",
		});
	};

	return (
		<div className="container mt-5 mb-5 pt-5 pb-5">
			<div className="row justify-content-center">
				<div className="col-lg-4 col-md-6 col-sm-8 col-11">
					<h2 className="text-center mb-4 fs-1">Login</h2>
					<form onSubmit={handleSubmit}>
						{/* Email input */}
						<div className="form-outline mb-4">
							<input
								type="email"
								name="email"
								value={email}
								className="form-control"
								onChange={handleOnChange}
								required
							/>
							<label className="form-label">Email address</label>
						</div>

						{/* Password input */}
						<div className="form-outline mb-4">
							<input
								type="password"
								name="password"
								value={password}
								className="form-control"
								onChange={handleOnChange}
								required
							/>
							<label className="form-label">Password</label>
						</div>

						{/* Submit button */}
						<button
							type="submit"
							className="btn btn-primary btn-block mb-4 w-100"
						>
							Login
						</button>

						{/* Social login */}
						<div className="text-center">
							<p className="mb-2">or log in with:</p>
							<div className="d-flex justify-content-center">
								<button
									type="button"
									className="btn btn-link btn-floating mx-1"
								>
									<i className="fab fa-facebook-f"></i>
								</button>
								<button
									type="button"
									className="btn btn-link btn-floating mx-1"
								>
									<i className="fab fa-google"></i>
								</button>
								<button
									type="button"
									className="btn btn-link btn-floating mx-1"
								>
									<i className="fab fa-twitter"></i>
								</button>
								<button
									type="button"
									className="btn btn-link btn-floating mx-1"
								>
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

export default Login;
