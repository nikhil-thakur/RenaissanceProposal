import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProposalContainer from './ProposalContainer';
import DetailedImplementationTimeline from './implementation-timeline';
import KeySystemMockups from './ui-mockups';
import RiskManagementFramework from './risk-management';
import DetailedDeliverables from './deliverables-list';
import ResourceAllocationPlan from './resource-allocation';

const AppRouter = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Navigation Header */}
        <nav className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <span className="text-orange-500 font-bold text-xl">Renaissance Project Proposal</span>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link 
                    to="/" 
                    className="border-transparent text-gray-600 hover:border-orange-500 hover:text-orange-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    Overview
                  </Link>
                  <Link 
                    to="/timeline" 
                    className="border-transparent text-gray-600 hover:border-orange-500 hover:text-orange-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    Implementation Timeline
                  </Link>
                  <Link 
                    to="/mockups" 
                    className="border-transparent text-gray-600 hover:border-orange-500 hover:text-orange-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    UI Mockups
                  </Link>
                  <Link 
                    to="/deliverables" 
                    className="border-transparent text-gray-600 hover:border-orange-500 hover:text-orange-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    Deliverables
                  </Link>
                  <Link 
                    to="/risks" 
                    className="border-transparent text-gray-600 hover:border-orange-500 hover:text-orange-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    Risk Management
                  </Link>
                  <Link 
                    to="/resources" 
                    className="border-transparent text-gray-600 hover:border-orange-500 hover:text-orange-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    Resource Allocation
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu, show/hide based on menu state */}
          <div className="sm:hidden" id="mobile-menu">
            <div className="pt-2 pb-3 space-y-1">
              <Link 
                to="/" 
                className="bg-orange-50 border-orange-500 text-orange-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Overview
              </Link>
              <Link 
                to="/timeline" 
                className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Implementation Timeline
              </Link>
              <Link 
                to="/mockups" 
                className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                UI Mockups
              </Link>
              <Link 
                to="/deliverables" 
                className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Deliverables
              </Link>
              <Link 
                to="/risks" 
                className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Risk Management
              </Link>
              <Link 
                to="/resources" 
                className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Resource Allocation
              </Link>
            </div>
          </div>
        </nav>

        {/* Main Content Area */}
        <main className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Routes>
              <Route path="/" element={<ProposalContainer />} />
              <Route path="/timeline" element={<DetailedImplementationTimeline />} />
              <Route path="/mockups" element={<KeySystemMockups />} />
              <Route path="/deliverables" element={<DetailedDeliverables />} />
              <Route path="/risks" element={<RiskManagementFramework />} />
              <Route path="/resources" element={<ResourceAllocationPlan />} />
            </Routes>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-500">
                © 2023 Renaissance Project Proposal
              </div>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  Contact Us
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default AppRouter;
