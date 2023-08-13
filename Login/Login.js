import React, { useState } from 'react';
import axios from 'axios';

import './Login.css';


function Login() {

    const [id, setId] = useState("")
    const [password, setPassword] = useState("")

    const handleInputId = (e) => {
        setId(e.target.value)
    }
 
    const handleInputPw = (e) => {
        setPassword(e.target.value)
    }



    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8080/Login', {id, password})
        .then(res => console.log(res))
        .catch(err => console.log(err));
    
        }

    

    return(
        <div className="Login">
            <div className="Sign-Up">
                <h1>Sign in</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Id" onChange={handleInputId}/><br />
                    <input type="password" placeholder="Password" onChange={handleInputPw}/>
                    <button>Sign in</button>
                </form>
            </div>
            <div className="Hello-Netflix">
                <h1>Hello, Netflix</h1>
                <p>Enter your personal details and start with us</p>
            </div>
        </div>
    )
}

export default Login;