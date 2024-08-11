import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
			<nav className="navbar bg-dark border-bottom border-body"data-bs-theme="dark">
			
				
				<Link to="/">
					<span className="navbar-brand mb-0 ms-4 h1"> INICIO</span>
				</Link>
			</nav>
		
	);
};
