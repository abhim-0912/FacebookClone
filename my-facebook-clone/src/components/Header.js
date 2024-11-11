import React from 'react';
import './Header.css';

function Header(){
    return (
        <header className = "header-container">
            <h1 className='facebook-logo'>facebook</h1>
            <p className='supporting-text'>
            Facebook helps you connect and share with the people in your life.
            </p>
        </header>
    );
}

export default Header;