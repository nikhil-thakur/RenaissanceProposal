import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const AppRouter = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to determine if a route is active
  const isActive = (path) => location.pathname === path;

  // Get current year dynamically
  const currentYear = new Date().getFullYear();

  return (
      <div className="min-h-screen bg-gray-100">
        {/* Navigation Header */}
        <nav className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <span className="text-orange-500 font-bold text-xl">Renaissance Group Proposal</span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link
                      to="/"
                      className={`border-transparent inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium 
                    ${isActive('/') ? 'text-orange-500 border-orange-500' : 'text-gray-500 hover:text-gray-800 hover:border-gray-300'}`}
                  >
                    Overview
                  </Link>
                  <Link
                      to="/deliverables"
                      className={`border-transparent inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium 
                    ${isActive('/deliverables') ? 'text-orange-500 border-orange-500' : 'text-gray-500 hover:text-gray-800 hover:border-gray-300'}`}
                  >
                    Deliverables
                  </Link>
                  <Link
                      to="/mockups"
                      className={`border-transparent inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium 
                    ${isActive('/mockups') ? 'text-orange-500 border-orange-500' : 'text-gray-500 hover:text-gray-800 hover:border-gray-300'}`}
                  >
                    Mockups
                  </Link>
                  <Link
                      to="/timeline"
                      className={`border-transparent inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium 
                    ${isActive('/timeline') ? 'text-orange-500 border-orange-500' : 'text-gray-500 hover:text-gray-800 hover:border-gray-300'}`}
                  >
                    Timeline
                  </Link>
                  <Link
                      to="/risks"
                      className={`border-transparent inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium 
                    ${isActive('/risks') ? 'text-orange-500 border-orange-500' : 'text-gray-500 hover:text-gray-800 hover:border-gray-300'}`}
                  >
                    Risk Management
                  </Link>
                  <Link
                      to="/resources"
                      className={`border-transparent inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium 
                    ${isActive('/resources') ? 'text-orange-500 border-orange-500' : 'text-gray-500 hover:text-gray-800 hover:border-gray-300'}`}
                  >
                    Resource Allocation
                  </Link>
                  <Link
                      to="/commercials"
                      className={`border-transparent inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium 
                    ${isActive('/commercials') ? 'text-orange-500 border-orange-500' : 'text-gray-500 hover:text-gray-800 hover:border-gray-300'}`}
                  >
                    Investment
                  </Link>
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="-mr-2 flex items-center sm:hidden">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    type="button"
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
                    aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {/* Icon when menu is closed */}
                  {!isMenuOpen ? (
                      <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                  ) : (
                      // Icon when menu is open
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
              <div className="sm:hidden">
                <div className="pt-2 pb-3 space-y-1">
                  <Link
                      to="/"
                      onClick={() => setIsMenuOpen(false)}
                      className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium 
                  ${isActive('/') ? 'bg-orange-50 border-orange-500 text-orange-700' : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'}`}
                  >
                    Overview
                  </Link>
                  <Link
                      to="/deliverables"
                      onClick={() => setIsMenuOpen(false)}
                      className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium 
                  ${isActive('/deliverables') ? 'bg-orange-50 border-orange-500 text-orange-700' : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'}`}
                  >
                    Deliverables
                  </Link>
                  <Link
                      to="/mockups"
                      onClick={() => setIsMenuOpen(false)}
                      className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium 
                  ${isActive('/mockups') ? 'bg-orange-50 border-orange-500 text-orange-700' : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'}`}
                  >
                    UI Mockups
                  </Link>
                  <Link
                      to="/timeline"
                      onClick={() => setIsMenuOpen(false)}
                      className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium 
                  ${isActive('/timeline') ? 'bg-orange-50 border-orange-500 text-orange-700' : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'}`}
                  >
                    Implementation Timeline
                  </Link>
                  <Link
                      to="/risks"
                      onClick={() => setIsMenuOpen(false)}
                      className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium 
                  ${isActive('/risks') ? 'bg-orange-50 border-orange-500 text-orange-700' : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'}`}
                  >
                    Risk Management
                  </Link>
                  <Link
                      to="/resources"
                      onClick={() => setIsMenuOpen(false)}
                      className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium 
                  ${isActive('/resources') ? 'bg-orange-50 border-orange-500 text-orange-700' : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'}`}
                  >
                    Resource Allocation
                  </Link>
                  <Link
                      to="/commercials"
                      onClick={() => setIsMenuOpen(false)}
                      className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium 
                  ${isActive('/commercials') ? 'bg-orange-50 border-orange-500 text-orange-700' : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'}`}
                  >
                    Investment
                  </Link>
                </div>
              </div>
          )}
        </nav>

        {/* Main Content Area */}
        <main className="flex-grow py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Outlet/>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-500">
                © {currentYear} Nikhil Thakur
              </div>
              <div className="flex space-x-6">
                <a
                    href="mailto:thakur_nikhil@hotmail.com"
                    className="text-gray-400 hover:text-gray-500"
                >
                  Contact Us
                </a>
                <Link
                    to="/terms"
                    className="text-gray-400 hover:text-gray-500"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
  );
};

export default AppRouter;