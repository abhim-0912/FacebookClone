import React from 'react';
import './App.css';
import Header from './components/Header';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div className = "app">
      <div className='left-section'>
        <Header />
        <p>
          BrightPointStudios is the King of Solitaire.
        </p>
      </div>
      <div className='right-section'>
        <LoginForm />
      </div>
    </div>
  );
}

export default App;
