import React, { useState } from 'react';
import './App.css'; // Você pode personalizar o estilo

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação simples
    if (!email || !password) {
      setErrorMessage('Por favor, preencha todos os campos');
      return;
    }

    // Aqui você pode adicionar a lógica de autenticação
    console.log('Email:', email);
    console.log('Senha:', password);

    // Limpar o formulário após o envio
    setEmail('');
    setPassword('');
    setErrorMessage('');
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

export default App;
