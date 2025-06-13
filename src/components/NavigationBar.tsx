import React, { useState } from 'react';

const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white px-4 py-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src="/aiffinity-wordmark-dark.svg" alt="AIffinity Logo" className="h-8" />
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <ul className="flex space-x-4 text-base font-medium">
            <li className="font-bold underline underline-offset-4">Home</li>
            <li className="text-gray-700 hover:text-black cursor-pointer">Upload</li>
            <li className="text-gray-700 hover:text-black cursor-pointer">Queue</li>
            <li className="text-gray-700 hover:text-black cursor-pointer">Users</li>
          </ul>
          <div className="flex items-center space-x-1 ml-4">
            <span className="text-gray-700 text-sm">admin@acme.org</span>
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <div className="flex items-center space-x-2 mr-3">
            <span className="text-gray-700 text-sm">admin@acme.org</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
          </div>
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none transition-transform duration-200 ease-in-out"
          >
            <svg className={`w-6 h-6 transition-transform duration-200 ${menuOpen ? 'rotate-90' : 'rotate-0'}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="mt-3 border-t border-gray-200 pt-3">
          <ul className="flex flex-col space-y-2 text-base font-medium">
            <li className={`font-bold underline underline-offset-4 py-1 transition-all duration-200 delay-75 ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'}`}>Home</li>
            <li className={`text-gray-700 hover:text-black cursor-pointer py-1 transition-all duration-200 delay-100 ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'}`}>Upload</li>
            <li className={`text-gray-700 hover:text-black cursor-pointer py-1 transition-all duration-200 delay-150 ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'}`}>Queue</li>
            <li className={`text-gray-700 hover:text-black cursor-pointer py-1 transition-all duration-200 delay-200 ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'}`}>Users</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;