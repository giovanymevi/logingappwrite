import { Routes, Route } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import Login from './pages/Login'; 
import Register from './pages/Register';
import Home from './pages/Home';
// Se eliminó la importación de Navbar

function App() {
  const { user } = useAuth();

  // Estilos globales para el tema Negro y Amarillo
  const appStyle = {
    backgroundColor: '#000000',
    color: '#FFD700',
    minHeight: '100vh',
    width: '100%'
  };

  return (
    <div style={appStyle}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={user ? <Home /> : <Login />} />
      </Routes>
    </div>
  );
}

export default App;