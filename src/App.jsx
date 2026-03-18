import React, { useState } from 'react';
import { useAuth } from './hooks/useAuth';
import Login from './components/Login';
import Register from './components/Register';
import Home from './pages/Home';
import './App.css';

function App() {
  const { user, loading } = useAuth();
  const [showLogin, setShowLogin] = useState(true);

  // Estilos globales para tema Negro/Amarillo
  const themeStyles = {
    backgroundColor: '#000000',
    color: '#FFD700',
    minHeight: '100vh',
    width: '100%',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Arial, sans-serif' // Fuente legible básica
  };

  if (loading) {
    return (
      <div className="loading-screen" style={{ ...themeStyles, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <div className="loader" style={{ borderColor: '#333', borderTopColor: '#FFD700' }}></div>
        <p>Cargando aplicación...</p>
      </div>
    );
  }

  return (
    <div className="app" style={themeStyles}>
      {user ? (
        <Home />
      ) : (
        <main className="app-main">
          <div className="auth-section">
            <div className="auth-toggle">
              <button
                className={`toggle-btn ${showLogin ? 'active' : ''}`}
                onClick={() => setShowLogin(true)}
              >
                Iniciar Sesión
              </button>
              <button
                className={`toggle-btn ${!showLogin ? 'active' : ''}`}
                onClick={() => setShowLogin(false)}
              >
                Registrarse
              </button>
            </div>

            {showLogin ? (
              <Login />
            ) : (
              <Register />
            )}
          </div>
        </main>
      )}
    </div>
  );
}

export default App;