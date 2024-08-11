import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const RegisterLogin = () => {

    const {store, actions}= useContext(Context);

    const [formData, setFormData] =useState({
        email: '',
        password: ''
    })

    const [login, setLogin]= useState(true)

    const handleChange = e => {
        const {name, value} = e.target
        setFormData({...formData, [name]:value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(login) return actions.login(formData)
        actions.register(formData)
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="d-flex flex-column justify-content-center">
                <label className="align-self-start">Email address:</label>
                <input type="text" name="email" onChange={handleChange} placeholder="Enter your email"/>
            
                <label className="align-self-start">Password:</label>
                <input type="password" name="password" onChange={handleChange} placeholder="Enter your password"/>
            </div>
            <input className="mt-4 btn btn-primary" type="submit" value={`${login? 'Log In' : 'Sign Up'}`} />

            <p>Ya tienes una cuenta? Inicia sesión <span onClick={()=>setLogin(!login)}><strong>AQUÍ</strong></span> </p>
            
        </form>
    )
}