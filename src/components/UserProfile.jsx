import React from 'react';
import { useAuth } from '../hooks/useAuth';
import './UserProfile.css';

const UserProfile = () => {
  const { user } = useAuth();

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
    </div>
  );
};

export default UserProfile;