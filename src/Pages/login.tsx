import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { UserRole } from '../types';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [role, setRole] = useState<UserRole>('Viewer');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) return alert('Please enter a username');
    login(username, role);
    navigate('/dashboard');
  };

  return (
    <div style={{ maxWidth: '400px', margin: '2rem auto', textAlign: 'center' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input 
          type="text" 
          placeholder="Enter Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
        <select value={role} onChange={(e) => setRole(e.target.value as UserRole)}>
          <option value="Admin">Admin</option>
          <option value="Editor">Editor</option>
          <option value="Viewer">Viewer</option>
        </select>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

