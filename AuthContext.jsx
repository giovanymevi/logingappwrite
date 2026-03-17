import { createContext, useState, useEffect } from 'react';
import { account } from '../config/appwrite';
import { ID } from 'appwrite';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (email, password) => {
    const session = await account.createEmailPasswordSession(email, password);
    const accountDetails = await account.get();
    setUser(accountDetails);
    return session;
  };

  const register = async (email, password, name) => {
    await account.create(ID.unique(), email, password, name);
    await login(email, password);
  };

  const logout = async () => {
    await account.deleteSession('current');
    setUser(null);
  };

  useEffect(() => {
    const checkUserStatus = async () => {
      try {
        const accountDetails = await account.get();
        setUser(accountDetails);
      } catch (error) {
        // Si falla (ej. no logueado), user se queda en null
        setUser(null);
      } finally {
        // CRÍTICO: Siempre desactivar loading al finalizar la comprobación
        setLoading(false);
      }
    };

    checkUserStatus();
  }, []);

  if (loading) {
    return (
      <div style={{ height: '100vh', width: '100vw', backgroundColor: '#000000', color: '#FFD700', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '2rem' }}>
        Cargando...
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};