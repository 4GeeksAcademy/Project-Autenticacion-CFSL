import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	// Obtener el elemento específico usando params.theid
	const item = store.demo[params.theid];
	if (!item) return <div>Elemento no encontrado</div>;

	return (
		<div className="jumbotron text-center">
			<h1 className="display-6">This will show the demo element: {store.demo[params.theid].title}</h1>
			<img src={item.imageUrl} alt={item.title} className="img-fluid mx-auto d-block" style={{ maxWidth: '80%' }} />
			<hr className="my-4" />

			<Link to={'/demo'}>
			<div className="d-flex justify-content-end me-3 mb-3">
				<span className="btn btn-primary  " href="#" role="button">
					Back
				</span></div>
			</Link>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
