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
      </div>
    </div>
  );
};

export default Home;