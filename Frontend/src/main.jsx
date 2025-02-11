import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./Landing Page/Home/HomePage";
import SignUp from "./Landing Page/SignUp/SignUp";
import Login from "./Landing Page/Login/Login";
import SupportPage from "./Landing Page/Support/SupportPage";
import ProductsPage from "./Landing Page/Products/ProductsPage";
import PricingPage from "./Landing Page/Pricing/PricingPage";
import AboutPage from "./Landing Page/About/AboutPage";
import PageNotFound from "./Landing Page/PageNotFound";
import Navbar from "./Landing Page/Navbar";
import Footer from "./Landing Page/Footer";

createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<Navbar />
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/signup" element={<SignUp />} />
			<Route path="/login" element={<Login />} />
			<Route path="/support" element={<SupportPage />} />
			<Route path="/products" element={<ProductsPage />} />
			<Route path="/pricing" element={<PricingPage />} />
			<Route path="/about" element={<AboutPage />} />
			<Route path="*" element={<PageNotFound />} />
		</Routes>
		<Footer />
	</BrowserRouter>
);
