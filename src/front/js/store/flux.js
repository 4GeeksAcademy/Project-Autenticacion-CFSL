import atletismo from "../../img/atletismo.png";
import natacion from "../../img/natacion.jpg";
import ciclismo from "../../img/ciclismo.jpeg";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "ATLETISMO",
					background: "white",
					initial: "white",
					imageUrl: atletismo
				},
				{
					title: "NATACION",
					background: "white",
					initial: "white",
					imageUrl: natacion
				},
				{
					title: "CICLISMO",
					background: "white",
					initial: "white",
					imageUrl: ciclismo
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},

			logout: () => {
				localStorage.removeItem('token')
				setStore({user:null, token:null})
				return true
			},

			register: async (formData) => {
				try{
					// fetching data from the backend

					const resp = await fetch(process.env.BACKEND_URL + "/api/signup", {
						headers: {
							'Content-Type': 'application/json'
						},
						method: 'POST',
						body: JSON.stringify(formData)
					})
					const data = await resp.json()
					setStore({ user: data.user, token: data.token })
					localStorage.setItem('token', data.token)
					
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			checkAuth: async(token) => {
				try{
					// fetching data from the backend
					//const token = getStore().token || localStorage.getItem('token')
					const resp = await fetch(process.env.BACKEND_URL + "/api/token", {
						headers: {
							'Content-Type': 'application/json',
							'Authorization': `Bearer ${token}`
						},
						method: 'GET',
					})
					if (resp.status != 200) return false
					const data = await resp.json()
					console.log(data)
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}

			},
			login: async (formData) => {
				try{
					// fetching data from the backend

					const resp = await fetch(process.env.BACKEND_URL + "/api/login", {
						headers: {
							'Content-Type': 'application/json'
						},
						method: 'POST',
						body: JSON.stringify(formData)
					})
					const data = await resp.json()
					setStore({ user: data.user, token: data.token })
					localStorage.setItem('token', data.token)
					
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			}
		}
	};
};

export default getState;
