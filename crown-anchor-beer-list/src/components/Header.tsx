"use client";

import { useState } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-amber-800 text-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl sm:text-2xl font-bold">Crown & Anchor</h1>
            </div>
          </div>

          {/* Desktop menu */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-white hover:text-amber-200 px-3 py-2 rounded-md text-sm font-medium">Beer List</a>
            <a href="#about" className="text-white hover:text-amber-200 px-3 py-2 rounded-md text-sm font-medium">About Us</a>
            <a href="#location" className="text-white hover:text-amber-200 px-3 py-2 rounded-md text-sm font-medium">Location</a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              type="button" 
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-amber-200 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                /* Icon when menu is open */
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-amber-900">
            <a href="/" className="text-white block px-3 py-2 rounded-md text-base font-medium">Beer List</a>
            <a href="#about" className="text-white block px-3 py-2 rounded-md text-base font-medium">About Us</a>
            <a href="#location" className="text-white block px-3 py-2 rounded-md text-base font-medium">Location</a>
          </div>
        </div>
      )}
    </header>
  );
}; 