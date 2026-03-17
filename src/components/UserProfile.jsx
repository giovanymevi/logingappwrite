import React from 'react';
import { useAuth } from '../hooks/useAuth';
import './UserProfile.css';

const UserProfile = () => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  if (!user) return null;

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="avatar">
          {user.name.charAt(0).toUpperCase()}
        </div>
        <h3>{user.name}</h3>
        <p className="email">{user.email}</p>
      </div>

      <div className="profile-details">
        <div className="detail-item">
          <span className="detail-label">ID de usuario:</span>
          <span className="detail-value">{user.$id}</span>
        </div>
        
        <div className="detail-item">
          <span className="detail-label">Email verificado:</span>
          <span className={`detail-value ${user.emailVerification ? 'verified' : 'unverified'}`}>
            {user.emailVerification ? '✅ Sí' : '❌ No'}
          </span>
        </div>
        
        <div className="detail-item">
          <span className="detail-label">Miembro desde:</span>
          <span className="detail-value">
            {new Date(user.$createdAt).toLocaleDateString('es-ES', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </span>
        </div>

        <div className="detail-item">
          <span className="detail-label">Última actualización:</span>
          <span className="detail-value">
            {new Date(user.$updatedAt).toLocaleDateString('es-ES')}
          </span>
        </div>
      </div>

      <button onClick={handleLogout} className="logout-btn">
        Cerrar Sesión
      </button>
    </div>
  );
};

export default UserProfile;