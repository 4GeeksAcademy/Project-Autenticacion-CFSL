import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

import juegos_olimpicos from "../../img/juegos_olimpicos.png";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	const navigate=useNavigate()

	const check = async () => {
		const status = await actions.checkAuth(localStorage.getItem('token'))
		if(!status.success) navigate('/')
	}
	useEffect(()=>{
		if (!localStorage.getItem('token')) return navigate('/')
		check()
	},[])
	return (
		<div className="container">
			<div className="text-center mt-5">
			<h1>Bienvenido a los Juegos Olimpicos</h1>
			<p>
				<img src={juegos_olimpicos} className="img-fluid mx-auto d-block" style={{ maxWidth: '80%' }}/>
			</p>
			</div>
			<ul className="list-group">
				{store.demo.map((item, index) => {
					return (
						<li
							key={index}
							className="list-group-item d-flex justify-content-between"
							style={{ background: item.background }}>
							<Link to={"/single/" + index}>
								<span>Link to: {item.title}</span>
							</Link>
							
						</li>
					);
				})}
			</ul>
			<br />
			<Link to="/">
			
				<button className="btn btn-primary mb-3">Back home</button>
			</Link>
		</div>
	);
};
