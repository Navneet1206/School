import React from 'react';
import AdminNavbar from './AdminNavbar';

const AdminLayout = ({ children, onLogout }) => {
  return (
    <div>
      <AdminNavbar onLogout={onLogout} />
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;