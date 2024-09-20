import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  let navigate = useNavigate()
  const clear = ()=>{
    localStorage.clear();
    navigate('/')
 }

  return (
  <>
    <nav className="bg-gray-800 p-4 shadow-lg fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-bold text-xl">Dashboard</div>

        {/* Toggle Button */}
        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Links for Larger Screens */}
        <div className="hidden sm:flex space-x-6 text-white">
        <button onClick={clear}> <li  className="block text-lg"></li>Logout</button>
        </div>
      </div>

      {/* Dropdown Menu for Small Screens */}
      {isOpen && (
        <div className="sm:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleMenu}
          ></div>

          {/* Menu */}
          <div className="fixed h-32 top-0 right-0 bottom-0 w-3/4 bg-gray-900 text-white p-6 z-50 transform transition-transform ease-in-out duration-300">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none absolute top-4 right-4"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            {/* Menu Links */}
            <ul className="space-y-6">
             <button onClick={clear}> <li  className="block text-lg"></li>Logout</button>
            </ul>
          </div>
        </div>
      )}
      
    </nav>
  </>
  );
};

export default Navbar;
