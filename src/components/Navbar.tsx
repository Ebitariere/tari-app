import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) return null; // Invisible if logged out

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav>
      <div>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/profile">Profile</Link>
        {user.role === 'Admin' && <Link to="/settings">Settings</Link>}
      </div>
      <div>
        <span>
          Welcome, <strong>{user.username}</strong> (<i>{user.role}</i>)
        </span>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
};