import React, { useState } from 'react';
import axios from 'axios';

import './Login.css';


function Login() {


    const [id, setId] = useState("");
    const [password, setPassword] = useState("");


    const [errorId, setErrorId] = useState(false);
    const [errorPw, setErrorPw] = useState(false);
    const [errorIdPw, setErrorIdPw] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8080/Login', {id, password})
        .then(res => console.log(res))
        .catch(err => (password == null) ? setErrorPw(true) : setErrorPw(false));
    
    }

    const handleInputId = (e) => {
        setId(e.target.value);
    }
 
    const handleInputPw = (e) => {
        setPassword(e.target.value);
    }

    

    return(
        <div className="Login">
            <div className="Sign-Up">
                <h1>Sign in</h1>
                <form onSubmit={handleSubmit}>
                    <div className='inputidWrap'>
                        <input type="text" placeholder="Id" onChange={handleInputId}/><br />
                        {/* {id <= 0 && (<p className='ErrorMessage'>아이디를 입력하세요.</p>)} */}
                        <p className='ErrorMessageId'>아이디를 입력하세요.</p>
                    </div>
                    <div className='inputPasswordWrap'>
                        <input type="password" placeholder="Password" onChange={handleInputPw}/>
                        {!errorPw && (<p className='ErrorMessagePw'>비밀번호를 입력하세요.</p>)}
                        {/* <p className='ErrorMessage'>비밀번호를 입력하세요.</p> */}
                    </div>
                    <p className='ErrorMessage'>아이디 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요.</p>
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