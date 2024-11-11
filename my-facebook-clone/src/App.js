import React from 'react';
import './App.css';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className = "app">
      <div className='main-content'>
      <div className='left-section'>
        <Header />
      </div>
      <div className='right-section'>
        <LoginForm />
      </div>
      </div>
        <Footer />
    </div>
  );
}

export default App;
