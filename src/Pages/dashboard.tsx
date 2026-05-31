import React from 'react';
import { useAuth } from '../context/AuthContext';

export const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1>Main Dashboard</h1>
      <p>This area is accessible to all logged-in users.</p>
      <hr />
      
      {/* Conditional Rendering Panels based on Role */}
      {user?.role === 'Admin' && (
        <div>
          <h3>Admin Controls Active</h3>
          <button>Manage System Users</button> <button>Delete Database</button>
        </div>
      )}

      {user?.role === 'Editor' && (
        <div>
          <h3>Editor Management Panel Active</h3>
          <textarea placeholder="Write or edit content here..." rows={4} cols={40} />
        </div>
      )}

      {user?.role === 'Viewer' && (
        <div>
          <h3>Read-Only Analytics Dashboard</h3>
          <ul>
            <li>Platform Status: Nominal</li>
            <li>Active Sessions: 1,420</li>
          </ul>
        </div>
      )}
    </div>
  );
};