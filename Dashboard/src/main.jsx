import { createRoot } from "react-dom/client";
import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";

createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<Routes>
			<Route path="/*" element={<Home />} />
		</Routes>
	</BrowserRouter>
);
