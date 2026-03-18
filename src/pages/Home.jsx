import React from 'react';
import { useAuth } from '../hooks/useAuth';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import UserProfile from '../components/UserProfile';

const Home = () => {
  const { user, logout } = useAuth();

  return (
    <div style={{ backgroundColor: '#000000', minHeight: '100vh', width: '100%' }}>
      {/* Barra de Navegación */}
      <Navbar onLogout={logout} />
      
      {/* Sección Hero: Bienvenida y Partículas */}
      {/* Pasamos el nombre del usuario o 'Invitado' si no carga a tiempo */}
      <Hero userName={user ? user.name : 'Usuario'} />
      
      {/* Contenido del Perfil */}
      <div style={{ position: 'relative', zIndex: 10, padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', color: '#fff', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '2px' }}>Tu Cuenta</h2>
        <UserProfile />

        {/* Botón de Enlace Externo */}
        <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'center' }}>
          <a
            href="https://swift-shelf-share.lovable.app"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: '#FFD700',
              color: '#000000',
              padding: '16px 32px',
              borderRadius: '50px',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '800',
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              boxShadow: '0 0 20px rgba(255, 215, 0, 0.4)',
              transition: 'all 0.3s ease',
              border: '2px solid #FFD700',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#FFD700';
              e.currentTarget.style.boxShadow = '0 0 30px rgba(255, 215, 0, 0.6)';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FFD700';
              e.currentTarget.style.color = '#000000';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 215, 0, 0.4)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Tu Producto Digital
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;