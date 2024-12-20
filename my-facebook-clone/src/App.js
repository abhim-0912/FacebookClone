import React from 'react';
import './App.css';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import Footer from './components/Footer';
import CreatePage from './components/CreatePage';

function App() {
  return (
    <div className = "app">
      <div className='main-content'>
      <div className='left-section'>
        <Header />
      </div>
      <div className='right-section'>
        <LoginForm />
        <CreatePage />
      </div>
      </div>
        <Footer />
    </div>
  );
}

export default App;
