import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Details } from "./views/details";
import { Register } from "./views/register";
import { LogIn } from "./views/login";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<div className="container">
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/details/:nature/:id" element={<Details />} />
						<Route path="/login" element={<LogIn />} />
						<Route path="/register" element={<Register />} />
						<Route path="/*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />

					</div>

				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
