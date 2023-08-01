import './Login.css';

function Login() {
    return(
        <div className="Login">
            <div className="Sign-Up">
                <h1>Sign in</h1>
                <form>
                    <input type="text" placeholder="Id" /><br />
                    <input type="password" placeholder="Password" />
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