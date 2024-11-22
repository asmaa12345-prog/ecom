import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom'; // Pour la navigation
import './LoginPage.css'; // Importation des styles personnalisés

const LoginPage = () => {
  const { loginWithRedirect, user, isAuthenticated } = useAuth0();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook de navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      // Une fois le formulaire soumis, rediriger l'utilisateur vers la page d'administration
      navigate('/admin');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="login-page">
      <div className="container">
        <div className="form">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="box">
              <div className="label">
                <h4>Username</h4>
              </div>
              <div className="input">
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="box">
              <div className="label">
                <h4>Password</h4>
              </div>
              <div className="input">
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <button type="submit">Login</button>
          </form>
          {/* Message d'information en cas d'erreur ou autre */}
          <div className="login-message">
            {isAuthenticated ? (
              <p>Welcome, {user.name}</p>
            ) : (
              <p>You are not logged in. Please log in to continue.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
