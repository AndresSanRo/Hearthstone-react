import React from 'react';
import './styles/App.css';
import { Home } from './pages';
import { Navbar } from './common/components';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Home />
      </div>      
    </>    
  );
}

export default App;
