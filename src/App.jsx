import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Adjust the path as necessary
import Home from './pages/Home'; // Assuming these are your pages
import About from './pages/About';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Events from './pages/Events';
import NoticeBoard from './pages/NoticeBoard';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import AdmissionForm from './pages/admin/AdmissionForm';
import AdminHome from './pages/admin/Home'; // Assuming you have an admin home page
import Notice from './pages/admin/Notice'; // Assuming you have an admin notice page
import Footer from './components/Footer'; 
import AdminLogin from './pages/admin/AdminLogin'; // Assuming you have an admin login page
const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/events" element={<Events />} />
            <Route path="/notices" element={<NoticeBoard />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/admin/login" element={<AdminLogin />} /> {/* Admin Login Page */}
            <Route path="/admin/admission-form" element={<AdmissionForm />} />
            <Route path="/admin/home" element={<AdminHome />} /> {/* Admin Home Page */}
            <Route path="/admin/notice" element={<Notice />} /> {/* Admin Notice Page */}
            {/* Add more routes as needed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
