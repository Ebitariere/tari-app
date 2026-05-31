import React from 'react';
import { useAuth } from '../context/AuthContext';

export const Profile = () => {
  const { user } = useAuth();
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Your Profile</h2>
      <p><strong>Username:</strong> {user?.username}</p>
      <p><strong>Assigned Role:</strong> {user?.role}</p>
    </div>
  );
};