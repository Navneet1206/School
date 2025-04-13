import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Notice Board', path: '/notices' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
    { name: 'Careers', path: '/careers' }
  ];

  // Show first 5 items inline on desktop, rest under "More"
  const visibleItems = navItems.slice(0, 5);
  const moreItems = navItems.slice(5);

  return (
    <nav className="bg-blue-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo / Branding */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="h-10 w-auto"
                src="/school-logo.png"
                alt="School Logo"
              />
              {/* <span className="ml-2 text-white font-bold text-xl hidden sm:block">
                Excellence Academy
              </span> */}
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {visibleItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-white hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
              >
                {item.name}
              </Link>
            ))}
            {moreItems.length > 0 && (
              <div className="relative">
                <button
                  onClick={() => setMoreOpen(!moreOpen)}
                  className="text-white bg-blue-600 hover:bg-blue-900 hover:scale-105 transition transform duration-300 px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
                >
                  More
                </button>
                {moreOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-blue-800 shadow-lg rounded-md py-1 z-20">
                    {moreItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={() => setMoreOpen(false)}
                        className="block px-4 py-2 text-sm text-white hover:bg-blue-700 transition duration-300"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-blue-700 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu, shows all items */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-800">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium transition duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
