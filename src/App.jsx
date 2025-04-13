import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Events from './pages/Events';
import NoticeBoard from './pages/NoticeBoard';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import AdmissionForm from './pages/admin/AdmissionForm';
import AdminHome from './pages/admin/Home';
import Notice from './pages/admin/Notice';
import AdminLayout from './components/admin/AdminLayout';
import PrivateAdminRoute from './components/admin/PrivateAdminRoute';
import AdminNavbar from './components/admin/AdminNavbar';
import AdminLogin from './pages/admin/AdminLogin';
import AdminSignup from './pages/admin/AdminSignup';

const App = () => {
  const handleAdminLogout = () => {
    localStorage.removeItem('adminToken');
  };

  return (
    <Router>
      <div>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/events" element={<Events />} />
            <Route path="/notices" element={<NoticeBoard />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
          </Route>

          {/* Admin routes */}
          <Route path="/admin/*" element={
            <PrivateAdminRoute>
              <AdminLayout onLogout={handleAdminLogout} />
            </PrivateAdminRoute>
          }>
            <Route path="home" element={<AdminHome />} />
            <Route path="notice" element={<Notice />} />
            <Route path="admission-form" element={<AdmissionForm />} />
          </Route>

          {/* Admin authentication routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/signup" element={<AdminSignup />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;