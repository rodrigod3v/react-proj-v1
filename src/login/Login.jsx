// src/login/Login.js
import React, { useState } from 'react';
import '../App.css';  // Certifique-se de usar o caminho correto para o CSS

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'admin' && password === 'admin') {
      onLogin();
    } else {
      setErrorMessage('Credenciais inválidas');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu email"
          />
        </div>
        <div className="input-group">
          <label>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite sua senha"
          />
        </div>
        {errorMessage && <p className="error">{errorMessage}</p>}
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
