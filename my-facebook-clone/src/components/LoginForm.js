import React from 'react';
import './LoginForm.css';

function LoginForm(){
    return (
        <div className="login-form-container">
            <form className='login-form'>
                <input 
                    type='email'
                    placeholder='Email'
                    className='login-input'
                />
                <input
                    type='password'
                    placeholder='Password'
                    className='login-input'
                />
                <button type='submit' className='login-button'>
                    Log in
                </button>
            </form>
            <a href='#' className='forgot-password'>
                Forgotten Password?
            </a>
            <div className='divider'></div>
            <button className='create-account-button'>
                Create new account
            </button>
        </div>
    );
}

export default LoginForm;