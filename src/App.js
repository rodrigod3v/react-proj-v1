// src/App.js
import React, { useState } from 'react';
import Login from './login/Login';
import Dashboard from './login/Dashboard';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <div>
      {isAuthenticated ? <Dashboard /> : <Login onLogin={handleLogin} />}
    </div>
  );
}

export default App;
