import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { RegisterLogin } from "../component/registerLogin.jsx";
import { Link, useNavigate } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const navigate= useNavigate()

	const handleLogout = () => {
		actions.logout()
		navigate('/')
	}

	return (
		<div className="text-center mt-5">
		<RegisterLogin></RegisterLogin>

		{localStorage.getItem('token') ? 
		<>
		<div className="d-flex justify-content-around">
		<p>Estas logeado!!!</p> 
		<Link to={'/demo'}>Ve a demo</Link>
		</div>
		<br></br>
		<div className="d-flex justify-content-end">
		<button className="btn btn-dark mb-3" onClick={handleLogout}>Log Out</button>
		</div>
		</>
		: 
		''
		}
		</div>
	);
};
