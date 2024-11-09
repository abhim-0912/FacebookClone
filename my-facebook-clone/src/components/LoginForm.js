import React, {useState} from "react";
import './LoginForm.css';

function LoginForm(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login Attempt', {email,password});
    };
    return (
        <form  className="login-form" onSubmit={handleSubmit}>
            <h2>Login to BrightPointStudios</h2>
            <input
                type="email"
                placeholder="Email"
                className="login-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input 
                type="password"
                placeholder="Password"
                className="login-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="login-button">
                Log In
            </button>
        </form>
    );
}

export default LoginForm;