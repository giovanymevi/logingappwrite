import { Routes, Route } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import Login from './pages/Login'; 
import Register from './pages/Register';
import Home from './pages/Home';

function App() {
  const { user } = useAuth();

  const appStyle = {
    backgroundColor: '#000000',
    color: '#FFD700',
    minHeight: '100vh',
    width: '100%',
    margin: 0,
    padding: 0,
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
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