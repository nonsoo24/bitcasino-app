import React, { lazy } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = lazy(() => import("components/Footer"));
const Header = lazy(() => import("components/Header"));
const Hero = lazy(() => import("components/Hero"));

function App() {
	return (
		<>
			<div className="bg-primary relative main overflow-hidden">
				<div className="container-fluid pt-6 lg:pl-32 lg:pr-28">
					<Header />
					<Hero />
				</div>
			</div>
			<div className="container-fluid py-6 lg:pl-32 bg-white">
				<Footer />
			</div>
			<ToastContainer />
		</>
	);
}

export default App;
