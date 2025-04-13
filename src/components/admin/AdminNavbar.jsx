import React from 'react';
import { Link } from 'react-router-dom';

const AdminNavbar = ({ onLogout }) => {
  return (
    <nav className="bg-blue-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="h-10 w-auto"
                src="/school-logo.png"
                alt="School Logo"
              />
              <span className="ml-2 text-white font-bold text-xl hidden sm:block">
                Admin Dashboard
              </span>
            </div>
          </div>

          <div className="flex items-center">
            <Link to="/admin/home" className="text-white px-3 py-2 rounded-md text-sm font-medium">
              Dashboard
            </Link>
            <Link to="/admin/notice" className="text-white px-3 py-2 rounded-md text-sm font-medium">
              Notices
            </Link>
            <Link to="/admin/admission-form" className="text-white px-3 py-2 rounded-md text-sm font-medium">
              Admissions
            </Link>
            <button onClick={onLogout} className="text-white px-3 py-2 rounded-md text-sm font-medium">
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;